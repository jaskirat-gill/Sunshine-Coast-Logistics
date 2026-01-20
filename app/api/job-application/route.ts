import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create transporter with Gmail
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
};

// Verify reCAPTCHA token
async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const data = await response.json();
    
    return data.success === true;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, coverLetter, resumeBase64, resumeFileName, recaptchaToken } = body;

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !phone?.trim() || !resumeBase64) {
      return NextResponse.json(
        { success: false, message: 'Name, email, phone, and resume are required.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Validate reCAPTCHA token
    if (!recaptchaToken) {
      return NextResponse.json(
        { success: false, message: 'reCAPTCHA verification is required.' },
        { status: 400 }
      );
    }

    const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
    
    if (!isRecaptchaValid) {
      return NextResponse.json(
        { success: false, message: 'reCAPTCHA verification failed. Please try again.' },
        { status: 400 }
      );
    }

    // Get recipient emails from environment
    const contactEmail = process.env.CONTACT_TO_EMAIL ?? '';
    const jobApplicationEmail = process.env.JOB_APPLICATION_EMAIL ?? '';
    
    // Build array of recipient emails (remove empty values)
    const recipientEmails = [contactEmail, jobApplicationEmail]
      .filter(email => email && email.trim())
      .map(email => email.trim());
    
    // Validate that at least one recipient email is configured
    if (recipientEmails.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Job application system is not properly configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Create email content
    const subject = 'New Job Application - Sunshine Coast Logistics';
    
    const htmlContent = `
      <html>
        <body>
          <h2>New Job Application</h2>
          <table style="border-collapse: collapse; width: 100%; margin-bottom: 20px;">
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold; background-color: #f9f9f9;">Name:</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${name}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold; background-color: #f9f9f9;">Email:</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${email}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold; background-color: #f9f9f9;">Phone:</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${phone}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold; background-color: #f9f9f9;">Submitted:</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${new Date().toLocaleString()}</td>
            </tr>
          </table>
          
          ${coverLetter ? `
          <h3>Cover Letter:</h3>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #007cba; margin-top: 10px;">
            ${coverLetter.replace(/\n/g, '<br>')}
          </div>
          ` : ''}
          
          <p style="margin-top: 20px; color: #666;">
            <strong>Resume:</strong> ${resumeFileName} (attached)
          </p>
        </body>
      </html>
    `;

    const textContent = `
New Job Application

Name: ${name}
Email: ${email}
Phone: ${phone}
Submitted: ${new Date().toLocaleString()}

${coverLetter ? `Cover Letter:\n${coverLetter}\n` : ''}
Resume: ${resumeFileName} (attached)
    `;

    // Send email with attachment
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"Sunshine Coast Logistics" <${process.env.GMAIL_USER}>`,
      to: recipientEmails, // Can be a string or array of email addresses
      replyTo: `${name} <${email}>`,
      subject: subject,
      text: textContent,
      html: htmlContent,
      attachments: [
        {
          filename: resumeFileName,
          content: resumeBase64,
          encoding: 'base64'
        }
      ]
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your job application has been submitted successfully. We will review your application and contact you soon.'
    });

  } catch (error) {
    console.error('Job application error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Sorry, there was an error submitting your application. Please try again or contact us directly.' 
      },
      { status: 500 }
    );
  }
} 
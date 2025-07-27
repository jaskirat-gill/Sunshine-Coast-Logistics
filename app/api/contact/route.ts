import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create transporter with Gmail
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD, // Use App Password, not regular password
    },
  });
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, phone, message } = body;

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required.' },
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

    // Get recipient email from environment or use default
    const toEmail = process.env.CONTACT_TO_EMAIL ?? '';
    
    // Validate recipient email
    if (!toEmail || !toEmail.trim()) {
      return NextResponse.json(
        { success: false, message: 'Contact form is not properly configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Create email content
    const subject = 'New Contact Form Submission - Sunshine Coast Logistics';
    
    const htmlContent = `
      <html>
        <body>
          <h2>New Contact Form Submission</h2>
          <table style="border-collapse: collapse; width: 100%; margin-bottom: 20px;">
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold; background-color: #f9f9f9;">Name:</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${name}</td>
            </tr>
            ${company ? `
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold; background-color: #f9f9f9;">Company:</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${company}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold; background-color: #f9f9f9;">Email:</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${email}</td>
            </tr>
            ${phone ? `
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold; background-color: #f9f9f9;">Phone:</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${phone}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold; background-color: #f9f9f9;">Submitted:</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${new Date().toLocaleString()}</td>
            </tr>
          </table>
          
          <h3>Message:</h3>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #007cba; margin-top: 10px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </body>
      </html>
    `;

    const textContent = `
New Contact Form Submission

Name: ${name}
${company ? `Company: ${company}` : ''}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
Submitted: ${new Date().toLocaleString()}

Message:
${message}
    `;

    // Send email
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"Sunshine Coast Logistics" <${process.env.GMAIL_USER}>`,
      to: toEmail,
      replyTo: `${name} <${email}>`,
      subject: subject,
      text: textContent,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Sorry, there was an error sending your message. Please try again or contact us directly.' 
      },
      { status: 500 }
    );
  }
} 
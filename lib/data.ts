import {
  Award,
  Clock,
  Facebook,
  Globe,
  Package,
  Shield,
  Thermometer,
  TrendingUp,
  Truck,
  Users,
  Layers,
  Star,
} from "lucide-react";

export const MASTER_DATA = {
  contact: {
    phone: "604-590-1001",
    fax: "1-888-320-1369",
    email: "altaf@sunshinecoastlogistics.com",
    address: "#203 1493 Foster St. White Rock, BC V4B OC4",
    map: "https://maps.app.goo.gl/WCUa6x6junKZASyP9",
  },
  hero: {
    tagline:
      "Expedited logistics. Unmatched speed. Excellence delivered by the truckload.",
    stats: [
      {
        icon: Users,
        label: "Over 5,000",
        sublabel: "businesses working with us",
        delay: 0.2,
      },
      {
        icon: Package,
        label: "Over 100,000",
        sublabel: "shipments per year",
        delay: 0.4,
      },
      {
        icon: Shield,
        label: "Your satisfaction",
        sublabel: "guaranteed",
        delay: 0.6,
      },
    ],
  },
  map: {
    title: "Global Logistics Network",
    description:
"We connect shippers across Canada and the U.S., providing seamless logistics solutions through our reliable, asset-based freight services.",    stats: {
      title: "Network Statistics",
      point1: "500+ active routes",
      point2: "98.7% on-time delivery",
    },
  },
  feature: {
    title: "Logistics Excellence",
    description: "Delivering exceptional service with cutting-edge technology",
    points: [
      {
        title: "Nationwide Coverage",
        description:
          "Our extensive network spans across North America, ensuring your shipments reach their destination on time, every time.",
        image: "home-services-1",
        color: "from-yellow-400 to-yellow-600",
      },
      {
        title: "Advanced Fleet Technology",
        description:
"Powered by Samsara telematics and a modern fleet, we deliver real-time visibility, safety, and unmatched operational efficiency",
        image: "home-services-2",
        color: "from-yellow-500 to-yellow-700",
      },
      {
        title: "Expert Logistics Team",
        description:
 "From cross-border hauls to time-critical shipments, our team builds freight solutions around your operation.",
        image: "roller3",
        color: "from-yellow-300 to-yellow-500",
      },
    ],
    stats: [
      { value: "20+", label: "Years of Experience" },
      { value: "1,000+", label: "Satisfied Clients" },
      { value: "500,000+", label: "Shipments Completed" },
    ],
  },
  landing_services: {
    title: "Service You Can Rely On",
    description:
      "We offer a wide range of services to meet your shipping needs",
    points: [
      {
        icon: Truck,
        title: "Expedite & Time Critical",
        description:
    "Team drivers ensure your time-sensitive freight moves nonstop, delivered on time, every time across North America.",
        delay: 0.1,
      },
      {
        icon: Clock,
        title: "24/7 Support",
        description:
          "Round-the-clock customer service and real-time tracking for complete peace of mind.",
        delay: 0.2,
      },
      {
        icon: Globe,
        title: "Nationwide Coverage",
        description:
          "Extensive network spanning all major routes and destinations in North America.",
        delay: 0.3,
      },
      {
        icon: Shield,
        title: "Secure Transport",
        description:
  "CTPAT, FAST, and CSA certified. Ensuring secure, compliant, and professionally handled freight every mile of the way",
        delay: 0.4,
      },
    ],
  },
  landing_about: {
    tagline:
    "Sunshine Coast Logistics Inc. is a leading asset-based carrier proudly serving Canada and the U.S. since 2015. Specializing in cross-border and time-critical freight, we deliver safe, reliable transportation backed by a modern fleet and certified compliance.",
    subTagline:
      "We combine reliability, responsiveness, and cross-border expertise to keep your freight moving without delay.",    features: [
      {
        icon: Award,
        title: "Industry Excellence",
        description:
          "Over 20 years of experience in logistics and transportation management",
      },
      {
        icon: Clock,
        title: "24/7 Support",
        description:
          "We're with you every step, live tracking and dedicated support, day or night",
      },
      {
        icon: Globe,
        title: "Global Reach",
        description:
     "From the Port of Vancouver to destinations across the U.S., we move bonded freight with speed, compliance, and care.",
      },
      {
        icon: Shield,
        title: "Secure & Reliable",
        description: "Protecting your freight with industry-leading security and proven reliability",
      },
    ],
    numBusinesses: "1,000+",
  },
  contact_page: {
    formFields: [
      {
        label: "Name",
        placeholder: "Your full name",
        required: true,
        type: "text",
        half: true,
      },
      {
        label: "Company",
        placeholder: "Company name (optional)",
        required: false,
        type: "text",
        half: true,
      },
      {
        label: "Email",
        placeholder: "your.email@example.com",
        required: true,
        type: "email",
        half: false,
      },
      {
        label: "Phone",
        placeholder: "(555) 123-4567",
        required: false,
        type: "tel",
        half: false,
      },
    ],
    tagline:
      "Ready to streamline your logistics operations? Contact us for a personalized consultation.",
    image: "logocloseup"
  },
  about_page: {
    tagline: "Delivering logistics excellence since 2015",
    tabs: [
      { title: "Our Story", icon: Award },
      { title: "Our Mission", icon: TrendingUp },
      { title: "Our Values", icon: Shield },
    ],
    tabsContent: [
      {
        title: "Our Story",
        content:
          "Sunshine Coast Logistics began in 2015 with one truck and a single owner operator determined to build something better. Today, we operate a modern fleet of over 50 trucks and more than 100 trailers, providing flexible and high-performance freight solutions across Canada and the United States. As a family-owned company with a strong culture and dedicated team, we have built our reputation on trust, safety, and reliability. Our focus on proactive communication and on-time delivery ensures that every customer receives dependable and professional service.",
        image: "home-about",
        stats: [
          { value: "2015", label: "Founded" },
          { value: "15+", label: "Years Experience" },
          { value: "100%", label: "Family Owned" },
        ],
      },
      {
        title: "Our Mission",
        content:
  "As a family-owned company, our mission is to provide reliable, efficient, and customer-focused transportation solutions rooted in trust, accountability, and long-term relationships. We are committed to safety, sustainability, and continuous improvement. By investing in our people, technology, and fleet, we strive to deliver consistent value and set a higher standard for the logistics industry through integrity and service excellence.",        image: "roller2",
        stats: [
          { value: "24/7", label: "Support" },
          { value: "100%", label: "Commitment" },
          { value: "1,000+", label: "Happy Clients" },
        ],
      },
      {
        title: "Our Values",
        content:
   "At Sunshine Coast Logistics, our values are the foundation of who we are and how we operate. We believe in integrity, putting honesty and accountability at the center of every decision. Safety is always our top priority, both on the road and in the workplace. We are committed to delivering service excellence, treating every shipment with care and urgency. We show respect to our team, our clients, and our partners. We embrace innovation to drive improvement and adapt to changing needs. We operate responsibly, with a strong focus on sustainability and long-term impact",        image: "roller3",
        stats: [
          { value: "Safety", label: "First Priority" },
          { value: "Integrity", label: "In All Dealings" },
          { value: "Excellence", label: "In Service" },
        ],
      },
    ],
    tagline2: "What Sets Us Apart",
    points: [
      {
        icon: Users,
        title: "Customer Focus",
        description:
          "Our clients work directly with ownership for faster communication, stronger relationships, and service they can rely on",      },
      {
        icon: Shield,
        title: "Safety First",
        description:
          "Safety is our priority, backed by Samsara technology and a dedicated safety team.",
      },
      {
        icon: Truck,
        title: "Modern Fleet",
        description:
          "Our modern fleet of Volvo trucks and Utility and Wabash trailers ensures efficient, reliable, and environmentally responsible transportation."      },
      {
        icon: Globe,
        title: "Nationwide Coverage",
        description:
          "Our extensive network provides comprehensive logistics solutions across North America.",
      },
    ],
    cta: {
      tagline: "Ready to Get Started?",
      description:
  "We are setting the pace in freight. Let’s move your business forward — contact us today.",
      button: "Contact Us",
    },
  },
  services_page: {
    tagline:
      "Comprehensive logistics solutions tailored to your business needs",
    tagline2: "Explore Our Services",
    services: [
      {
        title: "FTL (Full Truck Load)",
        icon: Truck,
        description:
          "We provide reliable full truckload transportation across Canada and the U.S., with options for both expedited and standard service. Whether your shipment requires time-sensitive delivery or a cost-effective scheduled run, our modern fleet and experienced drivers ensure safe, on-time performance every step of the way. From single skid loads to full trailers, we move your freight with precision, care, and consistent communication.",        image: "still3",
        features: [
          "Dedicated capacity for your shipments",
          "Direct point-to-point transportation",
          "Reduced handling and transit time",
          "Ideal for time-sensitive or high-volume shipments",
          "Full visibility and tracking throughout transit",
        ],
      },
      {
        title: "LTL (Less Than Truck Load)",
        icon: Globe,
        description:
"Not every shipment needs a full trailer. Our LTL service provides reliable, cost-effective transportation for smaller freight volumes, with flexible scheduling and timely pick-ups and deliveries. Whether it’s one skid or several pallets, we move your freight efficiently across Canada and the U.S., backed by the same commitment to communication, care, and performance as our FTL service.",
        image: "still4",
        features: [
          "Cost-effective solution for smaller shipments",
          "Flexible scheduling options",
          "Consolidated delivery network",
          "Professional handling of partial loads",
          "Specialized equipment for various cargo types",
        ],
      },
      {
        title: "Expedited Shipping",
        icon: Clock,
        description:
  "When time is critical, our expedited service delivers. We provide priority handling, direct routing, and team driver options to ensure your freight arrives fast and on time. From urgent one-off shipments to regular time-sensitive runs, we offer dependable solutions across Canada and the U.S. with real-time tracking and proactive communication every step of the way.",
        image: "still2",
        features: [
          "Time-critical delivery solutions",
          "Priority handling and routing",
          "Team drivers for non-stop transit",
          "Real-time tracking and updates",
          "Available 24/7/365 for emergency shipments",
        ],
      },
      {
        title: "Specialized Logistics",
        icon: Shield,
        description:
          "Our specialized logistics services cater to unique transportation needs, including oversized loads, hazardous materials, and high-value shipments requiring extra security measures.",
        image: "still1",
        features: [
          "Custom solutions for unique shipping requirements",
          "Experienced handling of oversized and overweight freight",
          "Hazardous materials transportation compliance",
          "High-value shipment security protocols",
          "Specialized equipment and trained personnel",
        ],
      },
    ],
    mapCoverage: "Service Coverage",
    mapDescription:
      "Our extensive network spans across North America, ensuring reliable and efficient logistics services wherever your business needs them.",
    mapPoints: [
      {
        title: "Canada Coverage",
        description:
          "Complete coverage across all Canadian provinces with specialized expertise in BC logistics.",
      },
      {
        title: "US Coverage",
        description:
          "Comprehensive service throughout the continental United States with strategic partnerships.",
      },
      {
        title: "Cross-Border Expertise",
        description:
          "Seamless cross-border shipping with customs documentation management.",
      },
    ],
    cta: {
      button: "Contact Us",
      tagline: "Need Custom Logistics Solutions?",
      description:
        "Our team of experts will work with you to design a tailored logistics plan that meets your specific business requirements.",
    },
  },
  equipment_page: {
    tagline: "State-of-the-art fleet designed to meet all your logistics needs",
    equipment: [
      {
        name: "Dry Vans",
        icon: Truck,
        description:
 "Our late-model dry van trailers are equipped for secure and efficient transport. All units feature plated, snag-free interiors for maximum cargo width, wood floors, vents, and logistics posts every 16 inches to ensure flexible and secure load placement. Built to handle a wide range of freight, our trailers support safe, compliant, and damage-free transit across Canada and the U.S.",
        features: [
          "53' Trailers",
          "Air-ride suspension",
          "Logistics posts",
          "Roll-up or swing doors",
          "Ideal for non-perishable goods",
        ],
        image: "home-services-1",
        color: "from-yellow-400 to-yellow-600",
      },
      {
        name: "Refrigerated Trailers",
        icon: Thermometer,
        description:
 "Transporting temperature and time-sensitive truckloads with specific requirements is a challenging task. Sunshine Coast Refrigerated executes these requirements with state-of-the-art equipment and information technology.",
        features: [
          "Temperature-controlled environment",
          "Real-time temperature monitoring",
          "Multi-temperature zones available",
          "Backup power systems",
          "Suitable for perishable goods",
        ],
        image: "frontshot",
        color: "from-yellow-500 to-yellow-700",
      },
      {
        name: "Flatbeds",
        icon: Layers,
        description:
 "Sunshine Coast Logistics offers a versatile flatbed fleet equipped to handle oversized, awkward, or non-standard freight across North America. Our equipment includes 48-foot and 53-foot tandem and tridem trailers, as well as Roll-Tite (Conestoga) systems that provide the protection of a dry van with the flexibility of a flatbed. Ideal for weather-sensitive or crane-loaded freight, our flatbed services are designed for safety, flexibility, and efficient loading every time.",
        features: [
          "48' to 53' lengths available",
          "Tandem and triaxle options",
          "Heavy-duty securing points",
          "Specialized strapping systems",
          "Perfect for oversized loads",
        ],
        image: "home-services-3",
        color: "from-yellow-300 to-yellow-500",
      },
    ],
    cta: {
      button: "Contact Us",
      tagline: "Need Custom Logistics Solutions?",
      description:
        "Our team of experts will work with you to design a tailored logistics plan that meets your specific business requirements.",
    },
  },
  join_page: {
    benefits: [
      {
        title: "Competitive Compensation",
        description:
          "We offer industry-leading pay packages with performance bonuses and regular salary reviews.",
        icon: Star,
      },
      {
        title: " Benefits",
        description: "Comprehensive benefits for you and your family.",
        icon: Shield,
      },
      {
        title: "Work-Life Balance",
        description:
          "Flexible scheduling options and generous paid time off to ensure you stay refreshed.",
        icon: Clock,
      },
      {
        title: "Career Growth",
        description:
          "Ongoing training and clear advancement paths to help you reach your professional goals.",
        icon: Users,
      },
      {
        title: "Modern Equipment",
        description:
          "Drive late-model, well-maintained vehicles equipped with the latest technology.",
        icon: Truck,
      },
    ],
    positions: [
      {
        title: "Long-Haul Truck Driver",
        location: "British Columbia",
        type: "Full-time",
        description:
          "Join our team of professional drivers transporting freight across North America. We're looking for experienced CDL holders with a clean driving record and dedication to safety.",
        requirements: [
          "Valid Class 1/A Commercial Driver's License",
          "Minimum 2 years of verifiable driving experience",
          "Clean driving record",
          "Ability to pass DOT physical and drug screening",
          "Strong communication skills",
        ],
      }
    ],
  },
  footer: {
    headline:
      "Reliable, fast, and secure logistics solutions across North America. We connect businesses with efficient transportation services.",
  },
  certifications: [
    { name: "FAST", slug: "certification-fast" },
    { name: "CTPAT", slug: "certification-ctpat" },
    { name: "CSA", slug: "certification-csa" },
    { name: "DOT", slug: "certification-dot" },
    { name: "FMCSA", slug: "certification-fmcsa" },
  ],
  socials: [
    {
      icon: Facebook,
      href: "https://www.facebook.com/sunshinecoastlogistics/",
      label: "Facebook",
    },
  ],
};

export const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Equipment", href: "/equipment" },
  { name: "Join Us", href: "/join" },
];

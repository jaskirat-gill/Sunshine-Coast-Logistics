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
    phone: "604-590-1001 Ext 101",
    cell: "604-417-3505",
    fax: "1-888-320-1369",
    email: "altaf@sunshinecoastlogistics.com",
    address: "#203 1493 Foster St. White Rock, BC V4B OC4",
    map: "https://maps.app.goo.gl/WCUa6x6junKZASyP9",
  },
  hero: {
    tagline:
      "Delivering logistics excellence with speed, reliability, and precision across the continent",
    stats: [
      {
        icon: Users,
        label: "Over 1,000",
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
      "Our platform connects carriers and shippers worldwide, providing seamless logistics solutions across continents.",
    stats: {
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
        image: "/home_services_1.jpg",
        color: "from-yellow-400 to-yellow-600",
      },
      {
        title: "Advanced Fleet Technology",
        description:
          "State-of-the-art tracking systems and modern vehicles provide real-time updates and maximum efficiency.",
        image: "/home_services_2.jpg",
        color: "from-yellow-500 to-yellow-700",
      },
      {
        title: "Expert Logistics Team",
        description:
          "Our experienced professionals design customized shipping solutions tailored to your specific business needs.",
        image: "/home_services_3.jpg",
        color: "from-yellow-300 to-yellow-500",
      },
    ],
    stats: [
      { value: "10+", label: "Years of Experience" },
      { value: "1,000+", label: "Satisfied Clients" },
      { value: "500,000+", label: "Shipments Completed" },
    ],
  },
  landing_services: {
    title: "Excellent Service",
    description:
      "We offer a wide range of services to meet your shipping needs",
    points: [
      {
        icon: Truck,
        title: "Express Delivery",
        description:
          "Time-critical shipments delivered with precision and care across North America.",
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
          "Advanced security protocols and careful handling for your valuable shipments.",
        delay: 0.4,
      },
    ],
  },
  landing_about: {
    tagline:
      "We are a leading logistics platform connecting shippers and carriers across the Sunshine Coast and beyond. Our digital ecosystem provides comprehensive solutions for modern transportation challenges.",
    subTagline:
      "From transport tenders to real-time cargo tracking, we leverage cutting-edge technology to streamline logistics operations and deliver exceptional value to our clients.",
    features: [
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
          "Round-the-clock customer support and real-time shipment monitoring",
      },
      {
        icon: Globe,
        title: "Global Reach",
        description:
          "Extensive network covering major shipping routes worldwide",
      },
      {
        icon: Shield,
        title: "Secure & Reliable",
        description: "Advanced security measures and reliable service delivery",
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
  },
  about_page: {
    tagline: "Delivering logistics excellenve since 2015",
    tabs: [
      { title: "Our Story", icon: Award },
      { title: "Our Mission", icon: TrendingUp },
      { title: "Our Values", icon: Shield },
    ],
    tabsContent: [
      {
        title: "Our Story",
        content:
          "Since 2015, Sunshine Coast Logistics has been a family-owned business dedicated to providing flexible, comprehensive freight solutions. We've worked to cultivate a great company culture with a modern fleet and best-in-class driving force. Our company was built on the premise that each and every customer deserves a carrier they can trust, a carrier that operates safely, delivers on time, and communicates proactively.",
        image: "/home_about_image.jpg",
        stats: [
          { value: "2015", label: "Founded" },
          { value: "15+", label: "Years Experience" },
          { value: "100%", label: "Family Owned" },
        ],
      },
      {
        title: "Our Mission",
        content:
          "Our mission is to provide exceptional transportation and logistics services that exceed our customers' expectations. We strive to be the most reliable, efficient, and customer-focused logistics partner in the industry. Through continuous innovation, investment in technology, and development of our team, we aim to set new standards in the logistics industry while maintaining our commitment to safety, sustainability, and community engagement.",
        image: "/home_services_2.jpg",
        stats: [
          { value: "24/7", label: "Support" },
          { value: "100%", label: "Commitment" },
          { value: "1,000+", label: "Happy Clients" },
        ],
      },
      {
        title: "Our Values",
        content:
          "At Sunshine Coast Logistics, our core values guide everything we do. We believe in integrity in all our dealings, safety as our top priority, excellence in service delivery, respect for our team members and clients, innovation to drive continuous improvement, and sustainability in our operations. These values form the foundation of our company culture and inform our decision-making at every level of the organization.",
        image: "/home_services_3.jpg",
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
          "We prioritize our customers' needs and build long-term relationships based on trust and reliability.",
      },
      {
        icon: Shield,
        title: "Safety First",
        description:
          "Safety is our top priority in all operations, protecting our team, cargo, and communities.",
      },
      {
        icon: Truck,
        title: "Modern Fleet",
        description:
          "Our state-of-the-art fleet ensures efficient, reliable, and environmentally responsible transportation.",
      },
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
        "Contact our team today to discuss how our logistics solutions can help your business thrive.",
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
          "We provide reliable pick-ups and deliveries, competitive rates, and courteous customer service for Full Truck Load freight. Whether Flatbed, Dry Van, one skid or half a trailer, Sunshine Coast Logistics has you covered from coast to coast.",
        image: "/home_services_1.jpg",
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
          "Not every shipment requires a full trailer. Our team offers reliable pick-ups and deliveries for Less Than Truck Load freight, ensuring flexibility and efficiency for smaller shipments.",
        image: "/home_services_2.jpg",
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
          "When time is critical, our expedited shipping services ensure your freight arrives at its destination as quickly as possible, with priority handling and direct routes.",
        image: "/home_services_3.jpg",
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
        image: "/home_services_4.jpg",
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
          "Our late-model dry van trailers are equipped with logistics tracks, wood floors, and vents. We only use plated dry vans with a snag-free finish allowing for maximum width for your specific needs.",
        features: [
          "53' Trailers",
          "Air-ride suspension",
          "Logistics posts",
          "Roll-up or swing doors",
          "Ideal for non-perishable goods",
        ],
        image: "/home_services_1.jpg", // Replace with actual image
        color: "from-yellow-400 to-yellow-600",
      },
      {
        name: "Refrigerated Trailers",
        icon: Thermometer,
        description:
          "Transporting temperature and time-sensitive truckloads with specific requirements is a challenging task. Sunshine Coast Refrigerated executes these requirements with state of the art equipment and information technology.",
        features: [
          "Temperature-controlled environment",
          "Real-time temperature monitoring",
          "Multi-temperature zones available",
          "Backup power systems",
          "Suitable for perishable goods",
        ],
        image: "/home_services_2.jpg", // Replace with actual image
        color: "from-yellow-500 to-yellow-700",
      },
      {
        name: "Flatbeds",
        icon: Layers,
        description:
          "Sunshine Coast offers a versatile flatbed fleet that is able to transport any type of awkward load to and from anywhere in North America. An assortment of flatbeds ranging from 48' -53' tandem and triaxle.",
        features: [
          "48' to 53' lengths available",
          "Tandem and triaxle options",
          "Heavy-duty securing points",
          "Specialized strapping systems",
          "Perfect for oversized loads",
        ],
        image: "/home_services_3.jpg", // Replace with actual image
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
      },
      {
        title: "Logistics Coordinator",
        location: "Sunshine Coast, BC",
        type: "Full-time",
        description:
          "Coordinate and optimize freight movement, working closely with drivers, customers, and operations team to ensure efficient and timely deliveries.",
        requirements: [
          "Bachelor's degree in logistics, supply chain, or related field (or equivalent experience)",
          "2+ years experience in logistics coordination",
          "Proficiency in transportation management systems",
          "Strong problem-solving and organizational skills",
          "Excellent communication abilities",
        ],
      },
      {
        title: "Fleet Maintenance Technician",
        location: "Sunshine Coast, BC",
        type: "Full-time",
        description:
          "Maintain and repair our fleet of trucks and trailers, ensuring they meet all safety standards and remain in optimal operating condition.",
        requirements: [
          "Certified diesel mechanic with 3+ years experience",
          "Experience with preventative maintenance programs",
          "Knowledge of DOT regulations",
          "Ability to troubleshoot and repair various vehicle systems",
          "Valid driver's license",
        ],
      },
    ],
  },
  footer: {
    headline:
      "Reliable, fast, and secure logistics solutions across North America. We connect businesses with efficient transportation services.",
  },
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

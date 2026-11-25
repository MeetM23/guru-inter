export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface ValueCard {
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: "finance" | "possession";
  shortDescription: string;
  fullDescription: string;
}

export interface CommodityItem {
  id: string;
  name: string;
  botanical: string;
  grades: string;
  purity: string;
  moisture: string;
  packing: string;
  moq: string;
  origin: string;
  season: string;
  description: string;
  specs: {
    grade: string;
    purity: string;
    moisture: string;
    packing: string;
    moq: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HubItem {
  name: string;
  type: string;
  description: string;
  coordinates: { x: number; y: number }; // Relative percentage for map
}

export const siteContent = {
  // Principal & Desk Information
  company: {
    name: "Guru International",
    legalName: "Guru International Advisory & Trading Desk",
    principalName: "Naresh Jadav",
    principalRole: "Managing Director & Principal",
    principalPhotoPlaceholder: "/placeholder-principal.jpg",
    phone: "+91 94281 11775",
    whatsapp: "+91 91065 71342",
    email: "jadavnaresh1982@gmail.com",
    address: "17, Yogiraj Complex, At & Ta. Mandal, Dist. Ahmedabad - 382130, Gujarat, India",
    officeHours: "Monday to Saturday, 9:30 AM to 7:00 PM IST",
  },

  // Key stats strip (4 numbers)
  stats: [
    { value: "[15+]", label: "Years in operation" },
    { value: "[450+]", label: "Mandates handled" },
    { value: "[25,000+]", label: "Tonnes dispatched / yr" },
    { value: "[12+]", label: "Partner mandis" },
  ],

  // Brand Story & Mission
  about: {
    eyebrow: "About Guru International",
    title: "Dual-division execution. One accountable desk.",
    lead: "Operating from the economic engine of Gujarat, Guru International bridges institutional commercial real estate financing with bulk agricultural commodity supply.",
    storyP1:
      "Guru International was established to provide seasoned advisory across two critical pillars of Western India's commercial economy: capital structuring for industrial land, manufacturing facilities, and SARFAESI bank tender assets; and physical procurement of staple agricultural commodities straight from APMC yards.",
    storyP2:
      "Unlike fragmented intermediaries, our desk operates on direct mandates only. Every commercial mortgage application, tender acquisition, or grain dispatch is vetted under statutory legal scrutiny and strict quality grading before execution.",
    values: [
      {
        title: "Verification first",
        description:
          "Every land parcel, revenue record, and commodity lot undergoes deep physical and statutory verification before execution.",
      },
      {
        title: "Local knowledge",
        description:
          "Decades of direct ground presence across Gujarat's industrial corridors and Saurashtra-North Gujarat agricultural trading belts.",
      },
      {
        title: "Institutional discipline",
        description:
          "Transparent compliance, rigorous title diligence, and contractual delivery matching corporate treasury standards.",
      },
      {
        title: "Clear communication",
        description:
          "Single point of contact from initial asset screening to closing execution, disbursement, or final yard dispatch.",
      },
    ],
    milestones: [
      {
        year: "[2010]",
        title: "Foundation of Trading Operations",
        description:
          "Initiated direct procurement and grading of Cumin Seeds and pulses across Saurashtra & North Gujarat APMC mandis.",
      },
      {
        year: "[2014]",
        title: "Industrial Finance Desk",
        description:
          "Structured first multi-bank term loan syndications for manufacturing plots across Ahmedabad & Vadodara industrial estates.",
      },
      {
        year: "[2018]",
        title: "SARFAESI Resolution Advisory",
        description:
          "Formed dedicated technical and legal cell for bank auction properties, DM physical possession orders, and recovery resolutions.",
      },
      {
        year: "[2022]",
        title: "Institutional Mandate Expansion",
        description:
          "Scaled institutional supply lines for corporate spice processors and lease rental discounting for commercial Grade-A assets.",
      },
      {
        year: "[2026]",
        title: "Unified Western India Advisory",
        description:
          "Operating as the trusted direct transaction desk for industrial asset owners, auction buyers, and pan-India agricultural procurers.",
      },
    ],
    principles: [
      {
        title: "Statutory Due Diligence",
        description: "Zero tolerance for clouded titles, unverified revenue entries, or substandard crop adulteration.",
      },
      {
        title: "Direct Mandates Only",
        description: "We work directly with asset owners, authorised corporate representatives, and primary APMC farmers.",
      },
      {
        title: "Clean Asset Ownership",
        description: "Every commercial real estate case has verified municipal permissions, GIDC transfers, or clear DRT orders.",
      },
      {
        title: "Zero Third-Party Escrow Risk",
        description: "Direct bank settlement and transparent commercial documentation ensuring total financial security.",
      },
    ],
  },

  // Property Finance & Possession Services
  propertyServices: [
    {
      id: "term-loans",
      title: "Industrial Term Loans",
      category: "finance",
      shortDescription:
        "Structured long-term financing for GIDC industrial units, factory construction, and operational machinery expansions.",
      fullDescription:
        "We assist manufacturers and industrial park promoters in structuring competitive term credit facilities with leading public and private banking consortia, optimizing tenure and debt service covenants.",
    },
    {
      id: "commercial-mortgages",
      title: "Commercial Mortgages",
      category: "finance",
      shortDescription:
        "Acquisition finance and balance sheet recapitalization for corporate office buildings and commercial properties.",
      fullDescription:
        "Structuring collateralized mortgage facilities tailored for commercial real estate owners, with competitive loan-to-value ratios and clean release schedules.",
    },
    {
      id: "lrd",
      title: "Lease Rental Discounting (LRD)",
      category: "finance",
      shortDescription:
        "Immediate liquidity against future lease rentals of pre-leased Grade-A corporate tenants and logistics parks.",
      fullDescription:
        "Discounting verified long-term lease contracts with multinational and institutional tenants, delivering low-cost working capital while retaining property ownership.",
    },
    {
      id: "debt-syndication",
      title: "Factory Debt Syndication",
      category: "finance",
      shortDescription:
        "Multi-bank consortia coordination for high-value manufacturing plants, logistics hubs, and infrastructure projects.",
      fullDescription:
        "End-to-end preparation of Information Memorandums, techno-economic feasibility studies, and inter-creditor arrangement structuring.",
    },
    {
      id: "sarfaesi",
      title: "SARFAESI Resolutions",
      category: "possession",
      shortDescription:
        "Legal advisory and procedural navigation for Section 13(2), 13(4) notices and DRT settlement matters.",
      fullDescription:
        "Strategic representation and negotiation advisory assisting asset purchasers and promoters in resolving SARFAESI recovery proceedings transparently.",
    },
    {
      id: "tender-auctions",
      title: "Govt. Tender & Bank Auctions",
      category: "possession",
      shortDescription:
        "Due diligence, reserve price analysis, and bidding execution support for IBAPI, e-BKray, and state e-auctions.",
      fullDescription:
        "Technical appraisal of auction properties, revenue records scrutiny, and bridge debt arrangements for winning bidders.",
    },
    {
      id: "dm-court-orders",
      title: "DM / Court Possession Orders",
      category: "possession",
      shortDescription:
        "Assistance in securing Section 14 physical possession warrants from District Magistrates and Chief Metropolitan Magistrates.",
      fullDescription:
        "Coordinating with local revenue authorities, police assistance requisitions, and physical possession handover protocols.",
    },
    {
      id: "title-tsr",
      title: "30-Year Title TSR & Revenue Search",
      category: "possession",
      shortDescription:
        "Comprehensive 30-year revenue search, Index-II verification, 7/12 records, and clear encumbrance certificates.",
      fullDescription:
        "Deep statutory investigation across sub-registrar archives, municipal town planning records, and high court litigation registers.",
    },
  ],

  propertyProcess: [
    {
      step: "01",
      title: "Asset Review",
      description: "Initial feasibility screening, municipal zoning check, and debt sizing appraisal.",
    },
    {
      step: "02",
      title: "Document & Title Check",
      description: "Comprehensive 30-year TSR, revenue entries verification, and statutory title scrutiny.",
    },
    {
      step: "03",
      title: "Structuring",
      description: "Credit assessment, debt packaging, and presentation to appropriate institutional lenders.",
    },
    {
      step: "04",
      title: "Capital / Resolution",
      description: "Sanction letter execution, legal documentation, and final capital disbursement release.",
    },
  ],

  propertyChecklist: [
    "Primary Title Deed & Chain Documents (Registered Sale Deed, Lease Deed, Index-II)",
    "Village Form 7/12, 8-A, Property Card & City Survey Extract (Latest 3 months)",
    "Sanctioned Building & Factory Layout Plans with Local Authority NOCs",
    "Last 3 Financial Years Audited Financials, ITR, and GST Return Statements",
    "Existing Bank Sanction Letters, Loan Account Statements & NOCs (if mortgaged)",
    "Approved Valuation Report and Structural Feasibility Certificate (if available)",
  ],

  propertyFAQ: [
    {
      question: "What is the typical timeline for an industrial term loan sanction?",
      answer:
        "A typical industrial term loan mandate takes between 3 to 6 weeks from submission of a complete documentation dossier to formal bank sanction and initial disbursement.",
    },
    {
      question: "Can you assist with properties undergoing SARFAESI bank auction?",
      answer:
        "Yes. We conduct complete pre-bid title due diligence, verify municipal tax and revenue dues, inspect physical status, and structure acquisition funding for qualifying buyers.",
    },
    {
      question: "What loan-to-value (LTV) can be achieved through Lease Rental Discounting?",
      answer:
        "Depending on the credit rating of the tenant and the unexpired lease tenure, institutional LRD facilities typically achieve 70% to 85% of net discounted rental cash flows.",
    },
    {
      question: "What documents are required for a 30-year Title Search Report (TSR)?",
      answer:
        "We require copies of the current ownership deed, prior link documents dating back 30 years, Index-II extracts, 7/12 entries, and approved layout plans.",
    },
    {
      question: "Do you handle distressed asset settlements directly with banks?",
      answer:
        "Yes, our desk assists in structured One-Time Settlement (OTS) proposals and SARFAESI debt resolution frameworks within RBI regulatory guidelines.",
    },
    {
      question: "Are factory loans available for un-notified industrial zones in Gujarat?",
      answer:
        "Financing is primarily channeled to approved GIDC estates and non-agricultural (NA) industrial zoned land. We review conversion records before mandate acceptance.",
    },
  ],

  // Bulk Agro Commodities
  commodities: [
    {
      id: "cumin-seeds",
      name: "Cumin Seeds (Jeera)",
      botanical: "Cuminum cyminum",
      grades: "Sortex Clean 99.5%, Machine Clean, Europe / Singapore Quality",
      purity: "99.5% Min Sortex Clean",
      moisture: "8.5% Maximum",
      packing: "25kg / 50kg PP & Jute bags with inner poly liner",
      moq: "10 Metric Tonnes",
      origin: "APMC Mandi Unjha, Gujarat",
      season: "February to April (Peak arrivals)",
      description:
        "Procured directly from primary producers at APMC Unjha — Asia's largest spice hub. Rigorously Sortex-cleaned to remove stems, dust, and shriveled seeds, delivering distinct aroma and high volatile oil content.",
      specs: {
        grade: "Sortex Clean 99.5%",
        purity: "99.5% Minimum",
        moisture: "8.5% Maximum",
        packing: "25kg / 50kg PP Bags",
        moq: "10 Metric Tonnes",
      },
    },
    {
      id: "black-gram",
      name: "Black Gram (Urad)",
      botanical: "Vigna mungo",
      grades: "Whole Black Gram, Split Urad Chilka, Urad Dhoya (Gota)",
      purity: "99.0% Machine Clean",
      moisture: "10.5% Maximum",
      packing: "30kg / 50kg Brand-printed woven bags",
      moq: "15 Metric Tonnes",
      origin: "APMC Gondal & Rajkot Yards, Gujarat",
      season: "October to December (Kharif harvest)",
      description:
        "Sourced from the fertile agricultural belts of Saurashtra through Gondal and Rajkot trading yards. Carefully graded for uniform grain size, high culinary yield, and minimal foreign matter.",
      specs: {
        grade: "Whole & Split Machine Clean",
        purity: "99.0% Minimum",
        moisture: "10.5% Maximum",
        packing: "30kg / 50kg Woven Bags",
        moq: "15 Metric Tonnes",
      },
    },
    {
      id: "tuwar-dal",
      name: "Tuwar Dal (Pigeon Pea)",
      botanical: "Cajanus cajan",
      grades: "Fatka Grade A-1 Desi, Oily Polished, Unpolished",
      purity: "99.2% Sortex Quality",
      moisture: "10.0% Maximum",
      packing: "25kg / 50kg High-tensile poly-lined bags",
      moq: "15 Metric Tonnes",
      origin: "Central & Saurashtra Mandis, Gujarat",
      season: "December to February",
      description:
        "Premium Fatka-milled pigeon pea dal sourced from selected regional millers and mandis. Free from artificial colors, chemical polishes, and un-hulled grains, providing natural sweetness and protein content.",
      specs: {
        grade: "Fatka Grade A-1",
        purity: "99.2% Minimum",
        moisture: "10.0% Maximum",
        packing: "25kg / 50kg Bags",
        moq: "15 Metric Tonnes",
      },
    },
  ],

  commodityProcess: [
    {
      step: "01",
      title: "Mandi Yard Selection",
      description: "Direct inspection of incoming grower lots at APMC Unjha, Gondal, and Rajkot yards.",
    },
    {
      step: "02",
      title: "Lab Testing & Sorting",
      description: "Moisture verification, Sortex grading, foreign matter separation, and purity certification.",
    },
    {
      step: "03",
      title: "Standardized Packing",
      description: "Poly-lined moisture-barrier bagging with batch traceability and tamper seals.",
    },
    {
      step: "04",
      title: "Dispatched Logistics",
      description: "Weighbridge certified dispatch with GPS-tracked road transport across India.",
    },
  ],

  seasonality: [
    { month: "Jan", cumin: false, urad: true, tuwar: true },
    { month: "Feb", cumin: true, urad: false, tuwar: true },
    { month: "Mar", cumin: true, urad: false, tuwar: false },
    { month: "Apr", cumin: true, urad: false, tuwar: false },
    { month: "May", cumin: false, urad: false, tuwar: false },
    { month: "Jun", cumin: false, urad: false, tuwar: false },
    { month: "Jul", cumin: false, urad: false, tuwar: false },
    { month: "Aug", cumin: false, urad: false, tuwar: false },
    { month: "Sep", cumin: false, urad: true, tuwar: false },
    { month: "Oct", cumin: false, urad: true, tuwar: false },
    { month: "Nov", cumin: false, urad: true, tuwar: false },
    { month: "Dec", cumin: false, urad: false, tuwar: true },
  ],

  commodityFAQ: [
    {
      question: "What is your minimum order quantity (MOQ) for Cumin Seeds?",
      answer:
        "Our standard MOQ for Sortex Clean Cumin Seeds is 10 Metric Tonnes (approx. one full truckload), packaged in 25kg or 50kg poly-lined bags.",
    },
    {
      question: "Do you supply export-grade Cumin (Singapore / Europe quality)?",
      answer:
        "Yes, we supply Sortex 99.5% clean seed lots tested for pesticide residues, moisture, and volatile oil content matching international import parameters.",
    },
    {
      question: "Can buyers inspect lots at the APMC yard prior to loading?",
      answer:
        "Yes. Buyers or their designated third-party inspection agencies (SGS, Geo-Chem, etc.) are welcome to draw samples and inspect lots at our partner warehouses.",
    },
    {
      question: "What are your payment terms for bulk agricultural dispatches?",
      answer:
        "Terms depend on contract size and buyer verification. Standard trade involves advance deposit against warehouse receipt or irrevocable Letter of Credit (LC).",
    },
    {
      question: "How do you ensure moisture control during transit?",
      answer:
        "All lots are packed in heavy-duty food-grade poly bags with inner liner barriers, loaded into inspected sealed trucks with tarpaulin protection.",
    },
    {
      question: "Do you supply both whole and split Black Gram (Urad)?",
      answer:
        "Yes, we supply Whole Black Gram (Urad Sabut), Split Urad with Husk (Chilka), and De-husked Split Urad (Dhoya/Gota) based on buyer requirements.",
    },
  ],

  // Operating Hubs & Map
  hubs: [
    {
      name: "APMC Mandi Unjha",
      type: "Primary Spice Trading Hub",
      description: "Direct spot procurement and Sortex grading for Cumin Seeds (Jeera).",
      coordinates: { x: 38, y: 32 },
    },
    {
      name: "Gondal & Rajkot APMC Yards",
      type: "Pulses & Oilseed Trading Hubs",
      description: "Primary Mandi sourcing for Black Gram (Urad) and Tuwar Dal.",
      coordinates: { x: 28, y: 58 },
    },
    {
      name: "Ahmedabad & Sanand GIDC",
      type: "Industrial Corridor Desk",
      description: "Commercial term finance, acquisition loans, and manufacturing site advisory.",
      coordinates: { x: 45, y: 44 },
    },
    {
      name: "Vadodara & Dahej Belt",
      type: "Heavy Industry & Chemical Hub",
      description: "Syndication for large-scale engineering and logistics asset finance.",
      coordinates: { x: 52, y: 62 },
    },
  ],

  // Why Guru (6 feature tiles for Home page Part 4)
  whyGuru: [
    {
      id: "verified-docs",
      title: "Verified documentation",
      description: "Deep statutory title search and clean revenue records check before any transaction is submitted.",
    },
    {
      id: "apmc-direct",
      title: "APMC-direct sourcing",
      description: "Physical presence in Unjha, Gondal, and Rajkot yards cutting out unverified middlemen.",
    },
    {
      id: "legal-network",
      title: "Legal & title network",
      description: "Coordinated desk navigating SARFAESI bank recovery, District Magistrate warrants, and DRT orders.",
    },
    {
      id: "transparent-pricing",
      title: "Transparent pricing",
      description: "Direct mandate commissions and transparent mandi spot price pass-through with no hidden costs.",
    },
    {
      id: "pan-india-logistics",
      title: "Pan-India logistics",
      description: "Weighbridge certified dispatches with verified road freight carriers to industrial destinations.",
    },
    {
      id: "single-contact",
      title: "Single point of contact",
      description: "Direct access to senior desk partners who understand both real estate debt and commodity markets.",
    },
  ],

  // Testimonials (3 quotes with clearly marked placeholders)
  testimonials: [
    {
      id: "test-1",
      quote:
        "[Guru International coordinated the title verification and structured our industrial loan within our tight tender timeline. Their local knowledge of GIDC norms made all the difference.]",
      author: "[Partner / Promoter Name]",
      role: "[Managing Director, Engineering Unit]",
      location: "[Sanand Industrial Estate, Gujarat]",
    },
    {
      id: "test-2",
      quote:
        "[For our corporate spice processing orders, their direct sourcing from Unjha mandi provided consistent 99.5% Sortex purity and reliable dispatch schedules.]",
      author: "[Procurement Head Name]",
      role: "[VP Commercial Procurement]",
      location: "[National Foods Corporation, Mumbai]",
    },
    {
      id: "test-3",
      quote:
        "[Navigating a complex SARFAESI tender property requires exact procedural discipline. The desk guided our acquisition through clear title scrutiny and court documentation.]",
      author: "[Investor / Principal Name]",
      role: "[Commercial Asset Investor]",
      location: "[Ahmedabad, Gujarat]",
    },
  ],

  // Home FAQ (6 most common questions)
  homeFAQ: [
    {
      question: "What are the two core divisions of Guru International?",
      answer:
        "We operate two specialized commercial divisions under one accountable desk: (1) Industrial and Commercial Real Estate Finance, SARFAESI bank resolutions, and government tender properties; and (2) Bulk Agro-Commodity Trading, supplying verified Cumin Seeds, Black Gram, and Tuwar Dal.",
    },
    {
      question: "How do I initiate a property finance or possession consultation?",
      answer:
        "You can schedule a consultation online or contact our direct desk via WhatsApp or phone (+91 94281 11775). We will review your preliminary property particulars, title chain, and financing requirement under strict confidentiality.",
    },
    {
      question: "What regions do your real estate advisory services cover?",
      answer:
        "Our primary advisory focus is across Gujarat and Western India's key industrial hubs, including Ahmedabad, Sanand, Vadodara, Surat, Rajkot, and GIDC industrial corridors.",
    },
    {
      question: "Where are your bulk agricultural commodities sourced from?",
      answer:
        "We source directly from regulated primary APMC trading yards in Gujarat: Cumin Seeds from APMC Unjha, and Black Gram and Tuwar Dal from Saurashtra mandis including Gondal and Rajkot.",
    },
    {
      question: "Do you take mandates from intermediaries or brokers?",
      answer:
        "We prioritize direct mandates from property owners, verified corporate borrowers, institutional investors, and registered commodity buyers to guarantee accountability and clear execution.",
    },
    {
      question: "What is the typical turnaround time for an inquiry response?",
      answer:
        "Our direct desk reviews all incoming submissions within 24 business hours. If preliminary requirements match our mandate parameters, a detailed discussion is scheduled immediately.",
    },
  ],

  // "How we work" 4 steps for Home page
  howWeWork: [
    {
      step: "01",
      title: "Enquiry",
      description: "Direct submission of your commercial property requirement or bulk crop specification to our desk.",
    },
    {
      step: "02",
      title: "Verification",
      description: "Statutory title and revenue search for property, or physical sample testing and moisture lab check for crops.",
    },
    {
      step: "03",
      title: "Structuring / Sourcing",
      description: "Bank syndication packaging with optimal loan terms, or direct APMC auction procurement at spot rates.",
    },
    {
      step: "04",
      title: "Close & Dispatch",
      description: "Executing formal loan sanction agreements, or weighbridge-certified dispatch with transit insurance.",
    },
  ],

  // Contact page details & post-submission
  contact: {
    postSubmitSteps: [
      {
        step: "01",
        title: "Desk Review",
        description: "Our desk reviews your asset particulars or crop specification within 24 business hours.",
      },
      {
        step: "02",
        title: "Direct Consultation",
        description: "A focused call with Naresh Jadav or our division lead to discuss structuring, pricing, or inspection.",
      },
      {
        step: "03",
        title: "Action Plan",
        description: "Clear mandate roadmap: document checklist for finance, or formal commercial quote for commodities.",
      },
    ],
  },
};

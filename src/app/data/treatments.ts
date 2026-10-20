export interface Treatment {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  procedureSteps: string[];
  iconURL: string;
  imageURL: string;
  duration: string;
  priceRange: string;
  recoveryTime: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export const treatments: Treatment[] = [
  {
    id: "1",
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    shortDescription: "Save your tooth with advanced microscopic root canal treatment",
    description: "Root canal treatment is needed when the pulp inside your tooth becomes infected or inflamed due to deep decay, repeated dental procedures, faulty crowns, or a crack in the tooth. At EndoSmile Dental Care, we perform root canal procedures using state-of-the-art dental operating microscopes that allow us to see even the smallest canals inside your tooth. With over 98% success rate, our root canal treatments help you save your natural tooth and avoid extraction.",
    benefits: [
      "Procedure with modern anesthesia",
      "Saves your natural tooth",
      "Stops infection from spreading",
      "Restores full chewing function",
      "98% success rate",
      "Long lasting results"
    ],
    procedureSteps: [
      "Complete examination and digital X-ray",
      "Local anesthesia administration",
      "Removal of infected tooth pulp",
      "Cleaning and shaping of root canals",
      "Filling and sealing of canals",
      "Placement of permanent restoration"
    ],
    iconURL: "/Images/Icons/orthodontics.png",
    imageURL: "/Images/services/rootCanal.jpg",
    duration: "1-2 visits",
    priceRange: "₹4,500 - ₹8,000",
    recoveryTime: "1-2 days",
    metaTitle: "Root Canal Treatment in Greater Noida West | EndoSmile",
    metaDescription: "Root canal treatment in Greater Noida West by Dr Sumit Dinkar. Microscopic root canal with 98% success rate. Same day appointments available.",
    keywords: ["root canal treatment greater noida", "root canal near me", "endodontist greater noida west", "tooth pain treatment", "microscopic root canal"]
  },
  {
    id: "2",
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry & Smile Designing",
    shortDescription: "Transform your smile with custom cosmetic dentistry solutions",
    description: "Cosmetic dentistry at EndoSmile Dental Care combines art and science to create the smile you've always dreamed of. Our smile designing procedures consider your facial features, skin tone, hair color, and personal preferences to create a natural, beautiful smile that enhances your appearance and boosts your confidence.",
    benefits: [
      "Customized smile design",
      "Natural looking results",
      "Improves self confidence",
      "Long lasting aesthetic results",
      "Minimally invasive procedures",
      "Stain resistant materials"
    ],
    procedureSteps: [
      "Smile analysis and consultation",
      "Digital smile preview",
      "Treatment planning",
      "Preparation of teeth (if required)",
      "Placement of veneers/crowns",
      "Final adjustments and polishing"
    ],
    iconURL: "/Images/Icons/cosmetics.png",
    imageURL: "/Images/services/cosmeticDentistry.jpg",
    duration: "2-4 visits",
    priceRange: "₹15,000 - ₹50,000",
    recoveryTime: "No downtime",
    metaTitle: "Cosmetic Dentistry & Smile Designing | Greater Noida West",
    metaDescription: "Premium cosmetic dentistry and smile designing in Greater Noida West. Porcelain veneers, teeth whitening, smile makeovers by cosmetic dentist Dr Sumit Dinkar.",
    keywords: ["cosmetic dentistry greater noida", "smile designing near me", "porcelain veneers greater noida", "teeth whitening", "dental veneers cost"]
  },
  {
    id: "3",
    slug: "dental-implants-and-fillings",
    title: "Dental Implants & Fillings",
    shortDescription: "Restore missing teeth with permanent dental implants",
    description: "Dental implants are the gold standard for replacing missing teeth. A titanium post is surgically placed into your jawbone, where it fuses with the bone to create a strong foundation for replacement teeth. Dental implants look, feel, and function just like your natural teeth.",
    benefits: [
      "Permanent tooth replacement",
      "Preserves jaw bone structure",
      "No damage to adjacent teeth",
      "Improves chewing ability",
      "Natural appearance and feel",
      "95% success rate"
    ],
    procedureSteps: [
      "Comprehensive evaluation with CBCT scan",
      "Implant placement surgery",
      "Osseointegration period (3-6 months)",
      "Placement of abutment",
      "Fabrication of crown/bridge",
      "Final placement of restoration"
    ],
    iconURL: "/Images/Icons/dental.png",
    imageURL: "/Images/services/ImplantsAndFillings.jpg",
    duration: "3-6 months",
    priceRange: "₹25,000 - ₹45,000",
    recoveryTime: "3-7 days per stage",
    metaTitle: "Dental Implants & Tooth Fillings | Greater Noida West Dentist",
    metaDescription: "Affordable dental implants in Greater Noida West. Permanent tooth replacement solutions. Also offering composite and tooth colored fillings for cavities.",
    keywords: ["dental implants greater noida", "tooth implant cost", "dental fillings near me", "tooth colored fillings", "missing teeth replacement"]
  },
  {
    id: "4",
    slug: "orthodontics-braces",
    title: "Orthodontics & Teeth Alignment",
    shortDescription: "Straighten your teeth with braces and aligners",
    description: "Orthodontic treatment corrects misaligned teeth and jaws, improving both appearance and oral health. We offer various orthodontic options including metal braces, ceramic braces, and clear aligners to suit your lifestyle and treatment requirements.",
    benefits: [
      "Straighter, aligned teeth",
      "Improved bite function",
      "Easier cleaning and maintenance",
      "Reduces risk of tooth wear",
      "Enhanced facial aesthetics",
      "Boosts self esteem"
    ],
    procedureSteps: [
      "Initial consultation and records",
      "Treatment planning",
      "Placement of braces/aligners",
      "Regular adjustment visits",
      "Removal of appliances",
      "Retention phase"
    ],
    iconURL: "/Images/Icons/orthodontics1.png",
    imageURL: "/Images/services/orthodontics.jpg",
    duration: "12-24 months",
    priceRange: "₹30,000 - ₹80,000",
    recoveryTime: "No downtime, periodic adjustments",
    metaTitle: "Orthodontics Braces & Aligners | Greater Noida Orthodontist",
    metaDescription: "Orthodontic treatment in Greater Noida West. Metal braces, ceramic braces, clear aligners for teeth straightening for all ages.",
    keywords: ["orthodontist greater noida", "braces for teeth cost", "clear aligners greater noida", "teeth straightening", "invisible braces"]
  },
  {
    id: "5",
    slug: "crowns-and-bridges",
    title: "Crowns & Fixed Bridges",
    shortDescription: "Restore damaged teeth with natural looking dental crowns",
    description: "Dental crowns are tooth-shaped caps placed over damaged or weakened teeth to restore their shape, size, strength, and appearance. Dental bridges are used to replace one or more missing teeth by anchoring to adjacent natural teeth or implants.",
    benefits: [
      "Restores damaged teeth",
      "Replaces missing teeth",
      "Natural appearance",
      "Improves chewing function",
      "Long lasting durability",
      "Protects weakened teeth"
    ],
    procedureSteps: [
      "Tooth preparation and impression",
      "Temporary crown/bridge placement",
      "Fabrication of final restoration",
      "Try-in and adjustment",
      "Permanent cementation",
      "Post placement instructions"
    ],
    iconURL: "/Images/Icons/crownsAndBridges.png",
    imageURL: "/Images/services/crowns.jpg",
    duration: "2 visits",
    priceRange: "₹8,000 - ₹20,000",
    recoveryTime: "1-2 days",
    metaTitle: "Dental Crowns & Fixed Bridges | Greater Noida West",
    metaDescription: "High quality dental crowns and fixed bridges in Greater Noida West. All ceramic, zirconia crowns for natural looking smile restoration.",
    keywords: ["dental crown greater noida", "fixed bridge cost", "zirconia crown price", "tooth cap near me", "ceramic crowns"]
  },
  {
    id: "6",
    slug: "pediatric-dentistry",
    title: "Pediatric & Children's Dentistry",
    shortDescription: "Specialized dental care for children of all ages",
    description: "Our pediatric dental care focuses on the oral health of children from infancy through the teenage years. We provide a comfortable and friendly environment to ensure positive dental experiences for your child and establish good oral hygiene habits that last a lifetime.",
    benefits: [
      "Child friendly environment",
      "Preventive dental care",
      "Early detection of problems",
      "Gentle and patient approach",
      "Parents education and guidance",
      "treatments for kids"
    ],
    procedureSteps: [
      "Fun filled first visit",
      "Complete dental examination",
      "Preventive treatments (fluoride, sealants)",
      "Restorative care if needed",
      "Oral hygiene instructions",
      "Regular checkup scheduling"
    ],
    iconURL: "/Images/Icons/pediatric.png",
    imageURL: "/Images/services/pediatricDentistry.jpeg",
    duration: "30-45 minutes per visit",
    priceRange: "₹500 - ₹3,000",
    recoveryTime: "No downtime",
    metaTitle: "Pediatric Dentistry | Children Dentist in Greater Noida West",
    metaDescription: "Specialized pediatric dentist in Greater Noida West for children's dental care. Gentle, treatments for kids of all ages in child friendly clinic.",
    keywords: ["pediatric dentist greater noida", "children dentist near me", "kids dental clinic", "child tooth treatment", "dentist for kids"]
  },
  {
    id: "7",
    slug: "braces-and-aligners",
    title: "Braces & Clear Aligners",
    shortDescription: "Discreet teeth straightening with modern aligners",
    description: "Clear aligners are a modern alternative to traditional braces that use a series of custom-made, transparent removable trays to gradually straighten your teeth. They are virtually invisible and allow you to straighten your teeth without affecting your appearance during treatment.",
    benefits: [
      "Virtually invisible treatment",
      "Removable for eating and cleaning",
      "No food restrictions",
      "Comfortable smooth material",
      "Fewer office visits required",
      "Predictable digital treatment planning"
    ],
    procedureSteps: [
      "Digital scan of your teeth",
      "3D treatment simulation",
      "Custom aligners fabrication",
      "Wear aligners 22 hours daily",
      "Progress checkups every 6-8 weeks",
      "Final results and retention"
    ],
    iconURL: "/Images/Icons/dental (1).png",
    imageURL: "/Images/services/braces.jpg",
    duration: "6-18 months",
    priceRange: "₹40,000 - ₹1,50,000",
    recoveryTime: "No downtime",
    metaTitle: "Clear Aligners & Braces | Invisible Teeth Straightening",
    metaDescription: "Clear aligners and invisible braces in Greater Noida West. Discreet teeth straightening without metal braces. Digital smile simulation available.",
    keywords: ["clear aligners greater noida", "invisible braces cost", "transparent braces", "aligners for teeth", "adult braces"]
  },
  {
    id: "8",
    slug: "dentures",
    title: "Complete & Partial Dentures",
    shortDescription: "Natural looking dentures to restore your smile",
    description: "Dentures are removable appliances that replace missing teeth and surrounding tissues. We offer both complete dentures for patients who have lost all their teeth and partial dentures for patients who still have some natural teeth remaining.",
    benefits: [
      "Restores chewing function",
      "Improves facial appearance",
      "Supports facial muscles",
      "Improves speech clarity",
      "Custom fitted for comfort",
      "Affordable tooth replacement option"
    ],
    procedureSteps: [
      "Initial consultation and impressions",
      "Bite registration and jaw relation records",
      "Try-in for esthetics and function",
      "Final denture fabrication",
      "Fitting and adjustment",
      "Post insertion instructions"
    ],
    iconURL: "/Images/Icons/dentures.png",
    imageURL: "/Images/services/dentures.jpg",
    duration: "3-4 visits",
    priceRange: "₹15,000 - ₹35,000",
    recoveryTime: "1-2 weeks adjustment period",
    metaTitle: "Complete & Partial Dentures | Greater Noida West Dentist",
    metaDescription: "High quality complete and partial dentures in Greater Noida West. Natural looking, comfortable dentures custom made for perfect fit.",
    keywords: ["dentures greater noida", "artificial teeth cost", "complete dentures", "partial dentures", "removable teeth replacement"]
  }
];

export const getTreatmentBySlug = (slug: string): Treatment | undefined => {
  return treatments.find(treatment => treatment.slug === slug);
};

export default treatments;
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
    shortDescription:
      "Endodontic procedure to preserve natural tooth structure",
    description:
      "Root canal treatment may be recommended when the dental pulp becomes inflamed or infected due to deep tooth decay, repeated dental procedures, problems with existing restorations, or cracks in the tooth. At Endo Smile Dental Care, root canal procedures are performed using appropriate clinical techniques and dental Loupes with magnification, where indicated, to aid the examination and treatment of complex root canal anatomy. The treatment aims to remove infected or inflamed pulp tissue, preserve the natural tooth where feasible, and restore its function. Treatment outcomes vary depending on the condition of the tooth and individual clinical factors.",
    benefits: [
      "Performed using local anaesthesia, where appropriate, to help manage discomfort during the procedure.",
      "Helps preserve the natural tooth when clinically feasible.",
      "Removes infected or inflamed pulp tissue and helps manage the source of infection.",
      "Helps restore chewing function following appropriate tooth restoration.",
      "Treatment outcomes depend on the tooth's condition, the complexity of the case, and adherence to recommended care.",
      "The treated tooth may remain functional for many years with appropriate restoration, oral hygiene, and regular dental follow-ups.",
    ],
    procedureSteps: [
      "Complete examination and digital X-ray",
      "Local anesthesia administration",
      "Removal of infected tooth pulp",
      "Cleaning and shaping of root canals",
      "Filling and sealing of canals",
      "Placement of permanent restoration",
    ],
    iconURL: "/Images/Icons/orthodontics.png",
    imageURL: "/Images/services/rootCanal.jpg",
    duration: "1-2 visits",
    priceRange: "₹4,500 - ₹8,000",
    recoveryTime: "1-2 days",
    metaTitle: "Root Canal Treatment in Greater Noida West | Endo Smile",
    metaDescription:
      "Root canal treatment services in Greater Noida West at Endo Smile Dental Care. Consultation and treatment for tooth pain and endodontic care.",
    keywords: [
      "root canal treatment greater noida",
      "root canal near me",
      "endodontist greater noida west",
      "tooth pain treatment",
      "endodontic care",
    ],
  },
  {
    id: "2",
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry & Smile Designing",
    shortDescription:
      "Aesthetic dental procedures for tooth restoration and smile enhancement",
    description:
      "Cosmetic dentistry encompasses procedures designed to modify the appearance of teeth, gums, and overall smile aesthetics. At Endo Smile Dental Care, smile design planning evaluates facial proportions, tooth alignment, color, and individual patient preferences to address concerns like staining, gaps, or structural irregularities. Treatment suitability is determined based on comprehensive oral evaluation and clinical requirements.",
    benefits: [
      "Customized treatment plan based on individual aesthetic goals and clinical feasibility.",
      "Aims to enhance natural tooth appearance and alignment.",
      "Addresses discoloration, minor gaps, chips, and irregular tooth morphology.",
      "Employs restorative materials suited for long-term functional stability.",
      "Helps improve patient self-perception regarding their oral appearance.",
      "Outcomes depend on structural health, material choice, and oral hygiene maintenance.",
    ],
    procedureSteps: [
      "Clinical assessment and cosmetic consultation",
      "Digital smile evaluation and planning",
      "Treatment option discussion",
      "Tooth preparation (where required)",
      "Placement of veneers or cosmetic restorations",
      "Final refinement and bite check",
    ],
    iconURL: "/Images/Icons/cosmetics.png",
    imageURL: "/Images/services/cosmeticDentistry.jpg",
    duration: "2-4 visits",
    priceRange: "₹15,000 - ₹50,000",
    recoveryTime: "No downtime",
    metaTitle: "Cosmetic Dentistry & Smile Designing | Greater Noida West",
    metaDescription:
      "Cosmetic dentistry and smile designing services in Greater Noida West. Restorative options including dental veneers and aesthetic enhancement.",
    keywords: [
      "cosmetic dentistry greater noida",
      "smile designing near me",
      "porcelain veneers greater noida",
      "teeth whitening",
      "dental veneers cost",
    ],
  },
  {
    id: "3",
    slug: "dental-implants-and-fillings",
    title: "Dental Implants & Fillings",
    shortDescription:
      "Procedures to replace missing teeth or restore decayed tooth structure",
    description:
      "Dental implants provide a fixed prosthetic replacement option for missing teeth by anchoring a biocompatible titanium post into the jawbone, followed by a crown or bridge restoration once integrated. Dental fillings are restorative procedures used to repair teeth affected by decay or minor structural loss, restoring function and sealing the tooth against further bacterial damage.",
    benefits: [
      "Provides a fixed alternative for replacing missing teeth.",
      "Helps maintain jawbone structural stability following tooth loss.",
      "Avoids the need to modify healthy adjacent teeth, unlike traditional fixed bridges.",
      "Aims to restore chewing function and bite stability.",
      "Prognosis depends on bone density, surgical integration, and systemic health conditions.",
    ],
    procedureSteps: [
      "Clinical evaluation and radiographic CBCT assessment",
      "Surgical placement of the implant post (for implants)",
      "Healing and osseointegration period",
      "Restorative preparation / Abutment placement",
      "Fabrication and fitting of the final crown or filling",
      "Final occlusion verification and maintenance guidance",
    ],
    iconURL: "/Images/Icons/dental.png",
    imageURL: "/Images/services/ImplantsAndFillings.jpg",
    duration: "3-6 months",
    priceRange: "₹25,000 - ₹45,000",
    recoveryTime: "3-7 days per stage",
    metaTitle: "Dental Implants & Tooth Fillings | Greater Noida West",
    metaDescription:
      "Dental implant and composite tooth filling services in Greater Noida West at Endo Smile Dental Care. Restorative dentistry for missing or decayed teeth.",
    keywords: [
      "dental implants greater noida",
      "tooth implant cost",
      "dental fillings near me",
      "tooth colored fillings",
      "missing teeth replacement",
    ],
  },
  {
    id: "4",
    slug: "orthodontics-braces",
    title: "Orthodontics & Teeth Alignment",
    shortDescription:
      "Treatment options to correct malocclusion and misaligned teeth",
    description:
      "Orthodontic treatment involves the diagnosis, prevention, and correction of misaligned teeth and jaw relationships. At Endo Smile Dental Care, various alignment modalities—including metal braces, ceramic braces, and clear appliances—are utilized to correct crowded, spaced, or poorly aligned teeth to improve functional occlusion and oral hygiene access.",
    benefits: [
      "Helps correct dental crowding, spacing, and bite irregularities.",
      "Improves occlusion and distribution of chewing forces.",
      "Facilitates easier plaque control and tooth cleaning.",
      "Helps reduce improper tooth wear caused by misaligned contact points.",
      "Enhances dental alignment and facial harmony.",
      "Treatment duration and stability depend on age, case severity, and patient compliance with retainers.",
    ],
    procedureSteps: [
      "Orthodontic consultation and diagnostic records (X-rays, models)",
      "Customized treatment plan formulation",
      "Placement of orthodontic appliances or aligner delivery",
      "Periodic adjustment visits for force application",
      "De-bonding and appliance removal upon alignment completion",
      "Retention phase with fixed or removable retainers",
    ],
    iconURL: "/Images/Icons/orthodontics1.png",
    imageURL: "/Images/services/orthodontics.jpg",
    duration: "12-24 months",
    priceRange: "₹30,000 - ₹80,000",
    recoveryTime: "Periodic adjustment period",
    metaTitle: "Orthodontics & Braces | Greater Noida West Dentist",
    metaDescription:
      "Orthodontic alignment services in Greater Noida West. Options include fixed braces and aligners to address bite and spacing issues.",
    keywords: [
      "orthodontist greater noida",
      "braces for teeth cost",
      "clear aligners greater noida",
      "teeth straightening",
      "orthodontic treatment",
    ],
  },
  {
    id: "5",
    slug: "crowns-and-bridges",
    title: "Crowns & Fixed Bridges",
    shortDescription:
      "Fixed restorative appliances to protect weakened teeth or replace missing ones",
    description:
      "Dental crowns are custom restorations placed over compromised teeth to restore structural integrity, shape, and function. Fixed dental bridges are utilized to replace one or more missing teeth by anchoring to neighboring healthy teeth or implants. These restorations help maintain dental arch stability and restore masticatory function.",
    benefits: [
      "Provides structural support to heavily restored or endodontically treated teeth.",
      "Replaces missing teeth in a fixed, non-removable format.",
      "Helps prevent shifting of adjacent teeth into vacant spaces.",
      "Restores normal chewing capability and speech clarity.",
      "Utilizes materials like ceramic or zirconia selected for biocompatibility and strength.",
      "Long-term success depends on underlying tooth structure and gum health.",
    ],
    procedureSteps: [
      "Tooth preparation and physical or digital impressions",
      "Placement of temporary restoration",
      "Laboratory fabrication of crown or bridge",
      "Clinical try-in, marginal fit, and occlusion adjustment",
      "Permanent cementation or bonding",
      "Post-operative care and maintenance review",
    ],
    iconURL: "/Images/Icons/crownsAndBridges.png",
    imageURL: "/Images/services/crowns.jpg",
    duration: "2 visits",
    priceRange: "₹8,000 - ₹20,000",
    recoveryTime: "1-2 days",
    metaTitle: "Dental Crowns & Fixed Bridges | Greater Noida West",
    metaDescription:
      "Dental crown and fixed bridge options in Greater Noida West. Ceramic and zirconia restorations for functional tooth restoration.",
    keywords: [
      "dental crown greater noida",
      "fixed bridge cost",
      "zirconia crown price",
      "tooth cap near me",
      "ceramic crowns",
    ],
  },
  {
    id: "6",
    slug: "pediatric-dentistry",
    title: "Pediatric & Children's Dentistry",
    shortDescription:
      "Oral health evaluation and preventive dental care for young patients",
    description:
      "Pediatric dentistry focuses on the preventive, diagnostic, and therapeutic oral healthcare of infants, children, and adolescents. Services are designed to monitor dental development, address early tooth decay, provide preventive applications such as sealants and topical fluoride, and promote habits that support long-term oral health.",
    benefits: [
      "Focuses on early detection and preventive care for primary and developing teeth.",
      "Provides clinical management tailored to pediatric patient behavior.",
      "Offers preventive applications including sealants and fluoride where clinically indicated.",
      "Monitors growth pattern and jaw development to identify early orthodontic needs.",
      "Provides oral hygiene instruction tailored for children and guardians.",
      "Aims to foster positive dental experiences for ongoing routine care.",
    ],
    procedureSteps: [
      "Pediatric oral examination and developmental check",
      "Cleaning and preventive topical fluoride application",
      "Application of dental sealants (if clinically recommended)",
      "Restorative care for decay or primary tooth conditions (if required)",
      "Instruction on diet and brush technique for parents/guardians",
      "Establishment of regular recall schedule",
    ],
    iconURL: "/Images/Icons/pediatric.png",
    imageURL: "/Images/services/pediatricDentistry.jpeg",
    duration: "30-45 minutes per visit",
    priceRange: "₹500 - ₹3,000",
    recoveryTime: "No downtime",
    metaTitle:
      "Pediatric Dentistry | Children's Dental Care Greater Noida West",
    metaDescription:
      "Pediatric dental examination and preventive care in Greater Noida West at Endo Smile Dental Care. Dental services tailored for children.",
    keywords: [
      "pediatric dentist greater noida",
      "children dentist near me",
      "kids dental clinic",
      "child tooth treatment",
      "dentist for kids",
    ],
  },
  {
    id: "7",
    slug: "braces-and-aligners",
    title: "Braces & Clear Aligners",
    shortDescription:
      "Removable transparent appliances for gradual orthodontic alignment",
    description:
      "Clear aligners offer a subtle alternative to conventional fixed braces by utilizing a sequential series of custom-molded plastic trays. These trays apply controlled forces to move teeth incrementally into planned positions. Suitability for aligner therapy is evaluated through digital treatment planning based on the patient's orthodontic needs.",
    benefits: [
      "Provides a transparent appliance option for dental alignment.",
      "Removable to allow unhindered eating, brushing, and flossing.",
      "Reduces soft tissue irritation compared to traditional metal brackets.",
      "Allows digital visualization of planned movement stages before starting.",
      "Requires compliance with daily wear protocols (typically 20-22 hours/day).",
      "Overall progress depends on consistent appliance wear and periodic evaluation.",
    ],
    procedureSteps: [
      "Intraoral digital scan and orthodontic evaluation",
      "3D digital treatment setup and planning",
      "Fabrication and delivery of custom aligner series",
      "Wear instructions (20–22 hours daily wear per set)",
      "Progress evaluation and tray progression every few weeks",
      "Retention phase post-alignment completion",
    ],
    iconURL: "/Images/Icons/dental (1).png",
    imageURL: "/Images/services/braces.jpg",
    duration: "6-18 months",
    priceRange: "₹40,000 - ₹1,50,000",
    recoveryTime: "No downtime",
    metaTitle: "Clear Aligners & Orthodontics | Greater Noida West",
    metaDescription:
      "Clear aligner therapy and orthodontic alignment options in Greater Noida West. Digital planning and consultation available.",
    keywords: [
      "clear aligners greater noida",
      "invisible braces cost",
      "transparent braces",
      "aligners for teeth",
      "adult braces",
    ],
  },
  {
    id: "8",
    slug: "dentures",
    title: "Complete & Partial Dentures",
    shortDescription:
      "Removable prosthetic appliances for extensive or complete tooth loss",
    description:
      "Dentures are removable prosthetic devices designed to restore function and aesthetics for individuals missing multiple or all teeth in a arch. Complete dentures replace full dental arches, while partial dentures are used when some natural teeth remain. These appliances help support facial structures and facilitate basic masticatory functions.",
    benefits: [
      "Restores basic chewing function and speech articulation following tooth loss.",
      "Provides structural support for lips and cheeks to address facial profile changes.",
      "Offers a removable, non-surgical option for extensive tooth loss.",
      "Customized based on anatomical impressions for tissue adaptation.",
      "Can be adjusted or relined as underlying bone contour changes over time.",
      "Requires an initial adaptation period for speech, swallowing, and chewing.",
    ],
    procedureSteps: [
      "Preliminary and final tissue impressions",
      "Bite registration and jaw relation measurement",
      "Wax try-in for tooth arrangement and fit verification",
      "Processing and delivery of final acrylic or flexible denture",
      "Occlusal adjustment and pressure point relief",
      "Patient instruction on maintenance, cleaning, and wear schedules",
    ],
    iconURL: "/Images/Icons/dentures.png",
    imageURL: "/Images/services/dentures.jpg",
    duration: "3-4 visits",
    priceRange: "₹15,000 - ₹35,000",
    recoveryTime: "1-2 weeks adjustment period",
    metaTitle: "Complete & Partial Dentures | Greater Noida West Dentist",
    metaDescription:
      "Removable complete and partial denture services in Greater Noida West. Custom prosthetic solutions for missing tooth replacement.",
    keywords: [
      "dentures greater noida",
      "artificial teeth cost",
      "complete dentures",
      "partial dentures",
      "removable teeth replacement",
    ],
  },
];

export const getTreatmentBySlug = (slug: string): Treatment | undefined => {
  return treatments.find((treatment) => treatment.slug === slug);
};

export default treatments;

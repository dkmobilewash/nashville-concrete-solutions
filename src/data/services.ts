// Service catalog. Slugs are used for /services/[slug] and the
// /[serviceSlug]/[citySlug] local-SEO matrix (see SECTION 6 of the build spec).

export interface ServiceBenefit {
  title: string;
  desc: string;
}

export interface ServiceProcessStep {
  title: string;
  detail: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  /** lucide-react icon component name */
  icon: string;
  headline: string;
  heroSubhead: string;
  metaTitle: string;
  metaDescription: string;
  overview: string[];
  benefits: ServiceBenefit[];
  process: ServiceProcessStep[];
  faqs: ServiceFaq[];
}

export const services: Service[] = [
  {
    slug: "driveways",
    name: "Concrete Driveways",
    shortName: "Driveways",
    icon: "Car",
    headline: "Concrete Driveways Built to Handle Daily Traffic",
    heroSubhead:
      "Poured, reinforced, and finished for decades of use in Middle Tennessee's freeze-thaw swings.",
    metaTitle: "Concrete Driveway Installation & Replacement",
    metaDescription:
      "Durable concrete driveway installation and replacement across Greater Nashville. Proper base prep, reinforcement, and control joints built for Tennessee weather.",
    overview: [
      "A driveway takes more abuse than almost any other surface on your property: vehicle weight, temperature swings, and constant exposure to the elements. We build driveways on a properly compacted gravel base with reinforcement and correctly spaced control joints so the slab moves the way it's supposed to instead of cracking randomly.",
      "Whether you're pouring a new driveway, widening an existing one, or replacing a cracked and settling slab, we grade for drainage first — standing water is the number one cause of premature driveway failure.",
    ],
    benefits: [
      { title: "Reinforced for vehicle loads", desc: "Steel or fiber reinforcement sized to the slab thickness and expected traffic." },
      { title: "Drainage-first grading", desc: "Proper slope away from the garage and foundation to keep water moving." },
      { title: "Control joints placed correctly", desc: "Joints cut at the right spacing and depth to direct cracking where it won't show." },
      { title: "Built for clay soil and freeze-thaw", desc: "Base prep accounts for Middle Tennessee's soil conditions and winter temperature swings." },
    ],
    process: [
      { title: "Site evaluation & grading plan", detail: "We assess soil, existing drainage, and access before quoting." },
      { title: "Excavation & base prep", detail: "Old material removed, gravel base compacted to spec." },
      { title: "Forming & reinforcement", detail: "Forms set to grade; steel or fiber reinforcement placed." },
      { title: "Pour, finish & cure", detail: "Concrete poured, finished to the chosen texture, and cured properly before use." },
    ],
    faqs: [
      { question: "How thick should a concrete driveway be?", answer: "Standard residential driveways are typically poured 4 inches thick, with 5-6 inches recommended for heavier vehicles like RVs or trucks. We'll recommend thickness based on your specific use." },
      { question: "How long before I can drive on a new driveway?", answer: "Concrete is generally safe for foot traffic after 24-48 hours, but we recommend waiting 7 days before driving on it and a full 28 days before parking heavy loads on it." },
      { question: "Can you replace only part of my driveway?", answer: "Yes. We can saw-cut and replace damaged sections while matching the existing grade and joint pattern where practical." },
    ],
  },
  {
    slug: "patios",
    name: "Concrete Patios",
    shortName: "Patios",
    icon: "Sun",
    headline: "Concrete Patios for Outdoor Living",
    heroSubhead:
      "From simple broom-finished slabs to decorative stamped patios built for entertaining.",
    metaTitle: "Concrete Patio Installation",
    metaDescription:
      "Custom concrete patio installation across Greater Nashville — broom-finished, stamped, or exposed aggregate, sized and shaped for how you actually use your backyard.",
    overview: [
      "A patio is where a backyard actually gets used, so we start with how the space will function — dining, a fire pit, a grill station — before deciding on shape, size, and finish.",
      "We offer broom-finished, exposed aggregate, and stamped decorative finishes, and we account for grading and drainage so water moves away from the house instead of pooling against the foundation.",
    ],
    benefits: [
      { title: "Finish options for every budget", desc: "Broom finish, exposed aggregate, or stamped decorative patterns." },
      { title: "Custom shapes", desc: "Curved edges, multi-level designs, and integrated planters or seat walls." },
      { title: "Proper drainage slope", desc: "Graded away from the home to protect the foundation." },
      { title: "Built to pair with outdoor features", desc: "Sized and reinforced to support fire pits, pergolas, and outdoor kitchens." },
    ],
    process: [
      { title: "Design consultation", detail: "We talk through layout, finish, and how the space will be used." },
      { title: "Excavation & base prep", detail: "Base compacted and graded for proper drainage." },
      { title: "Forming & finish work", detail: "Forms set for the design; finish applied by hand." },
      { title: "Sealing (if applicable)", detail: "Decorative finishes sealed to protect color and texture." },
    ],
    faqs: [
      { question: "What's the difference between stamped and exposed aggregate?", answer: "Stamped concrete uses textured mats to mimic stone, brick, or tile before the concrete cures. Exposed aggregate reveals the natural stone within the mix by washing away the surface layer of cement paste." },
      { question: "Do patios need to be sealed?", answer: "Sealing isn't required structurally, but it protects color, reduces staining, and is strongly recommended on stamped or colored finishes." },
      { question: "Can a patio be added onto later?", answer: "Yes, with a properly placed control/expansion joint at the tie-in point to manage independent movement between the old and new sections." },
    ],
  },
  {
    slug: "stamped-concrete",
    name: "Stamped & Decorative Concrete",
    shortName: "Stamped Concrete",
    icon: "Palette",
    headline: "Stamped & Decorative Concrete That Looks Like Stone",
    heroSubhead:
      "Pattern, color, and texture options that deliver a natural-stone look at a fraction of the cost.",
    metaTitle: "Stamped & Decorative Concrete",
    metaDescription:
      "Stamped concrete patios, walkways, and pool decks across Greater Nashville — a wide range of patterns and color options finished and sealed for lasting curb appeal.",
    overview: [
      "Stamped concrete gets you the look of flagstone, cobblestone, brick, or slate at a lower material and installation cost, and with fewer joints where weeds and water can get in.",
      "The finish quality comes down to timing — stamping has to happen at the right point in the cure while the color and release agents are applied correctly. We plan the pour schedule around that.",
    ],
    benefits: [
      { title: "Wide pattern selection", desc: "Stone, brick, slate, and wood-plank patterns available." },
      { title: "Integral & topical color options", desc: "Color mixed into the slab or applied to the surface for depth and variation." },
      { title: "Fewer joints than pavers", desc: "A monolithic pour means less opportunity for weeds and shifting." },
      { title: "Sealed for durability", desc: "Sealant protects color and surface from UV fading and moisture." },
    ],
    process: [
      { title: "Pattern & color selection", detail: "Choose pattern, base color, and accent/release color." },
      { title: "Base prep & pour", detail: "Standard base prep and reinforcement, then the pour." },
      { title: "Stamping", detail: "Pattern stamped into the surface at the correct cure window." },
      { title: "Cleaning & sealing", detail: "Excess release agent washed off, then sealed." },
    ],
    faqs: [
      { question: "Is stamped concrete slippery when wet?", answer: "It can be, especially near pools. We can add a slip-resistant additive to the sealer for wet-area installations." },
      { question: "How often does stamped concrete need to be resealed?", answer: "Typically every 2-3 years depending on sun and traffic exposure, to keep color from fading and protect against moisture." },
      { question: "Will the pattern crack over time?", answer: "Like any concrete, stamped slabs are jointed to control cracking. Cracks can still occur but are directed to joint lines when the work is done correctly." },
    ],
  },
  {
    slug: "sidewalks-walkways",
    name: "Sidewalks & Walkways",
    shortName: "Sidewalks & Walkways",
    icon: "Footprints",
    headline: "Concrete Sidewalks & Walkways",
    heroSubhead:
      "Code-compliant public sidewalks and custom garden paths, poured level and finished for grip.",
    metaTitle: "Concrete Sidewalk & Walkway Installation",
    metaDescription:
      "Concrete sidewalk and walkway installation and repair across Greater Nashville, including public right-of-way replacement and custom garden paths.",
    overview: [
      "Sidewalks range from simple straight-line paths to public right-of-way replacements that have to meet municipal specifications for width, slope, and ADA-compliant transitions.",
      "We finish walkways with a broom texture for slip resistance and set control joints tightly since narrow slabs crack more readily than wide ones without them.",
    ],
    benefits: [
      { title: "Municipal spec compliance", desc: "Public sidewalk replacements poured to local width, thickness, and slope requirements." },
      { title: "Slip-resistant broom finish", desc: "Standard texture applied for safe footing in wet weather." },
      { title: "Tight joint spacing", desc: "Narrow slabs jointed correctly to control cracking." },
      { title: "ADA-aware transitions", desc: "Ramps and grade transitions built where required." },
    ],
    process: [
      { title: "Layout & permitting", detail: "We confirm any permit requirements for public right-of-way work." },
      { title: "Excavation & forming", detail: "Old sidewalk removed if needed; forms set to grade." },
      { title: "Pour & finish", detail: "Poured, broom-finished, and jointed." },
      { title: "Cure & inspection", detail: "Cured before opening to traffic; inspected if required by the municipality." },
    ],
    faqs: [
      { question: "Do I need a permit to replace a public sidewalk?", answer: "Many municipalities require a permit and inspection for right-of-way sidewalk work. We handle this as part of the project when applicable." },
      { question: "How wide should a walkway be?", answer: "A single-file garden path can be as narrow as 24-30 inches; a primary walkway is usually 36-48 inches to allow two people to pass comfortably." },
      { question: "Can you match an existing sidewalk's finish?", answer: "In most cases yes — we can match broom texture and joint spacing to blend a replacement section with the surrounding sidewalk." },
    ],
  },
  {
    slug: "concrete-slabs",
    name: "Concrete Slabs & Foundations",
    shortName: "Slabs & Foundations",
    icon: "Building2",
    headline: "Concrete Slabs & Foundations",
    heroSubhead:
      "Garage slabs, shed pads, and structural foundations poured to engineered specifications.",
    metaTitle: "Concrete Slab & Foundation Installation",
    metaDescription:
      "Concrete slab and foundation pours across Greater Nashville — garage floors, shed and equipment pads, and structural foundations built to spec.",
    overview: [
      "Slab work is unforgiving — get the base compaction, vapor barrier, or reinforcement wrong and the problems show up years later as cracking or settling. We follow engineered specs on structural work and best practice on utility slabs.",
      "This covers garage floors, shed and equipment pads, and building foundations, each with different reinforcement and moisture-control requirements.",
    ],
    benefits: [
      { title: "Engineered where required", desc: "Structural foundation work follows engineered plans and local code." },
      { title: "Vapor barrier & moisture control", desc: "Proper vapor barriers under interior slabs to prevent moisture issues." },
      { title: "Right reinforcement for the load", desc: "Rebar or mesh sized to what the slab will actually carry." },
      { title: "Compacted, tested base", desc: "Base compaction verified before any concrete is placed." },
    ],
    process: [
      { title: "Plan review", detail: "We review engineered plans or determine spec for utility slabs." },
      { title: "Excavation & base compaction", detail: "Subgrade prepared and compacted to spec." },
      { title: "Reinforcement & vapor barrier", detail: "Rebar/mesh and vapor barrier placed as required." },
      { title: "Pour, finish & cure", detail: "Slab poured, finished, and cured before load is applied." },
    ],
    faqs: [
      { question: "Do I need an engineer for a foundation slab?", answer: "Structural foundations for habitable or load-bearing structures typically require engineered plans and local permitting. Utility slabs like sheds or patios generally do not." },
      { question: "How thick is a garage slab?", answer: "Most residential garage slabs are 4 inches, increased to 5-6 inches with added reinforcement for heavier vehicles like RVs." },
      { question: "How long does a slab need to cure before building on it?", answer: "Framing can often begin around 5-7 days after pour, but full structural cure takes 28 days — we'll advise based on the specific project." },
    ],
  },
  {
    slug: "concrete-repair",
    name: "Concrete Repair & Resurfacing",
    shortName: "Repair & Resurfacing",
    icon: "Hammer",
    headline: "Concrete Repair & Resurfacing",
    heroSubhead:
      "Crack repair, mudjacking/leveling, and resurfacing to extend the life of existing concrete.",
    metaTitle: "Concrete Repair & Resurfacing",
    metaDescription:
      "Concrete crack repair, slab leveling, and resurfacing across Greater Nashville — practical fixes for settling, spalling, and surface damage.",
    overview: [
      "Not every concrete problem needs a full tear-out. Settling slabs can often be raised and leveled, surface spalling can be resurfaced, and isolated cracks can be repaired — we'll tell you honestly when repair makes sense versus when replacement is the better long-term call.",
      "Common causes we see locally: erosion under a slab, expansive clay soil movement, and freeze-thaw surface damage from de-icing salt exposure.",
    ],
    benefits: [
      { title: "Honest repair-vs-replace assessment", desc: "We recommend the option that makes sense for the slab's condition, not the bigger invoice." },
      { title: "Slab leveling", desc: "Sunken sections raised back to grade to eliminate trip hazards." },
      { title: "Surface resurfacing", desc: "Spalled or pitted surfaces resurfaced rather than fully replaced." },
      { title: "Crack repair", desc: "Structural and cosmetic crack repair depending on cause and severity." },
    ],
    process: [
      { title: "Inspection & diagnosis", detail: "We identify the cause — settling, drainage, freeze-thaw, or age." },
      { title: "Recommendation", detail: "Honest repair-or-replace guidance based on what we find." },
      { title: "Repair work", detail: "Leveling, resurfacing, or crack repair performed." },
      { title: "Sealing & protection", detail: "Sealant applied where it will extend the repair's life." },
    ],
    faqs: [
      { question: "Can a sunken concrete slab be fixed without replacing it?", answer: "Often yes, through slab leveling (mudjacking or polyurethane foam injection), which raises the slab back to grade by filling the void beneath it." },
      { question: "Why is my concrete cracking?", answer: "Common causes in this area include soil movement from clay content, poor original base compaction, and freeze-thaw cycles. We diagnose the cause before recommending a fix." },
      { question: "Is resurfacing as durable as new concrete?", answer: "A quality resurfacing overlay bonds well to a structurally sound base and can last many years, but it isn't a substitute for a slab with structural damage." },
    ],
  },
  {
    slug: "retaining-walls",
    name: "Retaining Walls",
    shortName: "Retaining Walls",
    icon: "Layers",
    headline: "Concrete Retaining Walls",
    heroSubhead:
      "Poured and block retaining walls engineered to hold back sloped, clay-heavy terrain.",
    metaTitle: "Concrete Retaining Wall Installation",
    metaDescription:
      "Retaining wall construction across Greater Nashville — poured and segmental concrete walls built with proper drainage for sloped, clay-heavy lots.",
    overview: [
      "Retaining walls fail almost exclusively because of water — hydrostatic pressure building up behind a wall with inadequate drainage. We build in proper backfill, drainage gravel, and weep holes or drain tile on every wall regardless of size.",
      "We build both poured concrete and segmental block walls depending on height, load, and budget, and we'll tell you when a wall needs engineering versus when it doesn't.",
    ],
    benefits: [
      { title: "Drainage built in", desc: "Gravel backfill and drain tile or weep holes on every wall." },
      { title: "Engineered for taller walls", desc: "Walls over code-threshold height are engineered and, where required, permitted." },
      { title: "Poured or segmental block", desc: "Right wall type for the height, load, and look you want." },
      { title: "Built for clay soil pressure", desc: "Backfill and compaction account for expansive clay behind the wall." },
    ],
    process: [
      { title: "Site assessment", detail: "We evaluate slope, soil, and drainage before recommending a wall type." },
      { title: "Excavation & footing", detail: "Footing excavated and poured to the load requirements." },
      { title: "Wall construction", detail: "Wall built up in lifts (poured) or courses (block)." },
      { title: "Drainage & backfill", detail: "Drainage gravel, drain tile, and proper backfill compaction." },
    ],
    faqs: [
      { question: "Do retaining walls need drainage?", answer: "Yes — nearly all retaining wall failures trace back to inadequate drainage. We install drainage gravel and drain tile or weep holes on every wall we build." },
      { question: "How tall can a retaining wall be without an engineer?", answer: "This varies by local code, but many jurisdictions require engineering above 3-4 feet of exposed height. We'll confirm the requirement for your specific site." },
      { question: "Poured concrete or block retaining wall — which is better?", answer: "Poured walls are stronger for a given thickness and suit taller or heavily loaded walls; segmental block is faster to install and often more budget-friendly for shorter walls." },
    ],
  },
  {
    slug: "commercial-concrete",
    name: "Commercial Concrete",
    shortName: "Commercial",
    icon: "Warehouse",
    headline: "Commercial Concrete Services",
    heroSubhead:
      "Parking lots, pads, sidewalks, and flatwork for commercial and light-industrial properties.",
    metaTitle: "Commercial Concrete Contractor",
    metaDescription:
      "Commercial concrete services across Greater Nashville — parking areas, loading pads, ADA-compliant walkways, and flatwork for business properties.",
    overview: [
      "Commercial projects come with tighter timelines, ADA compliance requirements, and heavier design loads than residential work. We scope projects around your business's operating hours and phase work to minimize disruption where possible.",
      "This covers parking areas, loading and dumpster pads, ADA-compliant walkways and ramps, and general commercial flatwork.",
    ],
    benefits: [
      { title: "ADA-compliant work", desc: "Ramps, slopes, and walkways built to accessibility requirements." },
      { title: "Load-rated for commercial traffic", desc: "Thickness and reinforcement specified for delivery trucks and heavy equipment." },
      { title: "Scheduled around your operations", desc: "Phased work and off-hours scheduling to reduce business disruption." },
      { title: "Single point of contact", desc: "One team managing the project from bid through completion." },
    ],
    process: [
      { title: "Site walk & scope", detail: "We review the site, traffic loads, and any ADA requirements." },
      { title: "Proposal & scheduling", detail: "Scope, timeline, and phasing proposed around your operations." },
      { title: "Construction", detail: "Excavation, base prep, reinforcement, and pour executed to spec." },
      { title: "Walkthrough & close-out", detail: "Final walkthrough and any required documentation provided." },
    ],
    faqs: [
      { question: "Can work be scheduled outside business hours?", answer: "In many cases yes — we can phase or schedule work to minimize disruption to your operations. We'll discuss this during the site walk." },
      { question: "Do you handle ADA-compliant ramps and walkways?", answer: "Yes, we build ramps, slopes, and walkway transitions to current accessibility requirements." },
      { question: "What load capacity does a commercial parking lot need?", answer: "It depends on the vehicle mix — standard parking areas differ from drive lanes carrying delivery trucks. We specify thickness and reinforcement based on actual expected loads." },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

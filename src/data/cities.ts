// Service-area city list. The build spec (SECTION 5/6) calls for this file to
// ship EMPTY for a new, unconfigured market — but the business profile
// (SECTION 0) supplied an explicit service-area list for Greater Nashville,
// so it's populated here. County assignments are well-established public
// facts; landmarks/neighborhoods are limited to widely-known references and
// should be reviewed by the business owner before publishing (NEEDS INPUT:
// verify landmark/neighborhood copy for local accuracy).

export interface City {
  slug: string;
  name: string;
  county: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subhead: string;
  landmarks: string[];
  neighborhoods: string[];
  intro: string;
  /**
   * A genuinely city-specific paragraph on soil/grading/site conditions —
   * kept distinct from `intro` and never reused verbatim across cities, so
   * pages that surface it (e.g. the city hub FAQ) don't end up with
   * identical boilerplate text with only the city name swapped.
   */
  localConsiderations: string;
}

export const cities: City[] = [
  {
    slug: "nashville",
    name: "Nashville",
    county: "Davidson County",
    metaTitle: "Concrete Contractor in Nashville, TN",
    metaDescription:
      "Concrete driveways, patios, and repair for Nashville, TN homes and businesses. Local crew, drainage-first grading, built for Middle Tennessee soil and weather.",
    headline: "Concrete Contractor Serving Nashville, TN",
    subhead: "Driveways, patios, and repair work for homes and businesses across Davidson County.",
    landmarks: ["Downtown Nashville", "Nashville International Airport (BNA)"],
    neighborhoods: ["East Nashville", "West Nashville", "The Gulch", "Bellevue"],
    intro:
      "Nashville's mix of older infill lots and newer development means every job starts with a real look at existing grade, drainage, and soil — not a one-size-fits-all quote.",
    localConsiderations:
      "Nashville's older, established neighborhoods often sit on lots with decades of settling and mature landscaping, so we pay close attention to existing grade and root systems before pouring. Davidson County's mix of urban infill and clay-heavy soil makes proper base compaction essential.",
  },
  {
    slug: "mount-juliet",
    name: "Mount Juliet",
    county: "Wilson County",
    metaTitle: "Concrete Contractor in Mount Juliet, TN",
    metaDescription:
      "Concrete driveway, patio, and slab work for Mount Juliet, TN. Serving Wilson County homeowners with drainage-conscious grading and reinforced pours.",
    headline: "Concrete Contractor Serving Mount Juliet, TN",
    subhead: "Driveways, patios, and flatwork for Mount Juliet's fast-growing neighborhoods.",
    landmarks: ["Providence Marketplace", "Old Hickory Lake"],
    neighborhoods: ["Providence", "Central Pike corridor"],
    intro:
      "Mount Juliet has grown quickly over the past decade, and a lot of that growth sits on graded clay fill — which makes correct base compaction non-negotiable on new driveways and patios.",
    localConsiderations:
      "A lot of Mount Juliet's growth sits on graded fill from recent development, and freshly graded clay soil needs extra compaction time and attention before it's ready for a slab. We factor that into every Wilson County quote.",
  },
  {
    slug: "franklin",
    name: "Franklin",
    county: "Williamson County",
    metaTitle: "Concrete Contractor in Franklin, TN",
    metaDescription:
      "Concrete driveways, patios, and stamped concrete for Franklin, TN. Serving Williamson County with clean finish work and drainage-first installation.",
    headline: "Concrete Contractor Serving Franklin, TN",
    subhead: "Driveways, patios, and decorative concrete for Franklin homes and businesses.",
    landmarks: ["Historic Downtown Franklin", "Cool Springs"],
    neighborhoods: ["Cool Springs", "Berry Farms"],
    intro:
      "From historic downtown lots to newer Cool Springs-area construction, Franklin properties vary a lot in soil and grading needs — we scope each job on-site rather than by zip code average.",
    localConsiderations:
      "Franklin properties range from century-old lots downtown to newly graded subdivisions near Cool Springs, so soil conditions vary block to block — we assess grading and drainage on-site rather than quoting off a template.",
  },
  {
    slug: "murfreesboro",
    name: "Murfreesboro",
    county: "Rutherford County",
    metaTitle: "Concrete Contractor in Murfreesboro, TN",
    metaDescription:
      "Concrete driveways, slabs, and repair for Murfreesboro, TN homeowners and businesses. Serving Rutherford County with reinforced, code-aware installation.",
    headline: "Concrete Contractor Serving Murfreesboro, TN",
    subhead: "Driveways, patios, slabs, and repair for Murfreesboro's homes and growing commercial corridors.",
    landmarks: ["Middle Tennessee State University (MTSU)", "Stones River National Battlefield"],
    neighborhoods: ["The Gateway", "Blackman"],
    intro:
      "Murfreesboro's rapid residential and commercial growth means a lot of new-construction flatwork alongside older slabs due for repair — we handle both.",
    localConsiderations:
      "Murfreesboro's rapid growth means a lot of concrete work happens on recently disturbed soil, and Rutherford County's clay content holds water longer than sandier soils — that makes drainage planning especially important on new pours.",
  },
  {
    slug: "hendersonville",
    name: "Hendersonville",
    county: "Sumner County",
    metaTitle: "Concrete Contractor in Hendersonville, TN",
    metaDescription:
      "Concrete driveway, patio, and repair services for Hendersonville, TN. Serving Sumner County homeowners along Old Hickory Lake and beyond.",
    headline: "Concrete Contractor Serving Hendersonville, TN",
    subhead: "Driveways, patios, and repair work for Hendersonville homes near Old Hickory Lake.",
    landmarks: ["Old Hickory Lake"],
    neighborhoods: ["Indian Lake area", "Saundersville"],
    intro:
      "Lakeside properties around Hendersonville often deal with more moisture and drainage complexity — grading and joint placement matter even more on these lots.",
    localConsiderations:
      "Hendersonville's lakeside lots near Old Hickory Lake deal with higher ambient moisture than inland properties, so we put extra emphasis on grading slabs away from the house and using a properly compacted base to handle the added moisture exposure.",
  },
  {
    slug: "gallatin",
    name: "Gallatin",
    county: "Sumner County",
    metaTitle: "Concrete Contractor in Gallatin, TN",
    metaDescription:
      "Concrete driveways, patios, and flatwork for Gallatin, TN. Serving Sumner County with drainage-conscious grading and reinforced concrete pours.",
    headline: "Concrete Contractor Serving Gallatin, TN",
    subhead: "Driveways, patios, and repair work for Gallatin homes and businesses.",
    landmarks: ["Historic Downtown Gallatin Square", "Old Hickory Lake"],
    neighborhoods: ["Downtown Gallatin"],
    intro:
      "Gallatin's blend of historic in-town lots and newer subdivisions near the lake calls for grading plans tailored to each site rather than a standard template.",
    localConsiderations:
      "Gallatin's historic downtown lots and newer construction near the lake call for different approaches — older in-town properties often need drainage correction from decades of settling, while lakeside lots need careful grading to manage moisture.",
  },
  {
    slug: "brentwood",
    name: "Brentwood",
    county: "Williamson County",
    metaTitle: "Concrete Contractor in Brentwood, TN",
    metaDescription:
      "Concrete driveways, patios, and stamped concrete for Brentwood, TN. Serving Williamson County with detail-oriented finish work.",
    headline: "Concrete Contractor Serving Brentwood, TN",
    subhead: "Driveways, patios, and decorative concrete for Brentwood properties.",
    landmarks: ["Crockett Park"],
    neighborhoods: ["Concord Road corridor"],
    intro:
      "Brentwood's larger lots and established landscaping mean access and site protection are as much a part of the job as the pour itself.",
    localConsiderations:
      "Brentwood's larger, well-established lots typically have mature trees and irrigation systems nearby, so protecting root systems and existing landscaping during excavation is as much a part of the job as the pour itself.",
  },
  {
    slug: "smyrna",
    name: "Smyrna",
    county: "Rutherford County",
    metaTitle: "Concrete Contractor in Smyrna, TN",
    metaDescription:
      "Concrete driveways, slabs, and commercial flatwork for Smyrna, TN. Serving Rutherford County homeowners and businesses.",
    headline: "Concrete Contractor Serving Smyrna, TN",
    subhead: "Driveways, patios, slabs, and commercial flatwork for Smyrna.",
    landmarks: ["Nissan Smyrna Vehicle Assembly Plant", "Sam Ridley Parkway corridor"],
    neighborhoods: ["Downtown Smyrna"],
    intro:
      "Smyrna's mix of residential neighborhoods and industrial/commercial corridors means we regularly quote both driveway replacements and heavier-duty commercial pads in the same week.",
    localConsiderations:
      "Smyrna's mix of residential neighborhoods and industrial corridors near Sam Ridley Parkway means we regularly work with both standard residential base prep and the heavier-duty compaction commercial and industrial-adjacent properties need.",
  },
  {
    slug: "spring-hill",
    name: "Spring Hill",
    county: "Williamson/Maury County",
    metaTitle: "Concrete Contractor in Spring Hill, TN",
    metaDescription:
      "Concrete driveways, patios, and slabs for Spring Hill, TN. Serving Williamson and Maury County homeowners in one of Middle Tennessee's fastest-growing cities.",
    headline: "Concrete Contractor Serving Spring Hill, TN",
    subhead: "Driveways, patios, and flatwork for Spring Hill's newest neighborhoods.",
    landmarks: ["General Motors Spring Hill Manufacturing"],
    neighborhoods: ["Crossroads", "Downtown Spring Hill"],
    intro:
      "Spring Hill is one of the fastest-growing cities in Middle Tennessee, and a lot of that growth is happening on recently graded lots — getting base compaction right up front avoids costly problems later.",
    localConsiderations:
      "Spring Hill is one of the fastest-growing cities in the region, and most of that growth is happening on recently graded lots — getting base compaction right before the pour is the single biggest factor in whether a new driveway or patio holds up long-term.",
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

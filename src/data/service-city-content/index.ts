import type { ServiceCityContentMap, ServiceCityOverride } from "./types";

import driveways from "./driveways";
import patios from "./patios";
import stampedConcrete from "./stamped-concrete";
import sidewalksWalkways from "./sidewalks-walkways";
import concreteSlabs from "./concrete-slabs";
import concreteRepair from "./concrete-repair";
import retainingWalls from "./retaining-walls";
import commercialConcrete from "./commercial-concrete";

const registry: Record<string, ServiceCityContentMap> = {
  driveways,
  patios,
  "stamped-concrete": stampedConcrete,
  "sidewalks-walkways": sidewalksWalkways,
  "concrete-slabs": concreteSlabs,
  "concrete-repair": concreteRepair,
  "retaining-walls": retainingWalls,
  "commercial-concrete": commercialConcrete,
};

/** Returns a bespoke override for (serviceSlug, citySlug), or {} if none exists yet. */
export function getServiceCityOverride(
  serviceSlug: string,
  citySlug: string
): ServiceCityOverride {
  return registry[serviceSlug]?.[citySlug] ?? {};
}

export type { ServiceCityOverride, ServiceCityContentMap };

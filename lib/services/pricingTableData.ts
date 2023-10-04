import type { PricingTableData, TierPlanModel, TierPricingData } from "@/types";
import {
    TIER_BASE_FEATURE_ID,
    TIER_EXTRACOPY_FEATURE_ID,
    tierFeatureConstants,
    tierPlanConstants,
} from "@/config/tierConstants";
import { tier } from "@/lib";

export const pullPricingTableData = async () => {
    // Pull the all the pricing model details from Tier Cloud
    const tierPricingData: TierPricingData = await tier.pull();

    const pricingTableData = tierPlanConstants
        .map((currentPlan) => {
            if (
                currentPlan.planId &&
                Object.entries(tierPricingData.plans).some((_plan) => _plan[0] === currentPlan.planId)
            ) {
                // Get Tier Plan
                const tierPlan = Object.entries(tierPricingData.plans).find(
                    (_plan) => _plan[0] === currentPlan.planId
                ) as TierPlanModel[];

                // Extract title
                const name = tierPlan?.[1].title;

                // Extract base price
                const basePrice =
                    tierPlan &&
                    tierPlan[1].features &&
                    Object.entries(tierPlan[1].features).find(
                        (_feature) => _feature[0] === TIER_BASE_FEATURE_ID
                    )?.[1].base;

                const base = basePrice ?? 0;

                // Extract all features from the plan
                const featureDefinitions = tierPlan?.[1].features && Object.entries(tierPlan[1].features);

                // Filter features
                const features = tierFeatureConstants
                    .filter((_featureId) =>
                        featureDefinitions?.some((_feature) => _feature[0] === _featureId)
                    )
                    .map((_featureId) =>
                        featureDefinitions?.find((_featureDefinition) => _featureDefinition[0] === _featureId)
                    )
                    .map((_filteredFeature) => _filteredFeature?.[1].title) as string[];

                // Get promoted field from plan constant
                const promoted = currentPlan.promoted;

                return {
                    planId: currentPlan.planId,
                    currency: "usd",
                    interval: "monthly",
                    promoted,
                    name,
                    base,
                    features,
                };
            }
        })
        .filter((_plan) => {
            if (_plan) {
                return _plan;
            }
        });

    return pricingTableData;
};

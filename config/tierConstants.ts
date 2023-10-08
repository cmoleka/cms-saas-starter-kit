import type { FeatureName, PlanName } from "tier";

import { TierPlanConstant } from "@/types";

// Plans
export const TIER_FREE_PLAN_ID = "plan:free@3";
export const TIER_SOLOPRENEUR_PLAN_ID = "plan:business@3";

// Features
export const TIER_BASE_FEATURE_ID = "feature:base";
export const TIER_AICOPY_FEATURE_ID = "feature:aicopy";
export const TIER_EXTRACOPY_FEATURE_ID = "feature:extraaicopy";

// Make sure to maintain the order of the plan that you would require
export const tierPlanConstants: TierPlanConstant[] = [
    {
        planId: TIER_FREE_PLAN_ID as PlanName,
        promoted: false,
    },
    {
        planId: TIER_SOLOPRENEUR_PLAN_ID as PlanName,
        promoted: true,
    },
];

// Make sure to maintain the order of the (do not include your base price feature in this)
export const tierFeatureConstants: FeatureName[] = [
    // TIER_AICOPY_FEATURE_ID,
    // TIER_EXTRACOPY_FEATURE_ID,
];

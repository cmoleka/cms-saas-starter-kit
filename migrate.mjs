import { Tier } from "tier";
import { env } from "@/env.mjs";

export const tier = new Tier({
  baseURL: env.TIER_BASE_URL,
  apiKey: env.TIER_API_KEY,
  debug: true,
});

// Constants
const userId = "user_2WP6mye2zy5mHMBmBr4inqOkpxo"; // Fetch all users from your DB and loop through them
const featureName = "feature:base"; // The feature where you want to migrate the usage
const newPlan = "plan:free@2"; // Your new plan

const action = async () => {
  // const limits = await tier.lookupLimits(`org:${userId}`);
  // const freeFeatureUsage = limits.usage.find((_usage) => _usage.feature === featureName).used;

  await tier.subscribe(`org:${userId}`, newPlan);
  await tier.report(`org:${userId}`, featureName);

  const updatedLimits = await tier.lookupLimits(`org:${userId}`);
  return updatedLimits;
};

action()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

import { Campaign } from "@prisma/client";
import { db } from "models";

/**
 * The function createCampaign asynchronously creates a new campaign using the provided data and
 * returns the created campaign.
 * @param {Campaign} data - The `data` parameter in the `createCampaign` function represents the
 * information or details of the campaign that you want to create. This data typically includes
 * attributes such as the campaign name, start date, end date, budget, target audience, and any other
 * relevant information needed to create a campaign.
 * @returns The `createCampaign` function is returning a Promise that resolves to a `Campaign` object.
 */
export const createCampaign = async (data: Campaign): Promise<Campaign> => {
  const campaign = await db.campaign.create({
    data,
  });
  return campaign;
};

/**
 * The function `getCampaigns` retrieves a list of campaigns from a database asynchronously.
 * @returns The `getCampaigns` function is returning a Promise that resolves to an array of `Campaign`
 * objects.
 */
export const getCampaigns = async (): Promise<Campaign[]> => {
  const campaigns = await db.campaign.findMany();
  return campaigns;
};

/**
 * This function retrieves a campaign by its ID from a database asynchronously.
 * @param {string} id - The `id` parameter is a string that represents the unique identifier of a
 * campaign.
 * @returns The `getCampaignById` function is returning a Promise that resolves to either a `Campaign`
 * object or `null`.
 */
export const getCampaignById = async (id: string): Promise<Campaign | null> => {
  const campaign = await db.campaign.findUnique({
    where: {
      id,
    },
  });
  return campaign;
};

/**
 * The function `updateCampaign` updates a campaign in a database using the provided ID and data.
 * @param {string} id - The `id` parameter is a string that represents the unique identifier of the
 * campaign that you want to update.
 * @param {Campaign} data - The `data` parameter in the `updateCampaign` function refers to the updated
 * information or changes that you want to apply to the campaign with the specified `id`. This data
 * should be in the form of a `Campaign` object, which likely includes properties such as the campaign
 * name, start date,
 * @returns The `updateCampaign` function is returning a Promise that resolves to either a `Campaign`
 * object or `null`.
 */
export const updateCampaign = async (
  id: string,
  data: Campaign
): Promise<Campaign | null> => {
  const campaign = await db.campaign.update({
    where: {
      id,
    },
    data,
  });
  return campaign;
};

/**
 * The function `deleteCampaign` deletes a campaign from the database based on the provided ID and
 * returns the deleted campaign or null.
 * @param {string} id - The `id` parameter is a string that represents the unique identifier of the
 * campaign that you want to delete.
 * @returns The `deleteCampaign` function is returning a `Campaign` object or `null` wrapped in a
 * `Promise`.
 */
export const deleteCampaign = async (id: string): Promise<Campaign | null> => {
  const campaign = await db.campaign.delete({
    where: {
      id,
    },
  });
  return campaign;
};

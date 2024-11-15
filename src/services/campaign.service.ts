import { Campaign } from "@prisma/client";
import { db } from "models";

export const createCampaign = async (data: Campaign): Promise<Campaign> => {
  const campaign = await db.campaign.create({
    data,
  });
  return campaign;
};

export const getCampaigns = async (): Promise<Campaign[]> => {
  const campaigns = await db.campaign.findMany();
  return campaigns;
};

export const getCampaignById = async (id: string): Promise<Campaign | null> => {
  const campaign = await db.campaign.findUnique({
    where: {
      id,
    },
  });
  return campaign;
};

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

export const deleteCampaign = async (id: string): Promise<Campaign | null> => {
  const campaign = await db.campaign.delete({
    where: {
      id,
    },
  });
  return campaign;
};

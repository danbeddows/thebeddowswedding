import { prisma } from "../prisma";

export const getParties = async () => {
  /**
   * Fetch work items from db
   */
  const parties = await prisma.party.findMany({});

  return parties;
};

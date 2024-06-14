import axios from "axios";

export const fetchTokenPrice = async ({ chainId, address }: { chainId: number; address: string }): Promise<number> => {
  try {
    const response = await axios.get(`https://wallet-api.pancakeswap.com/v0/prices/${chainId}/${address}`);
    return parseFloat(response.data);
  } catch (error) {
    console.error("Error fetching cake price:", error);
    throw new Error("Failed to fetch cake price");
  }
};

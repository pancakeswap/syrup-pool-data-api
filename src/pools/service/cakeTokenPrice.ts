import axios from 'axios';

export const fetchCakeTokenPrice = async (): Promise<number> => {
  try {
    const response = await axios.get("https://farms-api.pancakeswap.com/price/cake");
    return parseFloat(response.data.price);
  } catch (error) {
    console.error("Error fetching cake price:", error);
    throw new Error("Failed to fetch cake price");
  }
};

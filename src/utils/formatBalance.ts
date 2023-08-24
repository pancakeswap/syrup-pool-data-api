import { getFullDecimalMultiplier } from "./getFullDecimalMultiplier";
import BigNumber from "bignumber.js";

export const getBalanceAmount = (amount: BigNumber, decimals: number | undefined = 18) => {
  return new BigNumber(amount).dividedBy(getFullDecimalMultiplier(decimals));
};

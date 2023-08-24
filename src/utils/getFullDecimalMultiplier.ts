import BigNumber from "bignumber.js";
import memoize from "lodash/memoize";
import { BIG_TEN } from "./const";

export const getFullDecimalMultiplier = memoize((decimals: number): BigNumber => {
  return BIG_TEN.pow(decimals);
});

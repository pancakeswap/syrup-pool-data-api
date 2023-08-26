import BigNumber from "bignumber.js";
import {BIG_TEN} from "./const";

export const getFullDecimalMultiplier = (decimals: number): BigNumber => {
    return BIG_TEN.pow(decimals);
};

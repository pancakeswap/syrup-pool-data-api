import { Address, PublicClient } from "viem";
import { SerializedWrappedToken } from "@pancakeswap/token-lists";
import { ChainId } from "@pancakeswap/sdk";

export type OnChainProvider = ({ chainId }: { chainId?: ChainId }) => PublicClient;

interface GenericToken {
  chainId: number;
  address: string;
  name?: string;
  decimals: number;
  symbol: string;
}

interface PoolMetrics {
  totalStaked: number;
  stakingTokenPrice: number;
  earningTokenPrice: number;
  apr: number;
  alpApr?: number;
  endTimestamp: number;
}

interface SerializedPoolConfig<T extends GenericToken> {
  sousId: number;
  contractAddress: Address;
  stakingToken: T;
  earningToken: T;
  tokenPerSecond: number;
  metrics: PoolMetrics;
}

export type SerializedPool = SerializedPoolConfig<SerializedWrappedToken>;

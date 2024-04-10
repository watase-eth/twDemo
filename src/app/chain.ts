import { defineChain } from "thirdweb";

const chainId = process.env.CHAIN_ID as string;
export const CHAIN = defineChain(parseInt(chainId)); 
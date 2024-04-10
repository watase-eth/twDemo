'use client';

import { client } from "@/app/client";
import { ConnectButton } from "thirdweb/react";
import { inAppWallet } from "thirdweb/wallets";
import { CHAIN } from "@/app/chain";

const wallets = [
    inAppWallet(),
];

const accountAbstraction = {
    chain: CHAIN,
    factoryAddress: process.env.ACCOUNT_FACTORY_CONTRACT_ADDRESS as string,
    gasless: true,
}

export const AccountAbstractionLogin = () => {
    return (
        <ConnectButton
            client={client}
            chain={CHAIN}
            wallets={wallets}
            accountAbstraction={accountAbstraction}
            connectButton={{
                label: "Sign In"
            }}
        />
    );
};
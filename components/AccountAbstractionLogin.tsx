'use client';

import { client } from "@/app/client";
import { ConnectButton } from "thirdweb/react";
import { baseSepolia } from "thirdweb/chains";
import { inAppWallet } from "thirdweb/wallets";

const wallets = [
    inAppWallet(),
];

const accountAbstraction = {
    chain: baseSepolia,
    factoryAddress: "0x37F5F3013Ba1C7FEF7a8A15D93A4af91EA774dD3",
    gasless: true,
}

export const AccountAbstractionLogin = () => {
    return (
        <ConnectButton
            client={client}
            chain={ baseSepolia }
            wallets={wallets}
            accountAbstraction={accountAbstraction}
            connectButton={{
                label: "Sign In"
            }}
        />
    );
};
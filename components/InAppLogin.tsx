'use client';

import { client } from "@/app/client";
import { ConnectButton } from "thirdweb/react";
import { baseSepolia } from "thirdweb/chains";
import { inAppWallet } from "thirdweb/wallets";

const wallets = [
    inAppWallet(),
];

export const InAppWalletLogin = () => {
    return (
        <ConnectButton
            client={client}
            chain={ baseSepolia }
            wallets={wallets}
            connectButton={{
                label: "Sign In"
            }}
        />
    );
};
'use client';

import { client } from "@/app/client";
import { ConnectButton } from "thirdweb/react";
import { inAppWallet } from "thirdweb/wallets";
import { CHAIN } from "@/app/chain";

const wallets = [
    inAppWallet(),
];

export const InAppWalletLogin = () => {
    return (
        <ConnectButton
            client={client}
            chain={CHAIN}
            wallets={wallets}
            connectButton={{
                label: "Sign In"
            }}
        />
    );
};
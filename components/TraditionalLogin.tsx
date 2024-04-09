'use client';

import { client } from "@/app/client";
import { ConnectButton } from "thirdweb/react";
import { baseSepolia } from "thirdweb/chains";
import { createWallet, walletConnect } from "thirdweb/wallets";

const wallets = [
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    walletConnect(),
];

export const TraditionalLogin = () => {
    return (
        <ConnectButton
            client={client}
            chain={ baseSepolia }
            wallets={wallets}
        />
    );
};
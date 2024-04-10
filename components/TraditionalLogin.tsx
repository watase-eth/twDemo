'use client';

import { client } from "@/app/client";
import { ConnectButton } from "thirdweb/react";
import { createWallet, walletConnect } from "thirdweb/wallets";
import { CHAIN } from "@/app/chain";

const wallets = [
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    walletConnect(),
];

export const TraditionalLogin = () => {
    return (
        <ConnectButton
            client={client}
            chain={CHAIN}
            wallets={wallets}
        />
    );
};
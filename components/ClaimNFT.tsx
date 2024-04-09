'use client';

import { TransactionButton, useActiveAccount } from "thirdweb/react";
import { claimTo } from "thirdweb/extensions/erc721";
import { getContract } from "thirdweb";
import { client } from "@/app/client";
import { baseSepolia } from "thirdweb/chains";

export const ClaimNFT = () => {
    const account = useActiveAccount();

    const nftContractAddress = "0x01dC70687123875f92a8842Cf51C0F55f53fd44F";
    const contract = getContract({
        client: client,
        chain: baseSepolia,
        address: nftContractAddress,
    });

    const claimNFT = async () => {
        try {
            const tx = await fetch(
                "api/claimNFT",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userWalletAddress: account?.address,
                    }),
                }
            );
            const data = await tx.json();
            if (!tx.ok) {
                throw new Error(data.message);
            }
            console.log("NFT claimed!");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
        }}>
            <TransactionButton
                transaction={() => (
                    claimTo({
                        contract: contract,
                        to: account?.address || "",
                        quantity: BigInt(1),
                    })
                )}
                onTransactionConfirmed={() => alert("NFT claimed")}
            >Claim NFT</TransactionButton>
            <button
                style={{
                    padding: "12px",
                    borderRadius: "8px",
                    backgroundColor: "white",
                    color: "black",
                    border: "none",
                    cursor: "pointer",
                }}
                onClick={claimNFT}
            >{`Claim NFT (Engine)`}</button>
        </div>
    )
};
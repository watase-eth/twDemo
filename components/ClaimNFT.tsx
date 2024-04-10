'use client';

import { TransactionButton, useActiveAccount } from "thirdweb/react";
import { claimTo } from "thirdweb/extensions/erc721";
import { getContract } from "thirdweb";
import { client } from "@/app/client";
import { CHAIN } from "@/app/chain";

export const ClaimNFT = () => {
    const account = useActiveAccount();

    const nftContractAddress = process.env.NFT_CONTRACT_ADDRESS as string;
    const contract = getContract({
        client: client,
        chain: CHAIN,
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
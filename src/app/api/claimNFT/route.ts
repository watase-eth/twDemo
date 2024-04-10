import { NextResponse } from "next/server";

export async function POST(
    req: Request
) {
  const {
    ENGINE_URL,
    ENGINE_ACCESS_TOKEN,
    ENGINE_WALLET,
    NFT_CONTRACT_ADDRESS,
    CHAIN_ID
  } = process.env;

  const { userWalletAddress } = await req.json();

  try {
    if(!ENGINE_URL || !ENGINE_ACCESS_TOKEN || !ENGINE_WALLET || !NFT_CONTRACT_ADDRESS || !CHAIN_ID) {
      throw new Error('Engine credentials not found');
    }

    if(!userWalletAddress) {
      throw new Error('User wallet address not found');
    }

    const response = await fetch(
        `${ENGINE_URL}/contract/${CHAIN_ID}/${NFT_CONTRACT_ADDRESS}/erc721/claim-to`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${ENGINE_ACCESS_TOKEN}`,
                'x-backend-wallet-address': ENGINE_WALLET
            },
            body: JSON.stringify({
                receiver: userWalletAddress,
                quantity: "1"
            })
        }
    );

    const data = await response.json();

    if(!response.ok) {
        throw new Error(data.message);
    }

    return NextResponse.json({ message: 'NFT claimed' });
  } catch (error: any) {
    return NextResponse.error();
  }
}
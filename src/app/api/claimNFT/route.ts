import { NextResponse } from "next/server";

export async function POST(
    req: Request
) {
  const {
    ENGINE_URL,
    ENGINE_ACCESS_TOKEN,
    ENGINE_WALLET
  } = process.env;

  const { userWalletAddress } = await req.json();

  try {
    if(!ENGINE_URL || !ENGINE_ACCESS_TOKEN || !ENGINE_WALLET) {
      throw new Error('Engine credentials not found');
    }

    if(!userWalletAddress) {
      throw new Error('User wallet address not found');
    }

    const response = await fetch(
        `${ENGINE_URL}/contract/84532/0x01dC70687123875f92a8842Cf51C0F55f53fd44F/erc721/claim-to`,
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
'use client';

import { ChangeEvent, useState } from "react";
import LoginFlowSelector from "../../components/loginFlowSelector";
import { TraditionalLogin } from "../../components/TraditionalLogin";
import { InAppWalletLogin } from "../../components/InAppLogin";
import { AccountAbstractionLogin } from "../../components/AccountAbstractionLogin";
import { useActiveAccount } from "thirdweb/react";
import { ClaimNFT } from "../../components/ClaimNFT";

export default function Home() {
  const account = useActiveAccount();

  const [loginFlow, setLoginFlow] = useState<"traditional" | "inApp" | "accountAbstraction">("traditional");

  const handleLoginFlow = (event: ChangeEvent<HTMLSelectElement>) => {
    setLoginFlow(event.target.value as "traditional" | "inApp" | "accountAbstraction");
  }

  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
    }}>
      <p>Select Login Flow:</p>
      <LoginFlowSelector
        selectedValue={loginFlow}
        onValueChange={handleLoginFlow}
      />
      {loginFlow === "traditional" ? (
        <>
          <TraditionalLogin />
        </>
      ) : loginFlow === "inApp" ? (
        <>
          <InAppWalletLogin />
        </>
      ) : (
        <>
          <AccountAbstractionLogin />
        </>
      )}
      {account && (
        <>
          <p>Claim an NFT with TransactionButton or using Engine</p>
          <ClaimNFT />
        </>
      )}
    </main>
  );
}
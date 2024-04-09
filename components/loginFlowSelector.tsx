import React, { ChangeEvent } from "react";

type LoginFlowSelectorProps = {
    selectedValue: "traditional" | "inApp" | "accountAbstraction";
    onValueChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const LoginFlowSelector: React.FC<LoginFlowSelectorProps> = ({ selectedValue, onValueChange }) => {
    return (
        <select 
            value={selectedValue} 
            onChange={onValueChange}
            style={{
                padding: "10px",
                fontSize: "16px",
                borderRadius: "5px",
                color: "black",
            }}
        >
            <option value="traditional">Traditional Login</option>
            <option value="inApp">In-App Login</option>
            <option value="accountAbstraction">Account Abstraction</option>
        </select>
    )
};

export default LoginFlowSelector;
import { appColors } from "@/utils/colors";
import { FC } from "react";
import { styled } from "styled-components";

const StyledButton = styled.button<{ $buttonType: ButtonType }>`
    border-radius: 10px;
    background-color: ${(props) => (props.$buttonType === "primary" ? "white" : appColors.red)};
    color: ${(props) => (props.$buttonType === "primary" ? "black" : "white")};
    border: none;
    cursor: pointer;
`;

type ButtonType = "primary" | "secondary";

interface CustomButtonProps {
    buttonType: ButtonType;
    label: string;
}

const CustomButton: FC<CustomButtonProps> = ({ buttonType, label }) => {
    return (
        <>
            <StyledButton $buttonType={buttonType}>{label}</StyledButton>
        </>
    );
};
export default CustomButton;

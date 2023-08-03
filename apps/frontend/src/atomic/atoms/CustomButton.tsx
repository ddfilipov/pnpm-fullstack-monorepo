import { appColors } from "@/utils/colors";
import { FC } from "react";
import { styled } from "styled-components";

const StyledButton = styled.button<{ $buttonInputType: ButtonInputType }>`
    border-radius: 10px;
    background-color: ${(props) => (props.$buttonInputType === "primary" ? "white" : appColors.red)};
    color: ${(props) => (props.$buttonInputType === "primary" ? "black" : "white")};
    border: none;
    cursor: pointer;
`;

type ButtonInputType = "primary" | "secondary";

interface CustomButtonProps {
    buttonInputType: ButtonInputType;
    label: string;
    onClick?: React.MouseEventHandler;
    buttonType: "submit" | "reset" | "button" | undefined;
    disabled?: boolean;
}

const CustomButton: FC<CustomButtonProps> = ({ buttonInputType, label, onClick, buttonType, disabled }) => {
    return (
        <>
            <StyledButton $buttonInputType={buttonInputType} onClick={onClick} type={buttonType} disabled={disabled}>
                {label}
            </StyledButton>
        </>
    );
};
export default CustomButton;

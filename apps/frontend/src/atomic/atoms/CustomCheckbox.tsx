import { ChangeEvent, FC, HTMLInputTypeAttribute } from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`;

interface CustomCheckboxProps {
    value: boolean | undefined;
    onChange: (val: boolean) => void;
    label?: string;
    htmlFor?: string;
}

const CustomCheckbox: FC<CustomCheckboxProps> = ({ value, onChange, htmlFor, label }) => {
    return (
        <Wrapper>
            {label ? <label htmlFor={htmlFor}>{label}:</label> : null}
            <input
                type={"checkbox"}
                checked={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.checked)}
            />
        </Wrapper>
    );
};
export default CustomCheckbox;

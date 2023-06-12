import { ChangeEvent, FC, HTMLInputTypeAttribute } from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 10px;
    align-items: center;
`;

const StyledInput = styled.input`
    border-radius: 10px;
    padding: 10px;
`;

interface CustomInputProps {
    value: string | number | Date;
    onChange: (val: string) => void;
    label?: string;
    htmlFor?: string;
    type?: HTMLInputTypeAttribute | undefined;
}

const CustomInput: FC<CustomInputProps> = ({ value, onChange, htmlFor, label, type }) => {
    return (
        <Wrapper>
            {label ? <label htmlFor={htmlFor}>{label}:</label> : null}
            <StyledInput
                type={type}
                value={value.toString()}
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
            />
        </Wrapper>
    );
};
export default CustomInput;

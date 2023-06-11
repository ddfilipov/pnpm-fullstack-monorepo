import { FC } from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

interface CustomInputProps {
    value: string;
    onChange: (val: string) => void;
    label?: string;
    htmlFor?: string;
}

const CustomInput: FC<CustomInputProps> = ({ value, onChange, htmlFor, label }) => {
    return (
        <Wrapper>
            {label ? <label htmlFor={htmlFor}>{label}:</label> : null}
            <input type="text" value={value}></input>
        </Wrapper>
    );
};
export default CustomInput;

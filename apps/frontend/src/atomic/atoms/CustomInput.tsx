import { ChangeEvent, FC, HTMLInputTypeAttribute } from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 10px;
    align-items: center;
`;

const StyledInput = styled.input<{ disabledStyle: boolean }>`
    border-radius: 10px;
    padding: 10px;
    background-color: ${(props) => (props.disabledStyle ? "#b6b3b3" : "white")};
`;

interface CustomInputProps {
    value: string | number | Date;
    onChange: (val: string) => void;
    label?: string;
    type?: HTMLInputTypeAttribute | undefined;
    disabled?: boolean;
}

const CustomInput: FC<CustomInputProps> = ({ value, onChange, label, type, disabled }) => {
    return (
        <Wrapper>
            {label ? <label>{label}:</label> : null}
            <StyledInput
                type={type}
                value={value.toString()}
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
                disabled={disabled}
                disabledStyle={disabled ?? false}
            />
        </Wrapper>
    );
};
export default CustomInput;

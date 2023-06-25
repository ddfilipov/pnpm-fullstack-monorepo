import { ChangeEvent, FC } from "react";
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
    disabled?: boolean;
}

const CustomCheckbox: FC<CustomCheckboxProps> = ({ value, onChange, label }) => {
    return (
        <Wrapper>
            {label ? <label>{label}:</label> : null}
            <input
                type={"checkbox"}
                checked={value ?? false}
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.checked)}
                disabled
            />
        </Wrapper>
    );
};
export default CustomCheckbox;

import { FC } from "react";
import { IPersonData } from "@pnpm-fullstack-monorepo/validation";
import { styled } from "styled-components";

const StyledBox = styled.div`
    padding: 10px;
    width: 300px;
    border: 1px solid black;
`;

interface PersonCardProps {
    person: IPersonData;
}

const PersonCard: FC<PersonCardProps> = ({ person }) => {
    return (
        <StyledBox key={person.id}>
            <p>{person.name}</p>
            <ul>
                <li>{person.money}</li>
                <li>{person.birthDate.toString()}</li>
                {person.vip ? <li>VIP</li> : null}
            </ul>
        </StyledBox>
    );
};
export default PersonCard;

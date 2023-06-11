import { FC } from "react";
import { IPersonData } from "@pnpm-fullstack-monorepo/validation";
import { styled } from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`;

const StyledBox = styled.div`
    padding: 10px;
    width: 300px;
    border: 1px solid black;
`;

interface PeopleListProps {
    people: IPersonData[];
}

const PeopleList: FC<PeopleListProps> = ({ people }) => {
    return (
        <Wrapper>
            {people?.map((person) => {
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
            })}
        </Wrapper>
    );
};
export default PeopleList;

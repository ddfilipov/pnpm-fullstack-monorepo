export interface IPersonDataResponse {
    people: IPersonData[];
}
export interface IPersonData {
    personId: number; // TODO: should change this to personId or something so react-hook-form's id doesn't complain
    name: string;
    dateOfBirth: Date;
    money: number;
    isVip?: boolean;
}

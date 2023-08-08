export interface IPersonDataResponse {
    people: IPersonData[];
}
export interface IPersonData {
    personId: number; // changed from id to personId react-hook-form's useFieldArray id doesn't complain
    name: string;
    dateOfBirth: Date;
    money: number;
    isVip?: boolean;
}

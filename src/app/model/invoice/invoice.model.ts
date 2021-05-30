export interface Invoice {
    id?:number;
    concept: string;
    aproved_by: string;
    sign: string;
    startDate: Date;
    endDate: Date;
}
export interface Account {
    id?:number
    productNumber: string;
    currentAmount: number;
    employee?:{
        id:number;
    }
}

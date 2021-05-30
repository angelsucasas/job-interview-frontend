export interface Transaction {
    id?:number;
    amount: string;
    description: string;
    originAccount: {
        id:number;
    }
    destinyAccount:{
        id:number
    }
}





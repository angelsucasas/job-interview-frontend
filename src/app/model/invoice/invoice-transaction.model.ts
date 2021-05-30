export interface InvoiceTransaction {
    id?:number;
    invoice:{
        id:number;
    };
    transaction:{
        id:number;
    }
}
import { Ipayments } from "./Ipayment";
import { Iproduct } from "./Iproduct";
import { Itable } from "./Itable";

export default interface Iorder {
    total:number,
    status:string,
    productsId:Iproduct,
    tableId:Itable,
    paymentId:Ipayments,

}
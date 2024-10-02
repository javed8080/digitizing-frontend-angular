

export interface Quote {


    _id?: number;
    OrderId?: string;
    userId?: string;
    CustomerID?: string;
    orderNumber?: string;
    type?: string;
    orderState?:string;
    po?:string;
    name?:string;
    date?:string;
    time?:string;
    sendDateTime?:string;
    width?:string;
    widtha?:string;
    height?:string;
    heighta?:string;
    colors?:string;
    urgent?:string;
    instruction?:string; //Instruction from Client for order
    adminInstruction?:string; //Instruction from Admin
    adminInstructionToDigitizer?:string; //adinst
    price?:Number;  
    email1?:string;
    email2?:string;
    email3?:string;
    email4?:string;
    bonus?:Number;
    invoiceid?:any;
    invoiceNumber?:string;
    paymentStatus?:string;
    paidDate?:Date;
    status?:string;
    stitches_a?:string;
    edit?:string;

    editdate?:Date;
    editnumber?:string;
    convert?:string;
    convertdDate?:Date;
    convertNumber?:string;
    assign?:string;
    digitizeRate?:number;
    qcrate?:number;
    salesRef?:string;
    salesCommission?:number;
    salesFirstCommission?:number;
    releasedby?:string;
    releaseCommission?:number;
    clr_sep?:string;    
  
    revisions?: any[]
    ipaddress?: string
    patchType?: string
    qty?: any
    backing?: string
    merrowBorder?: string
    color?: string
    shippingAddress?: string
    deliveryDate?: string
    pprice?: string
    psew?: string //Client needs pricing + sew out sample
    ostatus?: string
    patchProductionDate?: Date
    patchDispatchedDate?: Date
    patchDeliveredDate?: Date
  
    qc?: string
}

export class dto{

    message:string='';
    success:boolean=false;
    data!:any;

    constructor(msg?:string,_success?:boolean,_data?:any){
        this.message=msg || "";
        this.success=_success || false;
        this.data=_data || undefined;
    }
}


export class Customer {
    _id?: string="";
    name: string="";
    email: string="";
    phone: string="";
    city: string="";
}
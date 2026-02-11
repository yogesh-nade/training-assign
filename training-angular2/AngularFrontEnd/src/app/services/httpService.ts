import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { Customer, dto } from "./models";
import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";

export abstract class httpService {
   abstract getCities():Observable<HttpResponse<dto>>;
   abstract getCustomersByCity(city:string):Observable<HttpResponse<dto>>;
   abstract addCustomer(item:Customer):Observable<HttpResponse<dto>>;
   abstract updateCustomer(item:Customer):Observable<HttpResponse<dto>>;
   abstract deleteCustomer(id:string):Observable<HttpResponse<dto>>;
}

@Injectable()
export class httpServiceImpl extends httpService{
    bseUrl:string;
    constructor(private client:HttpClient){
        super();
        this.bseUrl=environment.NODE_APP_URL;
    }
    override getCities(): Observable<HttpResponse<dto>> {
        const path = `${this.bseUrl}/cities`;
        const response = this.client.get<dto>(path, { observe: 'response' });
        return response;
    }
    override getCustomersByCity(city: string): Observable<HttpResponse<dto>> {
        const path = `${this.bseUrl}/customers/${city}`;
        const response = this.client.get<dto>(path, { observe: 'response' });
        return response;
    }
    override addCustomer(item: Customer): Observable<HttpResponse<dto>> {
        const path = `${this.bseUrl}/customer`;
        const response = this.client.post<dto>(path, item, { observe: 'response' });
        return response;
    }
    override updateCustomer(item: Customer): Observable<HttpResponse<dto>> {
        const path = `${this.bseUrl}/customer/${item._id}`;
        const response = this.client.put<dto>(path, item, { observe: 'response' });
        return response;
    }
    override deleteCustomer(id: string): Observable<HttpResponse<dto>> {
        const path = `${this.bseUrl}/customer?id=${id}`;
        const response = this.client.delete<dto>(path, { observe: 'response' });
        return response;
    }
}
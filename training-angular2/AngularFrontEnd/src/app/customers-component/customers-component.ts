import { Component, signal ,WritableSignal} from '@angular/core';
import { Writable } from 'stream';
import { httpService, httpServiceImpl } from '../services/httpService';
import { Customer } from '../services/models';
import { ActivatedRoute, RouterLink } from '@angular/router';
import id from '@angular/common/locales/extra/id';

@Component({
  selector: 'app-customers-component',
  imports: [RouterLink],
  templateUrl: './customers-component.html',
  styleUrl: './customers-component.css',
  providers: [{provide: httpService, useClass: httpServiceImpl}]
})

export class CustomersComponent {
  customers:WritableSignal<Customer[]> = signal<Customer[]>([]);
  message:WritableSignal<string> = signal<string>("");
  constructor(private service:httpService,private activatedRoute: ActivatedRoute){}
  ngOnInit() {
      this.activatedRoute.paramMap.subscribe(routedata => {
        const city = routedata.get('city') || '';
        this.getCustomers(city);
      });
  }  
  getCustomers(city:string):void{
      this.service.getCustomersByCity(city).subscribe({
          next: (response) => {
              const customerList = <Customer[]>response.body?.data || [];
              this.customers.set(customerList);
          },
          error: (e: any) => {
              this.message.set("Error fetching customers.");
          }
      }); 
  }
  remove(id:string):void{
    const dialogResult = confirm("Are you sure you want to delete this customer?");
    if (dialogResult) {
      this.service.deleteCustomer(id).subscribe({
          next: (result) => {
              this.message.set(result.body?.message!);
              this.getCustomers(sessionStorage.getItem("selectedCity")!);
              sessionStorage.removeItem("selectedCustomer");
          },
          error: (e: any) => {
              this.message.set("Error deleting customer.");
          }
      });
    }
  }
}

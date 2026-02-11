
import { FormsModule } from '@angular/forms';
import { httpService, httpServiceImpl } from '../services/httpService';
import { Customer } from '../services/models';
import { Component, signal ,WritableSignal} from '@angular/core';
import { Router } from 'express';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-addupdate-component',
  imports: [FormsModule],
  templateUrl: './addupdate-component.html',
  styleUrl: './addupdate-component.css',
   providers: [{provide: httpService, useClass: httpServiceImpl}]
})
export class AddupdateComponent {
     cust:Customer;
     message:WritableSignal<string> = signal<string>("");
     constructor(private service:httpService){
        this.cust = new Customer();
     }
     ngOnInit() {
         this.addCustomer();
     }
      addCustomer():void{
        this.service.addCustomer(this.cust).subscribe({
            next: (response) => {
                this.message.set(response.body?.message!);
            },
            error: (e: any) => {
                this.message.set("Error adding/updating customer.");
            }
        });
      }

}

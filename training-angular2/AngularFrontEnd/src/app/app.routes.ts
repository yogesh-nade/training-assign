import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { CustomersComponent } from './customers-component/customers-component';
import { AddupdateComponent } from './addupdate-component/addupdate-component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'customers/:city',component:CustomersComponent},
    {path:'addupdate',component:AddupdateComponent}
];

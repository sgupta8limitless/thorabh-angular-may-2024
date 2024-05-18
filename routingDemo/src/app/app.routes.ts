import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ServicesComponent } from './components/services/services.component';

export const routes: Routes = [
    {path:"",component:AboutComponent},
    {path:"about",component:AboutComponent},
    {path:"products/:id",component:ProductsComponent},
    {path:"services",component:ServicesComponent}
];



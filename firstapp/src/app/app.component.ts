import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductComponent,CategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  name="Saurabh"
  company="thorabh"

  imgLink="https://cdn.britannica.com/73/182873-050-E1C686F4/Chris-Hemsworth-Thor-Thor-The-Dark-World.jpg"

  inpType="password"

  isAvailable = true

  


  printData()
  {
    console.log("hello")
    this.isAvailable=false
  }



}

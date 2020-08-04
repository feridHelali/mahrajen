import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [HomeComponent, CategoryPageComponent, NavbarComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { CategoryPageComponent } from './shared/pages/category-page/category-page.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'/events',component:HomeComponent},
  {path:'/category',component:CategoryPageComponent},
  {path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

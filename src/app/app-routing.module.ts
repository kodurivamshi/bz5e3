import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { ContentComponent } from './content/content.component';
import { CommonModule } from '@angular/common';




const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'countries',component:CountriesComponent},
  {path:'content',component:ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegDataComponent } from './data/reg-data/reg-data.component';
import { ShowDataComponent } from './data/show-data/show-data.component';
import { UpdateDataComponent } from './data/update-data/update-data.component';



const routes: Routes = [
  {
    component:RegDataComponent,
    path:"",
  },
  {component:ShowDataComponent,
   path:"show"
  },
  {
    component:UpdateDataComponent,
    path:"update/:id"
  },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

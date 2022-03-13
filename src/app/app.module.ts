import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider'; 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShowDataComponent } from './data/show-data/show-data.component';
import { RegDataComponent } from './data/reg-data/reg-data.component';
import { UpdateDataComponent } from './data/update-data/update-data.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ShowDataComponent,
    RegDataComponent,
    UpdateDataComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSliderModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

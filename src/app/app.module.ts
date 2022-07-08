import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {FormComponent } from './form/form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ComunicationModule } from './comunication/comunication.module';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    ReactiveFormsModule,
    ComunicationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import { BasicMatTableComponent } from './basic-mat-table/basic-mat-table.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { StreamsComponent } from './streams/streams.component';
import { AuditComponent } from './audit/audit.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicMatTableComponent,
    StreamsComponent,
    AuditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

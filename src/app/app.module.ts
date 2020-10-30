import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CreateNewComponent } from "./create-new/create-new.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatNativeDateModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
} from "@angular/material";
import { NgxSpinnerModule } from "ngx-spinner";
import { DBConfig, NgxIndexedDBModule } from "ngx-indexed-db";

const dbConfig: DBConfig = {
  name: "EmployeeDb",
  version: 1,
  objectStoresMeta: [
    {
      store: "employee",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [],
    },
  ],
  // provide the migration factory to the DBConfig
  // migrationFactory
};

@NgModule({
  declarations: [AppComponent, CreateNewComponent, EmployeeListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    NgxIndexedDBModule.forRoot(dbConfig),
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

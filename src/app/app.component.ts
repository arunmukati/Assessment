import { Component } from '@angular/core';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LocalDbService } from './services/local-db.service';
import { Title,Meta } from '@angular/platform-browser';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Assessment";
  constructor() {}
  ngOnInit{}
}


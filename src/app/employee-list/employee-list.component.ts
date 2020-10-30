import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LocalDbService } from '../services/local-db.service';

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"],
})
export class EmployeeListComponent implements OnInit {
  constructor(
    private DBService: LocalDbService,
    private spinner: NgxSpinnerService
  ) {}
  emlployeeList: [];

  ngOnInit() {
    this.getEmployeeList();
  }
  getEmployeeList() {
    this.spinner.show();

    this.DBService.getEmployeeList()
      .then((res) => {
        console.log("response list", res);
        this.emlployeeList = res;
        this.spinner.hide();
      })
      .catch((err) => {
        console.error(err);
        this.spinner.hide();
      });
  }
  deleteEmployee(id) {
    this.spinner.show();

    this.DBService.deleteEmployee(id)
      .then((res) => {
        console.log("response list", res);
        this.getEmployeeList();
        this.spinner.hide();
      })
      .catch((err) => {
        console.error(err);
        this.spinner.hide();
      });
  }
  search(ev) {
    console.log("serach fn", ev);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgxSpinnerService } from 'ngx-spinner';
import { LocalDbService } from '../services/local-db.service';

@Component({
  selector: "app-create-new",
  templateUrl: "./create-new.component.html",
  styleUrls: ["./create-new.component.css"],
})
export class CreateNewComponent implements OnInit {
  constructor(
    private DBService: LocalDbService,
    private spinner: NgxSpinnerService
  ) {}
  detailForm: FormGroup;
  submitted = false;
  add = true;
  ngOnInit() {
    this.detailForm = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
      ]),
      position: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
      ]),
      about: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
      ]),
      joiningDate: new FormControl("", [Validators.required]),
      id: new FormControl(null),
    });
  }
  submitEmployeeDetail() {
    console.log(this.detailForm);
    this.submitted = true;
    if (this.detailForm.invalid) {
      return;
    }
    this.spinner.show();
    this.detailForm.get("id").setValue(new Date().getTime());
    this.DBService.addEmployee(this.detailForm.value)
      .then((res) => {
        console.log("response", res);
        this.add = false;

        this.spinner.hide();
      })
      .catch((err) => {
        console.error(err);
        this.spinner.hide();
      });
  }
  addMore() {
      this.submitted = false;
    this.add = true;
    this.detailForm.reset();
  }
}

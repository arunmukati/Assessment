import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';


@Injectable({
  providedIn: "root",
})
export class LocalDbService {
  // db= new NgxIndexedDB()
  // db = new NgxIndexedDB("EmployeeDetail", 1);
  dbObjectName = "employee";
  constructor(private db: NgxIndexedDBService) {
    console.log(this.db);
  }
  // dbInit() {
  //   this.db
  //     .openDatabase(1, (ev) => {
  //       let objectStore = ev.currentTarget.result.createObjectStore(
  //         this.dbObjectName,
  //         { keyPath: "id" }
  //       );
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((res) => {
  //       console.error(res);
  //     });
  // }
  // openDatabase() {
  //   this.db.openDatabase(1).then((res) => {});
  // }
  getEmployeeList() {

    return new Promise<any>((resolve, reject) => {

        this.db.getAll(this.dbObjectName).subscribe((res) => {
            console.log("all data responsesd", res);
            resolve(res);
          },(err) => {
            console.log(err);
            reject(err);
          });
    });
  }
  addEmployee(data) {
    console.log(data);
    return new Promise<any>((resolve, reject) => {
      this.db
        .add(this.dbObjectName, data)
        .subscribe((res) => {
          resolve(res);
        },(err) => {
          reject(err);
        });
    });
  }
  deleteEmployee(id) {
    return new Promise<any>(async (resolve, reject) => {
      await this.db
        .delete(this.dbObjectName, id)
        .subscribe((res) => {
          resolve(true);
        },(err) => {
          reject(err);
        });
    });
  }
}

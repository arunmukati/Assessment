import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNewComponent } from './create-new/create-new.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  {
    path: "",
    component: EmployeeListComponent,
  },
  {
    path: "employeeList",
    component: EmployeeListComponent,
  },

  {
    path: "createNew",
    component: CreateNewComponent,
  },
  {
    path: "**",
    redirectTo: "/createNew",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from '../app/employee/employee-list/employee-list.component';
import { EmployeeFormComponent } from '../app/employee/employee-form/employee-form.component';
export const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employee/edit/:id', component: EmployeeFormComponent },
  { path: 'employee/add', component: EmployeeFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
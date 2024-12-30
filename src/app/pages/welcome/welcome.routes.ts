
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from '/PracticaAngular/CatalogoEmpresa/src/app/employee/employee-list/employee-list.component';
import { EmployeeFormComponent } from '/PracticaAngular/CatalogoEmpresa/src/app/employee/employee-form/employee-form.component';
export const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'edit/:id', component: EmployeeFormComponent },
  { path: 'add', component: EmployeeFormComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddrestroComponent } from './addrestro/addrestro.component';
import { ListOfResturantComponent } from './list-of-resturant/list-of-resturant.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdaterestroComponent } from './updaterestro/updaterestro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchrestoComponent } from './searchresto/searchresto.component';
import { CrudComponent } from './crud/crud.component';

const routes: Routes = [
  // { path: '', component: ListOfResturantComponent },
  // { path: '', component: ListOfResturantComponent },
  { path: 'Add', component: AddrestroComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Update/:id', component: UpdaterestroComponent },
  { path: '', component: ListOfResturantComponent },
  { path: 'search', component: SearchrestoComponent },
  { path: 'crud', component: CrudComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

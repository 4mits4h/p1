import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveDirective } from './directive.directive';
import { NgForm } from '@angular/forms';
import { ListOfResturantComponent } from './list-of-resturant/list-of-resturant.component';
import { AddrestroComponent } from './addrestro/addrestro.component';
import { UpdaterestroComponent } from './updaterestro/updaterestro.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchrestoComponent } from './searchresto/searchresto.component';
import { CrudComponent } from './crud/crud.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveDirective,
    ListOfResturantComponent,
    AddrestroComponent,
    UpdaterestroComponent,
    LoginComponent,
    RegisterComponent,
    SearchrestoComponent,
    CrudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

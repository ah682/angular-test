import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeComponent } from './employee/employee.component';
import { DirectivesComponent } from './directives/directives.component';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { EmployeesComponent } from './employees/employees.component';
import { TodosComponent } from './todos/todos.component';
import { EmpformComponent } from './empform/empform.component';
import { ButtonComponent } from './button/button.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ChildComponent } from './lifecycle/child.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeComponent,
    DirectivesComponent,
    CountryComponent,
    StateComponent,
    EmployeesComponent,
    TodosComponent,
    EmpformComponent,
    ButtonComponent,
    LifecycleComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

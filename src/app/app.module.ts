import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { SearchstudComponent } from './searchstud/searchstud.component';

const routes:Routes=[
  {
    path:"",component:AddstudentComponent
  },
  {
    path:"search",component:SearchstudComponent
  }]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddstudentComponent,
    SearchstudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

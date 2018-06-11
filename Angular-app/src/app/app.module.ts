import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './main-layout/home-page.component';
import { TeacherViewComponent } from './main-layout/teacher-view.component';
import { AdminComponent } from './main-layout/admin.component';
import { StudentViewComponent } from './main-layout/student-view.component';
import { NgbdCarouselConfig } from './main-layout/carsoulel.component';
import { LoginViewComponent } from './main-layout/login-view.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { CarouselModule } from 'angular4-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TeacherViewComponent,
    AdminComponent,
    StudentViewComponent,
    LoginViewComponent,
    NgbdCarouselConfig,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // NgbModule.forRoot(),
    // CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

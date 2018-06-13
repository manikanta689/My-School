import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from '../app/home/home.component';

import { HomePageComponent } from './main-layout/home-page.component';
import { TeacherViewComponent } from './main-layout/teacher-view.component';
import { AdminComponent } from './main-layout/admin.component';
import { StudentViewComponent } from './main-layout/student-view.component';
import { LoginViewComponent } from './main-layout/login-view.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    { path: 'home', component: HomeComponent
        // children: [
        //    {path: '', redirectTo: 'admin-view', pathMatch: 'prefix'},
        //    { path: 'admin-view', component: AdminComponent },
        //    { path: 'teacher-view', component: TeacherViewComponent },
        //    { path: 'admin', component: AdminComponent },
        //    { path: 'student-view', component: StudentViewComponent },
        //    { path: 'login-view', component: LoginViewComponent }
        //    ]
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
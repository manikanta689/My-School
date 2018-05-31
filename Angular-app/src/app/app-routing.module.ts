import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './main-layout/home-page.component';
import { TeacherViewComponent } from './main-layout/teacher-view.component';
import { AdminComponent } from './main-layout/admin.component';
import { StudentViewComponent } from './main-layout/student-view.component';
import { LoginViewComponent } from './main-layout/login-view.component';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },
    { path: 'home', component: HomePageComponent,
        children: [
           {path: '', redirectTo: 'admin-view', pathMatch: 'prefix'},
           { path: 'admin-view', component: AdminComponent },
           { path: 'teacher-view', component: TeacherViewComponent },
           { path: 'admin', component: AdminComponent },
           { path: 'student-view', component: StudentViewComponent },
           { path: 'login-view', component: LoginViewComponent }
           ]
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
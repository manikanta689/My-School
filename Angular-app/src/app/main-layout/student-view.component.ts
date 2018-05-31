import {Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'student-view',
  templateUrl: './student-view-component.html',
  styleUrls: ['./common.css']
})

@Injectable()
export class StudentViewComponent implements OnInit{
    title = 'app';
    students: Student[];
    newStudent: Student = new Student();

  ngOnInit() {
      this.retrieveStudents();
  }

  constructor(private httpClient: HttpClient ){ 
      
  }
  

  serverCall() : Observable<Student[]> {
      return this.httpClient.get<Student[]>("http://localhost:8080/student/getStudents");
  }

  retrieveStudents() : void{
      this.serverCall().subscribe(results => this.students = results);
  }

  saveStudent(student : Student) : void{
      const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'my-auth-token'
        })
        };
      this.httpClient.post<Student>("http://localhost:8080/student/saveStudent",JSON.stringify(student),httpOptions).subscribe(result =>this.students.push(result));
      this.newStudent = new Student();
  }

  deleteStudent(student : Student) : void{
       const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'my-auth-token'
        })
        };
        const deleteUrl = "http://localhost:8080/student/deleteStudent/"+student.studentId;
      this.httpClient.delete(deleteUrl,httpOptions).subscribe(result =>this.students = this.students.filter(e=>e!==student));
  }
}


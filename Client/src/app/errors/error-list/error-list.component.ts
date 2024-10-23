import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { error } from 'console';
import e, { response } from 'express';

@Component({
  selector: 'app-error-list',
  standalone: true,
  imports: [],
  templateUrl: './error-list.component.html',
  styleUrl: './error-list.component.css'
})
export class ErrorListComponent {
  baseURL = 'https://localhost:7264/api/';

  private http = inject(HttpClient);

  validationErrors : string[] = [];

  get400Error(){
    this.http.get(this.baseURL + "Buggy/bad-request").subscribe({
      next : response => console.log(response),
      error: error=> console.log(error)
    })
  }

  get401Error(){
    this.http.get(this.baseURL + "Buggy/auth").subscribe({
      next : response => console.log(response),
      error: error=> console.log(error)
    })
  }

  get404Error(){
    this.http.get(this.baseURL + "Buggy/not-found").subscribe({
      next : response => console.log(response),
      error: error=> console.log(error)
    })
  }

  get500Error(){
    this.http.get(this.baseURL + "Buggy/server-error").subscribe({
      next : response => console.log(response),
      error: error=> console.log(error)
    })
  }

  get400ValidationError(){
    this.http.post(this.baseURL + "Account/register", {}).subscribe({
      next : response => console.log(response),
      error: error=>{
         console.log(error)
         this.validationErrors=error;
      }
    })
  }



}

import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { AccountsService } from '../Services/accounts.service';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'DatingApp';
  private accountService = inject(AccountsService);
   ngOnInit(): void {
    this.setCurrentUser()
  }

  setCurrentUser(){
    const currString = localStorage.getItem('user');
    if(!currString){
      return;
    }
    const user = JSON.parse(currString);
    this.accountService.currentUser.set(user);
  }
}

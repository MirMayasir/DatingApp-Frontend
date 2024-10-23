import { Component, inject } from '@angular/core';
import {FormsModule } from '@angular/forms'
import { AccountsService } from '../../Services/accounts.service';
import { Router } from '@angular/router';

import { faL } from '@fortawesome/free-solid-svg-icons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, BsDropdownModule, RouterLink, RouterLinkActive, TitleCasePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  accountServices = inject(AccountsService);
  private tostr = inject(ToastrService)
  private router   = inject(Router)
  model : any = {};

  Login() {
    this.accountServices.login(this.model).subscribe({
      next: () => {
        this.router.navigateByUrl('/members')
      },
      error: error => this.tostr.error(error.error)
    });
  }

  logout(){
    this.accountServices.logout();
    this.router.navigateByUrl('/')
  }
  

}

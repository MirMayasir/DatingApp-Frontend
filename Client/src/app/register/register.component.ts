import { Component,inject,input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountsService } from '../../Services/accounts.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  accountServices = inject(AccountsService);
  private toastr = inject(ToastrService)
  
  model : any = {};

  register (){
    this.accountServices.register(this.model).subscribe({
      next : response =>{
        console.log(response);
        this.cancel();
      },
      error: error => this.toastr.error(error.error)
    })
  }

  cancel(){
    console.log("cancelled");
  }

}

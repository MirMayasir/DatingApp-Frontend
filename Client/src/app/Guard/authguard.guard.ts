import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AccountsService } from '../../Services/accounts.service';
import { ToastrService } from 'ngx-toastr';
import { faL } from '@fortawesome/free-solid-svg-icons';

export const authguardGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountsService);
  const toastr = inject(ToastrService)

  if(accountService.currentUser()){
    return true;
  }
  else{
    toastr.error("you cannot pass!")
    return false;
  }
};

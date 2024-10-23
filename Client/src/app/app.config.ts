import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { errorInterceptor } from './Interceptor/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([errorInterceptor])),
    provideAnimations(),
    provideToastr({
      timeOut: 3000,                // Notification disappears after 3 seconds
      extendedTimeOut: 1000,        // Extra time if the user hovers over the notification
      closeButton: true,            // Show a close button to manually dismiss the notification
      progressBar: true,            // Display a progress bar to indicate the time remaining
      positionClass: 'toast-bottom-right', // Place the Toastr in the bottom-right corner
      preventDuplicates: true,      // Avoid showing duplicate notifications
      newestOnTop: true,            // Display the newest notifications on top
      tapToDismiss: true,           // Allow dismissing the notification on click
      
    })
    
    
    
  ]
};

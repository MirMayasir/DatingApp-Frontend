import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { authguardGuard } from './Guard/authguard.guard';
import { ErrorListComponent } from './errors/error-list/error-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';


export const routes: Routes = [
    {path: '' , component:HomeComponent},
    {path: 'members', component:MemberListComponent, canActivate : [authguardGuard]},
    {path: 'members/:id', component:MemberDetailsComponent, canActivate : [authguardGuard]},
    {path: 'lists', component:ListsComponent, canActivate : [authguardGuard]},
    {path: 'messages', component:MessagesComponent, canActivate : [authguardGuard]},
    {path: 'errors', component:ErrorListComponent},
    {path: 'not-found', component:NotFoundComponent},
    {path: 'server-error', component: ServerErrorComponent},
    {path: '**', component:HomeComponent, pathMatch :"full"},
    
];

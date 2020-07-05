import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {LogoutComponent} from './logout/logout.component';


const routes: Routes = [{path: '', redirectTo: '/login', pathMatch: 'full'},
                        {path: 'login', component: LoginComponent},
                        {path: 'welcome/:id', component: WelcomePageComponent},
                        {path: 'logout', component: LogoutComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

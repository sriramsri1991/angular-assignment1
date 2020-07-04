import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';


const routes: Routes = [{path: '', redirectTo: '/login', pathMatch: 'full'},
                        {path: 'login', component: LoginComponent},
                        {path: 'welcome', component: WelcomePageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

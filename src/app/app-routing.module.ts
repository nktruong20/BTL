import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './customer/component/layout/login/login.component';
import { LoginsComponent } from './logins/logins.component';
import { LogonComponent } from './logon/logon.component';
import { SignupsComponent } from './signups/signups.component';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./customer/customer.module').then((m)=>m.CustomerModule)},
  {path:'admin' ,canActivate:[AuthGuard],loadChildren:()=>import('./admin/admin.module').then((m)=>m.AdminModule)},
  {path:'logon',component:LogonComponent},
  {path:'logins',component:LoginsComponent},
  {path:'signups',component:SignupsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

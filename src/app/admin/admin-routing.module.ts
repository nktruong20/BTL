import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AddComponent } from './component/layout/add/add.component';
import { DetailComponent } from './component/layout/detail/detail.component';
import { MainComponent } from './component/layout/main/main.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,children:[
    {path:'',component:MainComponent},
    {path:'admin/detail/:id',component:DetailComponent},
    {path:'admin/add',component:AddComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

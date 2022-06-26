import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard2Component } from './component/dashboard2/dashboard2.component';
import { DetailEventComponent } from './component/layout/detail-event/detail-event.component';
import { DetailComponent } from './component/layout/detail/detail.component';
import { MainComponent } from './component/layout/main/main.component';
import { MenuComponent } from './component/layout/menu/menu.component';

const routes: Routes = [
  {path:'',component:Dashboard2Component,children:[
    {path:'',component:MenuComponent},
    {path:'product/:id',component:MainComponent},
    {path:'main',component:MainComponent},
    {path:'detailEvent/:id',component:DetailEventComponent},
    {path:'detail/:id',component:DetailComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

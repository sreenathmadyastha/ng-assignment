import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'orders',
    loadChildren: 'app/orders/orders.module#OrdersModule'
  },
  
  {
    path:'',
    redirectTo: '',
    loadChildren: 'app/orders/orders.module#OrdersModule',
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }

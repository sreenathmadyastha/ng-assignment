import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagesOrderComponent } from './images-order/images-order.component';

const routes: Routes = [
  {
    path:'DisplayImages',
    component: ImagesOrderComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from './product.component';
import {RouterModule} from '@angular/router';

const routes = [
  {
    path: '',
    component: ProductComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ProductComponent],
  declarations: [ProductComponent]
})
export class ProductModule {
}

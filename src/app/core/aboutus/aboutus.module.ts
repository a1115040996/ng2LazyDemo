import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutusComponent} from './aboutus.component';
import {RouterModule} from '@angular/router';

const routes = [
  {
    path: '',
    component: AboutusComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [AboutusComponent],
  declarations: [AboutusComponent]
})
export class AboutusModule { }

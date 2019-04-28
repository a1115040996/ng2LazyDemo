import {NgModule} from '@angular/core';
import {
  Routes, RouterModule
} from '@angular/router';
import {IndexComponent} from './core/index/index.component';
const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'aboutus',
    loadChildren: './core/aboutus/aboutus.module#AboutusModule'
  },
  {
    path: 'product',
    loadChildren: './core/product/product.module#ProductModule'
  },
  {
    path: '**', // 路由错误的时候 跳转首页
    redirectTo: ''
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

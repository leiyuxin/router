import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { Code404Component } from './code404/code404.component';
// 不要使用/ 开头
const routes: Routes = [
  { // 只有当path 为'' 才跳转是full的已有,prefix 前缀 指的是当path vlaue 以xx 开头就可以
    path: '', redirectTo: '/home', pathMatch: 'full'

  },
  {
    path: 'home', component: HomeComponent

  },
  {// 1.使其能够携带参数
    path: 'stock/:id', component: StockComponent
  },
  {path: '**', component: Code404Component

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

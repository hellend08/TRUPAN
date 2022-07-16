import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LayoutComponent } from './views/layout/layout.component';
import { LoginComponent } from './views/login/login.component';
import { RegistryComponent } from './views/registry/registry.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
        pathMatch: 'full'
      },
      {
        path: 'registro',
        component: RegistryComponent
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  }
  // {
  //   path: 'registro',
  //   component: RegistryComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ListempComponent } from './components/listemp/listemp.component';
import { UpdateempComponent } from './components/updateemp/updateemp.component';
import { AddempComponent } from './components/addemp/addemp.component';

const routes: Routes = [
  {path:'',redirectTo:"home-page",pathMatch:"full"},
  {path:"home-page",component:HomeComponent},
  {path:"login-page",component:LoginComponent},
  {path:"listemp-page",component:ListempComponent},
  {path:"updateemp-page/:id",component: UpdateempComponent},
  {path:"addemployee",component: AddempComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

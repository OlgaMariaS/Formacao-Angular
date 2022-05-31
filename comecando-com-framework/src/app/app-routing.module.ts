import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'home'},
  {path: 'home', loadChildren:()=> import('./home/home.module').then((modulo)=> modulo.HomeModule)},
];
// loadChildren -> vai acessar a função, para requisitar o modulo sobe demanda
//THEN -> resolve a promisse que vem de localChildren

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

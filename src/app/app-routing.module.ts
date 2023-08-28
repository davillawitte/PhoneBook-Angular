import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaiComponent } from './pages/pai/pai.component';

const routes: Routes = [
  {path: '', component: PaiComponent} // Rota inicial aponta para PaiComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

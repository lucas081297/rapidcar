import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AlugarComponent } from './pages/alugar/alugar.component';
import { AboutComponent } from './pages/about/about.component';
import { StoresComponent } from './pages/stores/stores.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'alugar', component: AlugarComponent},
  {path: 'about', component: AboutComponent},
  {path: 'stores', component: StoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

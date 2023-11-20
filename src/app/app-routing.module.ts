import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { SearchComponent } from './paginas/search/search.component';
import { SeuService } from './paginas/detalhes-filme/detalhes-filme.component';
import { LoguinComponent } from './paginas/login/loguin.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search', component:SearchComponent},
  {path:'movie/:id', component:SeuService},
  {path:'login', component:LoguinComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
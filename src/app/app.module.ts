import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { SearchComponent } from './paginas/search/search.component';
import { SeuService } from './paginas/detalhes-filme/detalhes-filme.component';
import { LoguinComponent } from './paginas/login/loguin.component';
import { NavbarComponent } from './componentes/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoguinComponent,
    SeuService,
    SearchComponent
  ],

  imports: [
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    SeuService
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }


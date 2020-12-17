import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PreciosComponent,
    ProtegidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
     // Import the module into the application, with configuration
     AuthModule.forRoot({
      domain: 'dev-9zzriw0e.us.auth0.com',
      clientId: 'iUvFKEngPTIZoSpCKhqqirxvnR2InuHw',
      cacheLocation:'localstorage' // guardar sesion en el local storage
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

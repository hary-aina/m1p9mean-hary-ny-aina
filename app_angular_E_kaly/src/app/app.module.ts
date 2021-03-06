import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './pages/Authentification/login/login.component';
import { InscriptionComponent } from './pages/Authentification/inscription/inscription.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgChartsModule } from 'ng2-charts';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { CommandeComponent } from './pages/commande/commande.component';
import { DetailCommandeComponent } from './pages/detail-commande/detail-commande.component';
import { LoginRestoComponent } from './pages/RestaurantBO/login-resto/login-resto.component';
import { NavbarRestoComponent } from './pages/RestaurantBO/navbar-resto/navbar-resto.component';
import { HomeRestoComponent } from './pages/RestaurantBO/home-resto/home-resto.component';
import { CommandeRestoComponent } from './pages/RestaurantBO/commande-resto/commande-resto.component';
import { LoginEkalyComponent } from './pages/EkalyBO/login-ekaly/login-ekaly.component';
import { NavbarEkalyComponent } from './pages/EkalyBO/navbar-ekaly/navbar-ekaly.component';
import { HomeEkalyComponent } from './pages/EkalyBO/home-ekaly/home-ekaly.component';
import { LoginLivreurComponent } from './pages/LivreurBO/login-livreur/login-livreur.component';
import { NavbarLivreurComponent } from './pages/LivreurBO/navbar-livreur/navbar-livreur.component';
import { HomeLivreurComponent } from './pages/LivreurBO/home-livreur/home-livreur.component';
import { LoaderComponent } from './pages/loader/loader.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpLoadInterceptor } from './interceptor/http-load.interceptor';
import { CommandeToDeliverComponent } from './pages/EkalyBO/commande-to-deliver/commande-to-deliver.component';
import { LivreurComponent } from './pages/EkalyBO/livreur/livreur.component';
import { DashboardRestoComponent } from './pages/RestaurantBO/dashboard-resto/dashboard-resto.component';
import { DashboardEkalyComponent } from './pages/EkalyBO/dashboard-ekaly/dashboard-ekaly.component';
import { FooterComponent } from './pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscriptionComponent,
    HomeComponent,
    NavbarComponent,
    CommandeComponent,
    DetailCommandeComponent,
    LoginRestoComponent,
    NavbarRestoComponent,
    HomeRestoComponent,
    CommandeRestoComponent,
    LoginEkalyComponent,
    NavbarEkalyComponent,
    HomeEkalyComponent,
    LoginLivreurComponent,
    NavbarLivreurComponent,
    HomeLivreurComponent,
    LoaderComponent,
    CommandeToDeliverComponent,
    LivreurComponent,
    DashboardRestoComponent,
    DashboardEkalyComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    DragDropModule,
    MatProgressSpinnerModule,
    NgChartsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoadInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

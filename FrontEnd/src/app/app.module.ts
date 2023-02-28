import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/layout/header/header.component';
import { SidebarComponent } from './dashboard/layout/sidebar/sidebar.component';
import { FooterComponent } from './dashboard/layout/footer/footer.component';
import { GestionclientComponent } from './dashboard/gestionclient/gestionclient.component';
import { GestiondepComponent } from './dashboard/gestiondep/gestiondep.component';
import { GestionempComponent } from './dashboard/gestionemp/gestionemp.component';
import { CreatedepComponent } from './dashboard/gestiondep/createdep/createdep.component';
import { ListdepComponent } from './dashboard/gestiondep/listdep/listdep.component';
import { EditdepComponent } from './dashboard/gestiondep/editdep/editdep.component';
import { CreateclientComponent } from './dashboard/gestionclient/createclient/createclient.component';
import { ListclientComponent } from './dashboard/gestionclient/listclient/listclient.component';
import { EditclientComponent } from './dashboard/gestionclient/editclient/editclient.component';
import { CreateempComponent } from './dashboard/gestionemp/createemp/createemp.component';
import { ListempComponent } from './dashboard/gestionemp/listemp/listemp.component';
import { EditempComponent } from './dashboard/gestionemp/editemp/editemp.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    GestionclientComponent,
    GestiondepComponent,
    GestionempComponent,
    CreatedepComponent,
    ListdepComponent,
    EditdepComponent,
    CreateclientComponent,
    ListclientComponent,
    EditclientComponent,
    CreateempComponent,
    ListempComponent,
    EditempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

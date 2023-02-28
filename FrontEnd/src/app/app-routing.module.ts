import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateclientComponent } from './dashboard/gestionclient/createclient/createclient.component';
import { EditclientComponent } from './dashboard/gestionclient/editclient/editclient.component';
import { GestionclientComponent } from './dashboard/gestionclient/gestionclient.component';
import { ListclientComponent } from './dashboard/gestionclient/listclient/listclient.component';
import { CreatedepComponent } from './dashboard/gestiondep/createdep/createdep.component';
import { EditdepComponent } from './dashboard/gestiondep/editdep/editdep.component';
import { GestiondepComponent } from './dashboard/gestiondep/gestiondep.component';
import { ListdepComponent } from './dashboard/gestiondep/listdep/listdep.component';
import { CreateempComponent } from './dashboard/gestionemp/createemp/createemp.component';
import { EditempComponent } from './dashboard/gestionemp/editemp/editemp.component';
import { GestionempComponent } from './dashboard/gestionemp/gestionemp.component';
import { ListempComponent } from './dashboard/gestionemp/listemp/listemp.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {path:'',redirectTo:'dashboard',pathMatch:'full'},

  { path: 'dashboard', canActivate: [ AuthGuard ] , component: DashboardComponent, children: [
    
      { path: '', redirectTo: 'gestiondepartment', pathMatch: 'full' },

      {path: 'gestiondepartment', component: GestiondepComponent, children: [
        
          {path:'',redirectTo:'list',pathMatch:'full'},
          { path: 'list', component: ListdepComponent },
          { path: 'create', component: CreatedepComponent },
          {path:'update/:id',component:EditdepComponent}
      ]},
      
    {
      path: 'gestionclient', component: GestionclientComponent, children: [
      
        { path:'',redirectTo	:'list',pathMatch:'full'},
        { path: 'list', component: ListclientComponent },
        { path:'create' , component: CreateclientComponent},
        { path:'update/:id',component:EditclientComponent}
      ] },
      {
        path: 'gestionemployee', component: GestionempComponent, children: [
        
          { path:'',redirectTo:'list',pathMatch:'full'},
          { path: 'list', component: ListempComponent },
          { path: 'create', component: CreateempComponent },
          { path:'update/:id',component:EditempComponent}
      ]}
  ] },
  
  { path: 'login', component: LoginComponent },
  
  { path: 'register', component: RegisterComponent },
  
  {path: '**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

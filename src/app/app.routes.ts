import { Routes } from '@angular/router';
import { CreateClientComponent } from './Components/create-client/create-client.component';
import { EditClientComponent } from './Components/edit-client/edit-client.component';
import { HomeComponent } from './Components/home/home.component';
import { ClientComponent } from './Components/GetAllClients/client.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-client', component: CreateClientComponent },
  { path: 'edit-client/:id', component: EditClientComponent },
];

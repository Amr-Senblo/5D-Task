import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router
import { IClient } from '../../../Models/IClient';
import { ClientService } from '../../Services/client.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent implements OnInit {
  clients: IClient[] = [];

  constructor(private clientService: ClientService, private router: Router) {} 

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.clientService.getAllClients().subscribe({
      next: (clients) => {
        console.log('Fetched clients:', clients);
        this.clients = clients;
      },
    });
  }

  deleteClient(id: number): void {
    this.clientService.deleteClient(id).subscribe(() => {
      // Remove the deleted client from the array
      this.clients = this.clients.filter((client) => client.id !== id);
    });
  }

  editClient(id: number): void {
    this.router.navigate(['/edit-client', id]); // Navigate to the edit page with the client ID as a parameter
  }
}

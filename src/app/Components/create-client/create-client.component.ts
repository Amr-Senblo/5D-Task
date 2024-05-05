import { Component } from '@angular/core';
import { IClient } from '../../../Models/IClient';
import { ClientService } from '../../Services/client.service';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-client',
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterModule],
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.css',
  providers: [ClientService],
})
export class CreateClientComponent {
  newClient: IClient = {
    id: 0,
    name: '',
    weight: 0,
    photo: '',
    dateOfBirth: new Date(),
  };

  constructor(private clientService: ClientService) {}

  onSubmit(clientForm: NgForm): void {
    if (clientForm.valid) {
      this.clientService.addClient(this.newClient).subscribe(
        () => {
          console.log('Client created successfully!');
        },
        (error) => {
          console.error('Error creating client:', error);
        }
      );
    } else {
      console.error('Form is invalid. Please fill in all required fields.');
    }
  }

  resetForm(clientForm: NgForm): void {
    clientForm.resetForm();
  }
}

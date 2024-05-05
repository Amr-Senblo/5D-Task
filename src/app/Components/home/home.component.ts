import { Component, OnInit } from '@angular/core';
import { IClient } from '../../../Models/IClient';
import { ClientService } from '../../Services/client.service';
import { ClientComponent } from '../GetAllClients/client.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [ClientComponent, RouterModule],
  providers: [ClientService],
})
export class HomeComponent implements OnInit {
  clients: IClient[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {}
}

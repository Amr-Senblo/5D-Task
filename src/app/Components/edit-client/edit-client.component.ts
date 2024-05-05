import { Component, OnInit } from '@angular/core';
import { IClient } from '../../../Models/IClient';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../Services/client.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css'],
  imports: [FormsModule, CommonModule, HttpClientModule],
  providers: [ClientService],
})
export class EditClientComponent implements OnInit {
  client: IClient = {} as IClient;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getClient();
  }

  getClient(): void {
    const paramMap = this.route.snapshot.paramMap;
    if (paramMap.has('id')) {
      const id = +paramMap.get('id')!;
      this.clientService
        .getOneClient(id)
        .subscribe((client) => (this.client = client));
    }
  }

  save(): void {
    this.clientService.updateClient(this.client).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IClient } from '../../Models/IClient';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private baseUrl = 'https://localhost:44341/api/clients';

  constructor(private http: HttpClient) {}

  getAllClients() {
    return this.http.get<IClient[]>(this.baseUrl);
  }

  getOneClient(id: number) {
    return this.http.get<IClient>(`${this.baseUrl}/${id}`);
  }

  addClient(client: IClient) {
    return this.http.post<IClient>(this.baseUrl, client);
  }

  updateClient(client: IClient) {
    return this.http.put<IClient>(`${this.baseUrl}/${client.id}`, client);
  }

  deleteClient(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

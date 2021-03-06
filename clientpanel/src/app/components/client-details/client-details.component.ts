import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Client } from '../../models/Client';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  id: string;
  client: Client;
  hasBalance: Boolean = false;
  showBalanceUpdateInput: Boolean = false;

  constructor(
    public clientService: ClientService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];

    // Get Client
    this.clientService.getClient(this.id).subscribe(client => {
      if(client.balance > 0) {
        this.hasBalance = true;
      }
      this.client = client;
    });
  }

  updateBalance(id: string) {
    // Update client
    this.clientService.updateClient(this.id, this.client);
    this.showBalanceUpdateInput = !this.showBalanceUpdateInput;
    this.router.navigate(['/client/' + this.id]);
  }

  onDeleteClick() {
    if(confirm('Are you sure you want to delete?')) {
      this.clientService.deleteClient(this.id);
      this.router.navigate(['/']);
    }
  }

}

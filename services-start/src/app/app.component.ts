import { Component, OnInit } from '@angular/core';
import { AccountsService } from './services/accounts.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /**
   * since AccountsService is instantiated here, there is no need to instantiate it on child components.
   * the instance is propogated to all child components. technically there is no need to register it as provider 
   * for child components but setting it as parameter to constructor and of course calling it is still needed.
   * we can remove registration here and register the service higher in the heirechy in the app.module.
   */
  // providers: [AccountsService]
})
export class AppComponent implements OnInit {
  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }
}

import { Component } from '@angular/core';
import { AccountsService } from '../services/accounts.services';
// service needs to be imported to the component consuming it's services.
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService] need to add the service to the component providers array.
  // in here it is commented out because we registered it in the app.module.
})
export class NewAccountComponent {

  // need to add the service as parameter in the component constructor.
  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe((status: string) => alert('New status: ' + status));
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // and finally call the service method we would like to use (i.e. consume the service).
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountsService } from './services/accounts.services';
import { LoggingService } from './services/logging.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  /**
   * registering AccountsService here will propogate it's instance to app.component and all child components.
   * this also allow for registering this service in other services (e.g. LoggingService).
   */
  // providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

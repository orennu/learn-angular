import { Injectable } from "@angular/core";

/**
 * service for re-using code cross components. 
 * a service is a normal TS class, no ng decorator needed.
 */
@Injectable({
    providedIn: 'root'
})
export class LoggingService {
    logStatusChange(status: string) {
        console.log('A server status changed, new status: ' + status);
    }
}
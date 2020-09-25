import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CounterService {

    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    logInactiveActions() {
        this.activeToInactiveCounter++;
        console.log('Inactive actions: ' + this.activeToInactiveCounter);
    }
    
    logActiveActions() {
        this.inactiveToActiveCounter++;
        console.log('Active actions: ' + this.inactiveToActiveCounter);
    }
}
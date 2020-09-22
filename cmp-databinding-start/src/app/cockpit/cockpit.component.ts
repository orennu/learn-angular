import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() // using Output decorator to allow listenning to this event from parent components
  serverCreated = new EventEmitter<{serverName: string, serverContent: string}>(); // using EventEmitter to create a custom event
  @Output('bpCreated') // using the Output decorator with alias
  blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) // using ViewChild decorator to get data from template local reference
                                                  // in our case #serverContentInput
  serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  
  /**
   * using local reference from template, here #serverNameInput which was passed as argument to both methods below
   * which in this case have HTMLInputElement parameter
   */
  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}

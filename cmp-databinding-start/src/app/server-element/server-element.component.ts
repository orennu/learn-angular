import { Component, ContentChild, ElementRef, Input, OnChanges, OnInit, AfterContentInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, AfterContentInit {

  @Input('srvElement') // using Input decorator for exposing this component property to parent components.
                      //also using alias srvElement to element property name
  element: {type: string, name: string, content: string};
  @ContentChild('contentParagraph', {static: true})
  paragraph: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    console.log("paragaraph content: " + this.paragraph.nativeElement.textContent);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log("paragaraph content: " + this.paragraph.nativeElement.textContent);
  }

}

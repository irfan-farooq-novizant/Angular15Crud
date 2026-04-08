import { Component } from '@angular/core';

@Component({
  selector: 'app-text-component',
  templateUrl: './text-component.component.html',
  styleUrls: ['./text-component.component.css']
})
export class TextComponentComponent {

  public value = 'title!';
  public description = 'This is a simple text component created in Angular. It demonstrates how to create and use a component in an Angular application. The component displays a title and a description, which can be customized as needed.';

  onClick() {
    console.log('Button clicked!');
  }
}

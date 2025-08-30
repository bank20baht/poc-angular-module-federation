import { Component, signal, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('host');

  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  // async ngAfterViewInit() {
  //   this.container.clear();
  //   const { Card } = await import('remote/CardComponent');
  //   const cardComponentRef = this.container.createComponent(Card);

  //   cardComponentRef.setInput('title', 'Text from Host Component from Remote');
  //   cardComponentRef.setInput('content', 'Microfrontend [Webpack5] ลองผิดลองถูกบน Angular 20 ของ Junior Dev');
  // }
}

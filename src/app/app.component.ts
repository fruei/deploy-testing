// import { AfterViewChecked, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })

// export class AppComponent implements AfterViewChecked{
//   title = 'frueiApp';

//   //  @ViewChildren('tlkio', {read: ElementRef}) message_bodyComp?:QueryList<ElementRef>

//   // constructor(private renderer: Renderer2, private host: ElementRef) {
//   // }

//   ngAfterViewChecked() {
//     // data-custom-css="http://localhost:4200/styles.css"
//     // document.getElementById("tlkio")?.setAttribute('data-custom-css','https://localhost:4200/styles.css')
//     console.log("DOM: ", document.getElementById("tlkio"));
//     // var myobj = document.getElementById("tlkio"); //NO FUNCIONA
//     // myobj?.remove();
//   }

//   // removeChild(){
//   //   this.renderer.removeChild(this.host.nativeElement, this.message_bodyComp?.first.nativeElement);
//   // }
// }
import { Component, OnInit } from '@angular/core';
import Pusher from 'pusher-js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  username?: string = 'username';
  message?: string = '';
  messages?: any[] = [];
  alerts?: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    Pusher.logToConsole = true;

    const pusher = new Pusher('a8c12f99d5e1e2f8d1c9', {
      cluster: 'us2',
    });

    const channel = pusher.subscribe('my-channel');
    channel.bind('my-event', (data : any) => {
      // this.messages.push(data);
      this.alerts = JSON.stringify(data);
    });
  }

  submit(): void {
    this.http
      .post('http://localhost:8000/api/messages', {
        username: this.username,
        message: 'echo sending message',
      })
      .subscribe(() => (this.message = ''));
  }
}

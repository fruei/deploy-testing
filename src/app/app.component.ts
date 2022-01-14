import { AfterViewChecked, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'frueiApp';

  // @ViewChildren('message_body', {read: ElementRef}) message_bodyComp?:QueryList<ElementRef>
  // @ViewChild('message_body') private draggableElement?: ElementRef;

  // constructor(private renderer: Renderer2, private host: ElementRef) {
  // }

  // ngAfterViewChecked() {
  //   console.log("DOM",document.getElementById("message"))
  //   // var myobj = document.getElementById("message");
  //   // myobj?.remove();
  // }

  // removeChild(){
  //   this.renderer.removeChild(this.host.nativeElement, this.message_bodyComp?.first.nativeElement);
  // }
  
  ngOnInit() {
    // this.renderer.removeChild(this.host.nativeElement,this.draggableElement?.nativeElement);
  }
}

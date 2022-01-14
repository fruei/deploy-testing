import { AfterViewChecked, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewChecked{
  title = 'frueiApp';

  //  @ViewChildren('tlkio', {read: ElementRef}) message_bodyComp?:QueryList<ElementRef>

  // constructor(private renderer: Renderer2, private host: ElementRef) {
  // }

  ngAfterViewChecked() {
    // data-custom-css="http://localhost:4200/styles.css"
    // document.getElementById("tlkio")?.setAttribute('data-custom-css','https://localhost:4200/styles.css')
    console.log("DOM: ", document.getElementById("tlkio"));
    // var myobj = document.getElementById("tlkio"); //NO FUNCIONA
    // myobj?.remove();
  }

  // removeChild(){
  //   this.renderer.removeChild(this.host.nativeElement, this.message_bodyComp?.first.nativeElement);
  // }
}

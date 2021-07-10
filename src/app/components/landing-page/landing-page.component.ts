import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as constants from '../../_shared/constants';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  public constants = constants;

  @ViewChild("cursor", { read: ElementRef }) cursor: ElementRef;
  public tempSelector:any;
  constructor(elem:ElementRef) { }

  ngOnInit() {

  }

  public ngAfterViewInit ():void
  {
    this.tempSelector = this.cursor.nativeElement;
    var timeout;

    //follow cursor on mousemove
    document.addEventListener("mousemove", (e) => {
      let x = e.pageX;
      let y = e.pageY;

      this.tempSelector.style.top = y + "px";
      this.tempSelector.style.left = x + "px";
      this.tempSelector.style.display = "block";

      //cursor effects when mouse stopped
      const mouseStopped = ()=>{
        if(this.tempSelector)
          this.tempSelector.style.display = "none";
      };

      clearTimeout(timeout);
      timeout = setTimeout(mouseStopped, 1000);
    });

    //cursor effects when mouseout
    document.addEventListener("mouseout", () => {
      if(this.tempSelector)
      this.tempSelector.style.display = "none";
    });
  }

}

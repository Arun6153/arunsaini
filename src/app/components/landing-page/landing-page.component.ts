import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as constants from '../../_shared/constants';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  public constants = constants;
  public activeOp:number = -1;

  // DIV FOR CURSOR REF
  @ViewChild("cursor", { read: ElementRef }) cursor: ElementRef;
  public aliasCursorSelector:any;

  // DIV FOR CURSOR REF
  @ViewChild("drag", { read: ElementRef }) drag: ElementRef;
  public itemDivDrag:any;
  public isClickedDragDiv:boolean = false

  constructor(elem:ElementRef) { }

  ngOnInit() {

  }

  public ngAfterViewInit ():void
  {
    this.aliasCursorSelector = this.cursor.nativeElement;
    this.itemDivDrag = this.drag.nativeElement;

    var timeout;

    //follow cursor on mousemove
    document.addEventListener("mousemove", (e) => {
      let x = e.pageX;
      let y = e.pageY;

      this.aliasCursorSelector.style.top = y + "px";
      this.aliasCursorSelector.style.left = x + "px";
      this.aliasCursorSelector.style.display = "block";

      if(this.isClickedDragDiv)
      {
        this.itemDivDrag.style.top = y+(-20) + "px";
        this.itemDivDrag.style.left = x + "px";
      }

      //cursor effects when mouse stopped
      const mouseStopped = ()=>{
        if(this.aliasCursorSelector)
          this.aliasCursorSelector.style.display = "none";
      };

      clearTimeout(timeout);
      timeout = setTimeout(mouseStopped, 1000);
    });

    //cursor effects when mouseout
    document.addEventListener("mouseout", () => {
      if(this.aliasCursorSelector)
      this.aliasCursorSelector.style.display = "none";
    });
  }

  public mouseOnAndOff(operation:number,isOn:boolean):void{

    this.activeOp = operation

    switch(operation)
    {
      case 1: {

        break;
      }
    }
  }
}

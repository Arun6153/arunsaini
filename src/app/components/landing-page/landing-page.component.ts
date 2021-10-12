import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as constants from '../../_shared/constants';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  titleOfFile = 'CV - Arun Saini';
  @ViewChild('pdfResume') pdfResume: ElementRef;

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

  public downloadAsPDF() {
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'assets/Arun Saini-CV_10-13-2021.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
    // let DATA = document.getElementById('pdfResume');

    // html2canvas(DATA).then(canvas => {
    //     const FILEURI = canvas.toDataURL('image/png')
    //     let PDF = new jsPDF('p','pt', [canvas.width+10, canvas.height]);
    //     PDF.addImage(FILEURI, 'JPEG', 0, 0, canvas.width, canvas.height)
    //     PDF.save('Arun Saini - CV.pdf');
    // });

  }
}

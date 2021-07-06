import { Component, OnInit } from '@angular/core';
import * as constants from '../../_shared/constants';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  public constants = constants;

  constructor() { }

  ngOnInit() {

  }

}

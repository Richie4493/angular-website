import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'ws-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let $mask = $('.ws_mask');
    setTimeout(() => {
      $mask.fadeOut('slow');
    }, 8000);
  }

}

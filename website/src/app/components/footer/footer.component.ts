import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ws-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  
  footerClosed : boolean = true;

  ngOnInit() {
  }

}

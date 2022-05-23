import { Component, OnInit } from '@angular/core';
import { faSkype } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faSkype = faSkype;
  faCorreo = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}

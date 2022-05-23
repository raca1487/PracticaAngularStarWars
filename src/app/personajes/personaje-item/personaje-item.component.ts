import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../models/personaje';
import { PersonajeImpl } from '../models/personaje-impl';

@Component({
  selector: 'app-personaje-item',
  templateUrl: './personaje-item.component.html',
  styleUrls: ['./personaje-item.component.css']
})
export class PersonajeItemComponent implements OnInit {
  @Input() personaje: Personaje = new PersonajeImpl('', '', '', '', '', '', '', '', '', []);
  genderMap: any = {
    'male': 'Macho',
    'female': 'Hembra',
    'n/a': ' Sin género'
  }

  constructor() { }

  ngOnInit(): void {
  }

}

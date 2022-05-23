import { Component, OnInit } from '@angular/core';
import { Personaje } from '../models/personaje';
import { PersonajeImpl } from '../models/personaje-impl';
import { PersonajeService } from '../service/personaje.service';

@Component({
  selector: 'app-personaje-form',
  templateUrl: './personaje-form.component.html',
  styleUrls: ['./personaje-form.component.css']
})
export class PersonajeFormComponent implements OnInit {
  personaje: Personaje = new PersonajeImpl('', '', '', '', '', '', '', '', '', []);

  constructor(private personajeService: PersonajeService) { }

  ngOnInit(): void {
  }

  create(): void {
    this.personajeService.create(this.personaje);
  }

}

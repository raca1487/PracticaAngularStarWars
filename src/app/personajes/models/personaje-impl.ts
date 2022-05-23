import { Personaje } from "./personaje";

export class PersonajeImpl implements Personaje {
  nombre: string = "";
  estatura: string = "";
  peso: string = "";
  colorPelo: string = "";
  colorPiel: string = "";
  colorOjos: string = "";
  fechaNac: string = "";
  genero: string = "";
  planeta: string = "";
  peliculas: any[] = [];

  constructor(name: any, height: any, mass: any, hair_color: any, skin_color: any, eye_color: any, birth_year: any, gender: any, planet: any, films: any[]) {}

  getIdMundo(url: string): string {
    url = url.slice(0, url.length - 1)
    return url.slice(url.lastIndexOf('/') + 1, url.length);
  }

}

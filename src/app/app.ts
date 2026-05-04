import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import filmsData from './data/films.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly films = signal(filmsData);
}

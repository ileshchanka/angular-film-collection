import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import filmsData from './data/films.json';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { Breadcrumbs } from './components/breadcrumbs/breadcrumbs';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Header, Breadcrumbs, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly films = signal(filmsData);
}

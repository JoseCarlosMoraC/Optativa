// src/app/app.ts
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
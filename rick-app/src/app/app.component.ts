// import { Character, Episodio } from './models';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Character, Episodio } from './models';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule,
    CommonModule,
    MatToolbarModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  searchControl = new FormControl('');
  characters$!: Observable<Character[]>;
  private selectedId$ = new Subject<number>();
  episodio$!: Observable<Episodio[]>;

  constructor() {
    console.log('RickService no AppComponent injetado!');
  }

}

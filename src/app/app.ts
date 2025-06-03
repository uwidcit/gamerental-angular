import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.css'],

})
export class App {
  protected title = 'gamerental';

  isLoggedIn = !!localStorage.getItem('userToken'); // Check if userToken exists

}

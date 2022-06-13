import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'practica-final';

  constructor(private router: Router) {

  }

  ngOnInit() {

  }

  productos() {
    this.router.navigate(['productos'])
  }

  ventas() {
    this.router.navigate(['ventas'])
  }
}

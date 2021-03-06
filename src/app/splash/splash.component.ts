import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css', '../../assets/styles/cover.css']
})
export class SplashComponent implements OnInit {

  token: String = localStorage.token;

  constructor(
    private title: TitleService
  ) { }

  ngOnInit() {
    this.title.setTitle('Energion | Welcome');
  }

}

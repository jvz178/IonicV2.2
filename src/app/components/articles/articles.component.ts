import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/interfaces/news';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  @Input() articles: News[] = [];


  constructor() { }

  ngOnInit() {}

}

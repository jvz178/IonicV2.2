import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/app/interfaces/news';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {

  @Input() article: News;
  @Input() i: number;

  constructor() { }

  ngOnInit() {}

}

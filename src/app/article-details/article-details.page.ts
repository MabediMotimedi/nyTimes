import { Article } from './../model/model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.page.html',
  styleUrls: ['./article-details.page.scss'],
})
export class ArticleDetailsPage implements OnInit {
  articleDetails: any;
  title: any;

  constructor(private route: ActivatedRoute, private router: Router,) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.articleDetails = this.router.getCurrentNavigation().extras.state;
      console.log("here", this.articleDetails);
    });
  }

}

import { PopoverComponent } from './../shared/components/popover/popover.component';
import { element } from 'protractor';
import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Article } from '../model/model';
import { DataService } from '../services/data.service';
import { LoadingController, PopoverController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  articles: any;
  noOfDays = 1;
  constructor(private data: DataService, public router: Router,
    private loadingController: LoadingController,
    public popoverController: PopoverController,
    private toastController: ToastController) {
    this.articles = [];
    this.getMostViewedArticles();
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }



  async getMostViewedArticles() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Loading news articles, use option button to change date',
      backdropDismiss: false

    });
    await loading.present();
    this.data.getMostViewedArticles(this.noOfDays).subscribe(result => {
      this.articles = result;
      loading.dismiss();
    }, err => {
      this.presentToast();
      loading.dismiss();
    })
  }


  getArticleDetailsById(id): void {
    let article = this.articles.results.filter((filtered: any) => filtered.id === id);
    const navigationExtras: NavigationExtras = {
      state: {
        articleDetails: article
      }
    };
    this.router.navigate(['article-details'], navigationExtras);
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    await popover.onDidDismiss().then((results) => {
      console.log('onDidDismiss resolved with role', results.data);
      this.noOfDays = results.data;
      this.getMostViewedArticles();
    });

  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Failed to load news articles, Try Again.',
      duration: 2000,
    });
    toast.present();
  }

  async articlesToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 7000,
    });
    toast.present();
  }

}

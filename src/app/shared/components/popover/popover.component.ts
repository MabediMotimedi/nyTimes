import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() { }


  async setOne() {
    const noOfDays: any = 1;
    await this.popoverController.dismiss(noOfDays);
  }

  async setAWeek() {
    const noOfDays: any = 7;
    await this.popoverController.dismiss(noOfDays);
  }

  async setAMonth() {
    const noOfDays: any = 30;
    await this.popoverController.dismiss(noOfDays);
  }

}

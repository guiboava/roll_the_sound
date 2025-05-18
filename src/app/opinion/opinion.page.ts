import { Component, OnInit } from '@angular/core';
import { Opinion } from './models/opinion.type';
import { OpinionService } from './services/opinion.service';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.page.html',
  styleUrls: ['./opinion.page.scss'],
  standalone: false,
})
export class OpinionPage implements OnInit {

  opinionlist: Opinion[] = [];

  getArray(n: number): number[] {
    return Array.from({ length: n });
  }

  constructor(
    private opinionService: OpinionService
  ) { }

  ionViewDidLeave(): void {
    console.log('ionViewDidLeave');
  }
  ionViewWillLeave(): void {
    console.log('ionViewWillLeave');
  }
  ionViewDidEnter(): void {
    console.log('ionViewDidEnter');
  }
  ionViewWillEnter(): void {
    console.log('ionViewWillEnter');
    this.opinionlist = this.opinionService.getList();
  }
  ngOnInit() {
  }

}

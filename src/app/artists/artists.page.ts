import { Component, OnInit } from '@angular/core';
import { Artist } from './models/artist.type';
import { ArtistsService } from './services/artists.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.page.html',
  styleUrls: ['./artists.page.scss'],
  standalone: false,
})
export class ArtistsPage implements OnInit {

  artistsList: Artist[] = [];

  constructor(
    private artistsService: ArtistsService,
    public sanitizer: DomSanitizer,
  ) {
  }

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
    this.artistsList = this.artistsService.getList().map(artist => ({
      ...artist,
      safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(artist.srcClip)
    }));
  }
  ngOnInit() {

  }

  

}

import { Component, OnInit } from '@angular/core';
import { Artist } from './models/artist.type';
import { ArtistsService } from './services/artists.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertController } from '@ionic/angular';

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
    private alertController: AlertController,
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
   ngOnInit() { }

  remove(artist: Artist) {
    this.alertController.create({
      header: 'Exclusão',
      message: `Confirma a exclusão do artista ${artist.name}?`,
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.artistsService.remove(artist);
            this.artistsList = this.artistsService.getList();
          }
        },
        'Não'
      ]
    }).then(alert => alert.present());
  }

  

}

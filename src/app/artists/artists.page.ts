import { Component, OnInit } from '@angular/core';
import { Artist } from './models/artist.type';
import { ArtistsService } from './services/artists.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertController, ToastController } from '@ionic/angular';

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
    private toastController: ToastController,
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

    this.artistsService.getList().subscribe({
      next: (response) => {
        this.artistsList = response;
      },
      error: (error) => {
        alert('Erro ao carregar lista de Artistas');
        console.error(error);
      }
    });
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
            this.artistsService.remove(artist).subscribe({
              next: (response) => {
                this.artistsList = this.artistsList.filter(a => a.id !== response.id);
                this.toastController.create({
                  message: `Artista ${artist.name} excluído com sucesso!`,
                  duration: 3000,
                  color: 'primary',
                  keyboardClose: true,
                }).then(toast => toast.present());
              },
              error: (error) => {
                alert('Erro ao excluir artista ' + artist.name);
                console.error(error);
              }
            });
          }
        },
        'Não'
      ]
    }).then(alert => alert.present());
  }

  getSafeUrl(url: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
  


}

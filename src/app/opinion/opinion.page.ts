import { Component, OnInit } from '@angular/core';
import { Opinion } from './models/opinion.type';
import { OpinionService } from './services/opinion.service';
import { AlertController, ToastController } from '@ionic/angular';

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
    private opinionService: OpinionService,
    private alertController: AlertController,
    private toastController: ToastController,
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

    this.opinionService.getList().subscribe({
      next: (response) => {
        this.opinionlist = response;
      },
      error: (error) => {
        alert('Erro ao carregar lista de opiniões');
        console.error(error);
      }
    });
  }
  ngOnInit() { }

  remove(opinion: Opinion) {
    this.alertController.create({
      header: 'Exclusão',
      message: `Confirma a exclusão da opinião de ${opinion.name}?`,
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.opinionService.remove(opinion).subscribe({
              next: (response) => {
                this.opinionlist = this.opinionlist.filter(O => O.id !== response.id);
                this.toastController.create({
                  message: `Opinião de  ${opinion.name} excluído com sucesso!`,
                  duration: 3000,
                  color: 'primary',
                  keyboardClose: true,
                }).then(toast => toast.present());
              },
              error: (error) => {
                alert('Erro ao excluir o jogo ' + opinion.name);
                console.error(error);
              }
            });
          }
        },
        'Não'
      ]
    }).then(alert => alert.present());
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { dateMask, maskitoElement, priceMask } from 'src/app/core/constants/mask.constants';
import { ApplicationValidators } from 'src/app/core/constants/url.validator';
import { ArtistsService } from '../services/artists.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-artists-form',
  templateUrl: './artists-form.component.html',
  styleUrls: ['./artists-form.component.scss'],
  standalone: false,
})
export class ArtistsFormComponent implements OnInit {

  dateMask = dateMask;
  priceMask = priceMask;
  maskitoElement = maskitoElement;

  artistForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]),
    image: new FormControl('', [Validators.required, ApplicationValidators.urlValidator]),
    band: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]),
    srcClip: new FormControl('', [Validators.required, ApplicationValidators.urlValidator]),
    about: new FormControl('', [Validators.required, Validators.minLength(0), Validators.maxLength(3000)]),
  });

  artistId!: number;

  constructor(
    private artistService: ArtistsService,
    private sanitizer: DomSanitizer,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
  ) {

    const artistId = this.activatedRoute.snapshot.params['artistsId'];
    if (artistId) {
      this.artistService.getById(artistId).subscribe({
        next: (artists) => {
          if (artists) {
            this.artistId = artistId;
            this.artistForm.patchValue(artists);
          }
        },
        error: (error) => {
          alert('Erro ao carregar o Artista com id ' + artistId)
          console.error(error);
        }
      });
    }
  }

  ngOnInit() {
  }



  hasError(field: string, error: string) {
    const formControl = this.artistForm.get(field);
    return formControl?.touched && formControl?.errors?.[error]
  }

  save() {
    let { value } = this.artistForm;
    this.artistService.save({
      ...value,
      id: this.artistId
 }).subscribe({
      next: () => {
        this.toastController.create({
          message: 'Artista salvo com sucesso!',
          duration: 3000,
        }).then(toast => toast.present());
        this.router.navigate(['/artists']);
      },
      error: (error) => {
        alert('Erro ao salvar o Artista ' + value.title + '!');
        console.error(error);
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { dateMask, maskitoElement, priceMask } from 'src/app/core/constants/mask.constants';
import { ApplicationValidators } from 'src/app/core/constants/url.validator';
import { ArtistsService } from '../services/artists.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private artistService: ArtistsService,
    private sanitizer: DomSanitizer,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {

    const artistId = parseInt(this.activatedRoute.snapshot.params['artistId']);
    const artist = this.artistService.getById(artistId);
    if (artist) {
      this.artistForm.patchValue(artist);
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
    console.log(value);
    this.artistService.add(value);
    this.router.navigate(['/artists'])
  }

  getSafeUrl(url: string | null) {
    return url ? this.sanitizer.bypassSecurityTrustResourceUrl(url) : '';
  }

}

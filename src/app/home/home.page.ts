import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  constructor() { }


  
  ngOnInit() {
    let pressedKeys = [];
    const secretCode = "yyz";

    document.addEventListener("keydown", (event) => {
      pressedKeys.push(event.key.toLowerCase());

      if (pressedKeys.length > secretCode.length) {
        pressedKeys.shift();
      }

      if (pressedKeys.join('') === secretCode) {
        ativarEasterEgg();
      }
    });

    function ativarEasterEgg() {
      const iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube.com/embed/ftVTWDrtrlc?autoplay=1';
      iframe.allow = 'autoplay'; 
      iframe.style.position = 'fixed';
      iframe.style.top = '50%';
      iframe.style.left = '50%';
      iframe.style.transform = 'translate(-50%, -50%)';
      iframe.style.width = '80vw';
      iframe.style.height = '45vw';
      iframe.style.zIndex = '9999';
      iframe.style.border = '5px solid red';
      iframe.style.borderRadius = '12px';
      iframe.style.boxShadow = '0 0 20px black';
      iframe.allowFullscreen = true;


      const closeButton = document.createElement('button');
      closeButton.innerText = 'Fechar';
      closeButton.style.position = 'fixed';
      closeButton.style.top = '10px';
      closeButton.style.right = '10px';
      closeButton.style.zIndex = '10000';
      closeButton.style.padding = '10px 20px';
      closeButton.style.fontSize = '16px';
      closeButton.style.background = 'black';
      closeButton.style.cursor = 'pointer';

      closeButton.addEventListener('click', () => {
        iframe.remove();
        closeButton.remove();
      });

      document.body.appendChild(iframe);
      document.body.appendChild(closeButton);
    }

  }

}
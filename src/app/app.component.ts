import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  scrollPos = 0;
  scrollButton = false;

  ngOnInit() {
    $(document).ready(() => {
      const $hamburger = $('#hamburger');
      const $hamburgerClose = $('#hamburger-close');
      const $hamburgerLinks = $('#hamburger-links');

      $(document).scroll(() => {
        this.scrollPos = $(window).scrollTop();
        if (this.scrollButton === false && this.scrollPos >= 300) {
          this.scrollButton = true;
          $('#scroll-to-top').animate({ bottom: '0' }, 160);
        }
        else if (this.scrollButton === true && this.scrollPos < 300) {
          this.scrollButton = false;
          $('#scroll-to-top').animate({ bottom: '-200px' }, 200);
        }
      });

      $hamburger.click(() => {
        $hamburgerLinks.animate({ right: '0' }, 300);
        $hamburgerClose.animate({ right: '5px' }, 100);

        $hamburgerClose.click((e) => {
          $hamburgerClose.animate({ right: '-325px' }, 100);
          $hamburgerLinks.animate({ right: '-320px' }, 300);

          $hamburgerClose.off();
        });
      });

    });

  }

  scrollToTop() {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  }
}

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
      $(document).scroll(() => {
        this.scrollPos = $(window).scrollTop();
        if (this.scrollButton === false && this.scrollPos >= 300) {
          this.scrollButton = true;
          $('#scroll-to-top').animate({ bottom: '0' }, 200);
        }
        else if (this.scrollButton === true && this.scrollPos < 300) {
          this.scrollButton = false;
          $('#scroll-to-top').animate({ bottom: '-200px' }, 200);
        }
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

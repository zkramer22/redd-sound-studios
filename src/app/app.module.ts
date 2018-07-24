import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { StudioComponent } from './studio/studio.component';
import { MediaComponent } from './media/media.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'studio', component: StudioComponent },
  { path: 'media', component: MediaComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudioComponent,
    MediaComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCbk-FBknW2fscbKkRvYpUzZPRwhve3_aw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { DiningComponent } from './dining/dining.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SpecialityComponent } from './speciality/speciality.component';

import { LocationComponent } from './location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MenuComponent,
    ContactComponent,
    HomeComponent,
    DiningComponent,
    ReviewsComponent,
    SpecialityComponent,

    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DiningComponent } from './dining/dining.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SpecialityComponent } from './speciality/speciality.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'menu',component:MenuComponent},
  {path: 'about',component:AboutComponent},
  {path: 'contact',component:ContactComponent},
  {path: 'dining',component:DiningComponent},
  {path: 'reviews',component:ReviewsComponent},
  {path: 'speciality',component:SpecialityComponent},
  {path: 'location',component:LocationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { LandingComponent } from './landing.component';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { GoogleMapsModule } from '@angular/google-maps';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: 'home',
        component: IndexComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'services',
        component: ServicesComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class LandingRoutingModule {}

@NgModule({
  declarations: [
    IndexComponent,
    ServicesComponent,
    ContactComponent,
    LandingComponent,
    GalleryComponent,
  ],
  imports: [
    CommonModule,
    // LandingRoutingModule,
    RouterModule,
    GoogleMapsModule,
  ],
  exports: [ContactComponent],
  providers: [],
})
export class LandingModule {}

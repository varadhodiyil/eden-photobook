import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LandingModule } from './landing/landing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PagesRoutingModule, LandingModule],
})
export class PagesModule {}

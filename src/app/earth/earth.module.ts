import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EarthComponent } from './earth.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  {
    path: '',
    component: EarthComponent,
  },
];

@NgModule({
  declarations: [EarthComponent],
  imports: [CommonModule, RouterModule.forChild(route)],
})
export class EarthModule {}

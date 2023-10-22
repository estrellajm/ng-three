import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CubeComponent } from './cube/cube.component';
import { ModelComponent } from './model/model.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./earth/earth.module').then((m) => m.EarthModule),
  },
  {
    path: 'cube',
    component: CubeComponent,
  },
  {
    path: 'model',
    component: ModelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KartagoTogetherPage } from './kartago-together.page';

const routes: Routes = [
  {
    path: '',
    component: KartagoTogetherPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KartagoTogetherPage]
})
export class KartagoTogetherPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KartagoAcademyPage } from './kartago-academy.page';

const routes: Routes = [
  {
    path: '',
    component: KartagoAcademyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KartagoAcademyPage]
})
export class KartagoAcademyPageModule {}

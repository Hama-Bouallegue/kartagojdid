import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {  path: 'home',
  loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'prof', loadChildren: './prof/prof.module#ProfPageModule' },
  { path: 'kartago-academy', loadChildren: './kartago-academy/kartago-academy.module#KartagoAcademyPageModule' },
  { path: 'kartago-together', loadChildren: './kartago-together/kartago-together.module#KartagoTogetherPageModule' },
  { path: 'inscription', loadChildren: './inscription/inscription.module#InscriptionPageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

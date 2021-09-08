import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 102],
  paramsInheritanceStrategy: 'always',
  initialNavigation: 'enabled'
};

const routes: Routes = [
  {
    path: '',
    redirectTo: '/style-guide',
    pathMatch: 'full'
  },
  {
    path: 'style-guide',
    loadChildren: () => import('./style-guide/style-guide.module').then(m => m.StyleGuideModule)
  },
  {
    path: 'u-start',
    loadChildren: () => import('./u-start/u-start.module').then(m => m.UStartModule)
  },
  { path: 'pre-checkin', loadChildren: () => import('./pre-checkin/pre-checkin.module').then(m => m.PreCheckinModule) },
  { path: 'checkin', loadChildren: () => import('./checkin/checkin.module').then(m => m.CheckinModule) },
  { path: 'forms', loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

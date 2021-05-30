import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UrlControlComponent } from '../app/url-control/url-control.component';
import { RedirectComponent } from '../app/redirect/redirect.component';

const routes: Routes = [
  { path: '', redirectTo: 'redirect', pathMatch: 'full' },
  { path: 'redirect', component: RedirectComponent },
  { path: 'setting', component: UrlControlComponent },
  { path: '**', redirectTo: 'redirect' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

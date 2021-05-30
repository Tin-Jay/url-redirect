import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UrlControlComponent } from './url-control/url-control.component';
import { RedirectComponent } from './redirect/redirect.component';
import { UrlService } from '../app/url.service';

@NgModule({
  declarations: [
    AppComponent,
    UrlControlComponent,
    RedirectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    UrlService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

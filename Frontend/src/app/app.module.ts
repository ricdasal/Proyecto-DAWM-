import { Router, RouterModule, Scroll } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SaldurSectionComponent } from './components/saldur-section/saldur-section.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NewsComponent } from './components/news/news.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { GeolocalizacionComponent } from './components/geolocalizacion/geolocalizacion.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';
import { ReportComponent } from './components/report/report.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SaldurSectionComponent,
    AboutUsComponent,
    NewsComponent,
    FooterComponent,
    ContactComponent,
    GeolocalizacionComponent,
    DashboardComponent,
    ReportComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(router: Router, viewportScroller: ViewportScroller) {
    viewportScroller.setOffset([0, 80]);
    router.events.pipe(filter(e => e instanceof Scroll)).subscribe((e: Scroll) => {
      if (e.anchor) {
        // anchor navigation
        /* setTimeout is the core line to solve the solution */
        setTimeout(() => {
          viewportScroller.scrollToAnchor(e.anchor);
        })
      } else if (e.position) {
        // backward navigation
        viewportScroller.scrollToPosition(e.position);
      } else {
        // forward navigation
        viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }

 }

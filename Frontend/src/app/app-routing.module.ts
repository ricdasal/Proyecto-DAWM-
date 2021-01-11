import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GeolocalizacionComponent } from './components/geolocalizacion/geolocalizacion.component';
import { SaldurSectionComponent } from './components/saldur-section/saldur-section.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: SaldurSectionComponent },
  { path: 'Contactenos', component: ContactComponent },
  { path: 'Ubicacion', component: GeolocalizacionComponent },
  { path: 'Dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

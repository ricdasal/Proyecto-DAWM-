import { ReportComponent } from './components/report/report.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GeolocalizacionComponent } from './components/geolocalizacion/geolocalizacion.component';
import { SaldurSectionComponent } from './components/saldur-section/saldur-section.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: SaldurSectionComponent },
  { path: 'Contactenos', component: ContactComponent },
  { path: 'Ubicacion', component: GeolocalizacionComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Reporte', component: ReportComponent },
  { path: 'Login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

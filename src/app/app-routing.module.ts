import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { OurproductComponent } from './components/ourproduct/ourproduct.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'ourproduct', component: OurproductComponent },
  { path: 'testimonial', component: TestimonialComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

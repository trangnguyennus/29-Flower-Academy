import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';
import { AboutComponent } from '../about/about.component';
import { ContactPageComponent } from '../contact-page/contact-page.component';
import { CoursesComponent } from '../courses/courses.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home'},
  { path: 'home', component: HomepageComponent},
  { path: 'courses', component: CoursesComponent},
  { path: 'registration-form',component: RegistrationFormComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactPageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomepageComponent,
                                  CoursesComponent,
                                  RegistrationFormComponent, 
                                  AboutComponent,
                                  ContactPageComponent
                                ]

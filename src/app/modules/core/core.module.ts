import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/pages/home/home.component';
import { PageNotFoundComponent } from './containers/pages/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { NavbarNavComponent } from './components/header/navbar/navbar-nav/navbar-nav.component';
import { NavbarItemComponent } from './components/header/navbar/navbar-nav/navbar-item/navbar-item.component';
import { NavbarBrandComponent } from './components/header/navbar/navbar-brand/navbar-brand.component';

@NgModule({
  declarations: [PageNotFoundComponent, HomeComponent, PageNotFoundComponent, HeaderComponent, FooterComponent, NavbarComponent, NavbarNavComponent, NavbarItemComponent, NavbarBrandComponent],
  exports: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CoreModule { }

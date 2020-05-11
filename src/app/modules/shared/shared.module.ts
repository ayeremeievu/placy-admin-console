import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadlineComponent } from './components/headline/headline.component';
import { LogoComponent } from './components/logo/logo.component';
import { LinkComponent } from './components/link/link.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [HeadlineComponent, LogoComponent, LinkComponent],
    exports: [HeadlineComponent, LogoComponent, LinkComponent],
    imports: [CommonModule, RouterModule]
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadlineComponent } from './components/headline/headline.component';
import { LogoComponent } from './components/logo/logo.component';
import { LinkComponent } from './components/link/link.component';
import { RouterModule } from '@angular/router';
import { LinkButtonComponent } from './components/link-button/link-button.component';
import { ResolveUrlPipe } from './pipes/resolve-url.pipe';
import { TitleComponent } from './components/title/title.component';

@NgModule({
    declarations: [
        HeadlineComponent,
        LogoComponent,
        LinkComponent,
        LinkButtonComponent,
        ResolveUrlPipe,
        TitleComponent
    ],
    exports: [HeadlineComponent, LogoComponent, LinkComponent, LinkButtonComponent, ResolveUrlPipe, TitleComponent],
    imports: [CommonModule, RouterModule]
})
export class SharedModule {}

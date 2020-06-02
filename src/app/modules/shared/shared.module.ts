import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeadlineComponent } from './components/headline/headline.component';
import { LogoComponent } from './components/logo/logo.component';
import { LinkComponent } from './components/link/link.component';
import { RouterModule } from '@angular/router';
import { LinkButtonComponent } from './components/link-button/link-button.component';
import { ResolveUrlPipe } from './pipes/resolve-url.pipe';
import { TitleComponent } from './components/title/title.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
    declarations: [
        HeadlineComponent,
        LogoComponent,
        LinkComponent,
        LinkButtonComponent,
        ResolveUrlPipe,
        TitleComponent,
        InputComponent
    ],
    exports: [HeadlineComponent, LogoComponent, LinkComponent, LinkButtonComponent, ResolveUrlPipe, TitleComponent, InputComponent],
    imports: [CommonModule, RouterModule, FormsModule]
})
export class SharedModule { }

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
import { ButtonComponent } from './components/button/button.component';
import { AlertComponent } from './components/alert/alert/alert.component';
import { AlertService } from './components/alert/alert.service';

@NgModule({
    declarations: [
        HeadlineComponent,
        LogoComponent,
        LinkComponent,
        LinkButtonComponent,
        ResolveUrlPipe,
        TitleComponent,
        InputComponent,
        ButtonComponent,
        AlertComponent
    ],
    exports: [HeadlineComponent, LogoComponent, LinkComponent, LinkButtonComponent, ResolveUrlPipe, TitleComponent, InputComponent, ButtonComponent, AlertComponent],
    imports: [CommonModule, RouterModule, FormsModule],
    providers: [AlertService]
})
export class SharedModule { }

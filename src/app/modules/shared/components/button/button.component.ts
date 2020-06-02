import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
    @Input()
    buttonText: string;

    @Output()
    onClickEmitter: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    onClick() {
        this.onClickEmitter.emit();
    }
}

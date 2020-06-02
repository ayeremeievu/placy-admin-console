import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
    @Input()
    defaultValue: string;

    @Input()
    text: string;

    @Input()
    placeholder: string;

    @Output()
    valueChanged: EventEmitter<string> = new EventEmitter<string>();

    value: string;

    constructor() { }

    ngOnInit() {
        if (this.defaultValue) {
            this.value = this.defaultValue;
            this.valueChanged.emit(this.value);
        }
    }

    onBlur(event) {
        this.valueChanged.emit(this.value);
    }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-headline',
    templateUrl: './headline.component.html',
    styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent implements OnInit {
    @Input()
    class: string;

    @Input()
    variant: string;

    @Input()
    public titleValue: string;

    constructor() {}

    ngOnInit() {}
}

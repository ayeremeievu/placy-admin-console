import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-link',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
    @Input()
    linkText: string;

    @Input()
    linkUrl: string;

    @Input()
    linkTextColorClass: string;

    constructor() {}

    ngOnInit() {}
}

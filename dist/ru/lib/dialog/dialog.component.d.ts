import { OnInit, ElementRef, EventEmitter } from '@angular/core';
export declare class DialogComponent implements OnInit {
    dialog: ElementRef<HTMLDialogElement>;
    title: string;
    width: string;
    show: boolean;
    maskClose: boolean;
    showChange: EventEmitter<any>;
    constructor();
    hide(): void;
    ngOnInit(): void;
}

import { OnInit, EventEmitter } from '@angular/core';
export declare class InputComponent implements OnInit {
    prefixIcon: string;
    suffixIcon: string;
    suffixIconClick: EventEmitter<any>;
    prefixIconClick: EventEmitter<any>;
    model: string;
    modelChange: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    handleInput(val: any): void;
}

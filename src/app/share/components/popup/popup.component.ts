import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.css']
})
export class PopupComponent {
    @Input() title: string = 'Popup Title';
    @Input() show: boolean = false;
    @Output() close = new EventEmitter<void>();

    closePopup() {
        this.close.emit();
    }
}
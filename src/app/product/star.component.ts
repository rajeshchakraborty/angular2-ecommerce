import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector: 'ai-star',
    templateUrl:'./star.component.html',
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth : number;
    @Output() ratingClicked: EventEmitter<string> = 
        new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }

    OnClick() : void {
        this.ratingClicked.emit(`The Rating ${this.rating} was clicked! `)
    }
}
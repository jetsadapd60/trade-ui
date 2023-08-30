import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from "@angular/core";

@Directive({
    selector: '[StatusColumnStyle]'
})
export class StatusColumnBgStyleDirective implements OnChanges {

    @Input('StatusColumnStyle') tradeStatus!: string;

    constructor(private el: ElementRef) {}
    
    ngOnChanges(changes: SimpleChanges): void {

        switch(this.tradeStatus) {

            case 'Waiting': this.setStyleBg('#FFF9DF', '#d4b256', this.tradeStatus); break;

            case 'Matched': this.setStyleBg('#EAF2FF', '#4e73aa', this.tradeStatus); break;

            default: this.setStyleBg('#EFB5CC',' #ea506c', this.tradeStatus)
        };
        
    }

    private setStyleBg(bgColr: string, color: string, text: string) {
        
        this.el.nativeElement.style.backgroundColor = bgColr;
        this.el.nativeElement.style.color = color;
        this.el.nativeElement.style.borderRadius = '8px';
        this.el.nativeElement.innerHTML = text;

    }
}
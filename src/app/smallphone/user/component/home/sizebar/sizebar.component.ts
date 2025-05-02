import { AfterViewInit, Component, ViewChild, ElementRef } from "@angular/core";
import { log } from "console";
import { title } from "process";

@Component({
    selector: 'sizebar',
    templateUrl: './sizebar.component.html',
    styleUrls: ['./sizebar.component.css']
})

export class SizebarComponent implements AfterViewInit{

    tabs = [
        {title: 'iPhone 12 ProMax', img: 'assets/12-pro-max_1720085649.webp'},
        {title: 'Xiaomi 14Ultra', img: 'assets/xiaomi-14-ultra-copy_1720172122.webp'},
        {title: 'iPhone 15 ProMax', img: 'assets/iphone-15-pro-max-copy_1719540778.webp'},
        {title: 'SamSung', img: 'assets/20_1719391712.webp'},
        {title: 'Redmi Notre 13', img: 'assets/note-13-pro-blue-moi_1719203364.webp'}

    ]

    activeIndex = 0;
    @ViewChild('line', { static: false }) line!: ElementRef<HTMLDivElement>;
    @ViewChild('tabContainer', { static: false }) tabContainer!: ElementRef<HTMLDivElement>;

    ngAfterViewInit(): void {
        this.updatePosition();
    }
    
    selectTab(index: number) {
        this.activeIndex = index;
        console.log(index);
        this.updatePosition();
    }

    private updatePosition(): void {
        
        const tabElements = this.tabContainer.nativeElement.querySelectorAll('.tab-item');
        const activeTab = tabElements[this.activeIndex] as HTMLDivElement;

        if(activeTab && this.line ){
            this.line.nativeElement.style.left = `${activeTab.offsetLeft}px`;
            this.line.nativeElement.style.width = `${activeTab.offsetWidth}px`;
        }
    }
    
}


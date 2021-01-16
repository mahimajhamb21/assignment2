import { Directive,ElementRef, HostListener, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective implements OnInit {


  constructor(private elRef:ElementRef,private renderer:Renderer2) { }
    ngOnInit(){}

  @HostListener('mouseenter') mouseHover(EventData:Event){
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','goldenrod');
  }

  @HostListener('mouseleave') mouseLeave(EventData:Event){
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','black');
  }

}

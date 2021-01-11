import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form: ElementRef;
  @ViewChild('seachtext') input: ElementRef;

  constructor( private renderer : Renderer2 ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.renderer.setStyle(this.input.nativeElement, 'display', 'none');
  }

  clickEvent() {
    this.renderer.setStyle(this.input.nativeElement, 'display', '');
  }

}

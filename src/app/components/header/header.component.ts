import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent {
  @Input() public title: string = '';
  @Output() public menuClick: EventEmitter<void> = new EventEmitter<void>();
}

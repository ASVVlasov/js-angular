import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.less'],
})
export class SidenavComponent {
	@Input() opened: boolean = true;
	@Output() openedChange: EventEmitter<boolean> = new EventEmitter<boolean>();
}

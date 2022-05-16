import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public title: string = 'Интернет магазин';

  @ViewChild(SidenavComponent, { static: true }) private sideNavComponent!: SidenavComponent;

  public onMenuClick(): void {
    this.sideNavComponent.onToggleSideNav();
  }
}

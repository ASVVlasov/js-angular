import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit {
  @ViewChild('navListContainer', {
    read: ViewContainerRef,
    static: true,
  })
  private navListContainer!: ViewContainerRef;
  @ViewChild(MatDrawer, { static: true })
  private matDrawer!: MatDrawer;
  @ContentChild('navList', { static: true })
  private navListTemplate!: TemplateRef<unknown>;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.viewNavListTemplate();
  }

  public onToggleSideNav(): void {
    this.matDrawer.toggle();
    this.cdr.markForCheck();
  }

  private viewNavListTemplate(): void {
    this.navListContainer.createEmbeddedView(this.navListTemplate);
  }
}

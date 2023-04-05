import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IconModule } from '@coreui/icons-angular';

import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarService } from './sidebar.service';
import { SidebarBrandComponent } from './sidebar-brand/sidebar-brand.component';
import { SidebarToggleDirective } from './sidebar-toggle/sidebar-toggle.directive';
import { SidebarTogglerComponent } from './sidebar-toggler/sidebar-toggler.component';
import { SidebarHeaderComponent } from './sidebar-header/sidebar-header.component';
import { SidebarFooterComponent } from './sidebar-footer/sidebar-footer.component';
import { SidebarNavGroupService } from './sidebar-nav/sidebar-nav-group.service';

import { SharedModule } from '../shared';

import {
  SidebarNavBadgePipe,
  SidebarNavComponent,
  SidebarNavDividerComponent,
  SidebarNavGroupComponent,
  SidebarNavHelper,
  SidebarNavIconPipe,
  SidebarNavItemClassPipe,
  SidebarNavLabelComponent,
  SidebarNavLinkComponent,
  SidebarNavLinkContentComponent,
  SidebarNavLinkPipe,
  SidebarNavTitleComponent
} from './sidebar-nav';



@NgModule({
  declarations: [
    // SidebarNavGroupToggleDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    SidebarComponent,
    SidebarBrandComponent,
    SidebarFooterComponent,
    SidebarHeaderComponent,
    SidebarNavComponent,
    SidebarNavBadgePipe,
    SidebarNavDividerComponent,
    SidebarNavGroupComponent,
    SidebarNavIconPipe,
    SidebarNavItemClassPipe,
    SidebarNavLabelComponent,
    SidebarNavLinkComponent,
    SidebarNavLinkContentComponent,
    SidebarNavLinkPipe,
    SidebarNavTitleComponent,
    SidebarToggleDirective,
    SidebarTogglerComponent,
    IconModule
  ],
  exports: [
    SidebarComponent,
    SidebarToggleDirective,
    SidebarTogglerComponent,
    SidebarBrandComponent,
    SidebarNavComponent,
    SidebarHeaderComponent,
    SidebarFooterComponent,
  ],
  providers: [
    SidebarService,
    SidebarNavHelper,
    SidebarNavGroupService
  ],
})
export class SidebarModule { }

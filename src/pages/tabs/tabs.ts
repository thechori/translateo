import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';

import { ItemsPage } from '../items/items';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ItemsPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}

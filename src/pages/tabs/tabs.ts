import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ItemsPage } from '../items/items';
import { SettingsPage } from '../settings/settings';

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

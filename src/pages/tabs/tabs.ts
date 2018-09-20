import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MasPage } from './../mas/mas';
import { PendientesPage } from './../pendientes/pendientes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = PendientesPage;
  tab5Root = MasPage;
  
  constructor() {

  }
}
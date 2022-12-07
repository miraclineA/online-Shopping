import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sideheader',
  templateUrl: './sideheader.component.html',
  styleUrls: ['./sideheader.component.scss']
})
export class SideheaderComponent {
  showFiller = false;
}
 
import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

    constructor(
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer
    ) {
        this.matIconRegistry.addSvgIcon('address-book', this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icon-address-book.svg'))
        this.matIconRegistry.addSvgIcon('overview', this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icon-overview.svg'))
        this.matIconRegistry.addSvgIcon('map', this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icon-map.svg'))
        this.matIconRegistry.addSvgIcon('html', this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icon-html.svg'))
    }

}

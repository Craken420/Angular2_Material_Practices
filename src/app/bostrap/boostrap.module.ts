import { NgModule } from '@angular/core';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

const BoostrapModules = [
    NgbCarouselModule
];

@NgModule({
  declarations: [],
  imports: [ BoostrapModules, ],
  exports: [ BoostrapModules ]
})
export class BoostrapModule { }

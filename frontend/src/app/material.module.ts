
import { NgModule } from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [
      MatButtonModule,
      NoopAnimationsModule,
      MatCardModule,
      MatFormFieldModule,
  ],
  exports: [
      MatButtonModule,
      NoopAnimationsModule,
      MatCardModule,
      MatFormFieldModule,
    ]
})
export class MaterialModule { }

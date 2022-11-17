import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { AnimationWrapperComponent } from './animation-wrapper.component';
import { AppComponent } from './app.component';

export function animationExtension(field: FormlyFieldConfig) {
  if (field.wrappers && field.wrappers.includes('animation')) {
    return;
  }

  field.wrappers = ['animation', ...(field.wrappers || [])];
}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      extras: { lazyRender: false },
      wrappers: [{ name: 'animation', component: AnimationWrapperComponent }],
      extensions: [{ name: 'animation', extension: { onPopulate: animationExtension } }],
    }),
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent, AnimationWrapperComponent],
})
export class AppModule {}


/**  Copyright 2021 Formly. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://github.com/ngx-formly/ngx-formly/blob/main/LICENSE */
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
  // formly-form: disable default hide behavior
  styles: [
    `
      ::ng-deep formly-field {
        display: block !important;
      }
    `,
  ],
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'civilite',
      type: 'select',
      props: {
        label: 'Civilité',
        options: [
          { label: 'Mr', value: 'mr' },
          { label: 'Mme', value: 'mme' },
        ],
      },
    },
    {
      key: 'nom',
      type: 'input',
      defaultValue: 'This is a default value',
      props: {
        label: 'Nom de naissance',
        multiple: true,
        templateOptions: {
          label: 'Nom',
          placeholder: 'Saisissez votre nom',
          required: true,
        },
      },
    },
    {
      key: 'nom_usage',
      type: 'input',
      props: {
        label: "Nom d'usage",
        multiple: true,
        templateOptions: {
          label: 'Nom',
          placeholder: 'Saisissez votre nom',
          required: true,
        },
      },
    },
    {
      key: 'firstName',
      type: 'input',
      props: {
        label: 'Prénom',
        placeholder:
          'Type in here to display the hidden field using slideInOut animation',
      },
    },
    {
      key: 'lastname',
      type: 'input',
      props: {
        label: 'Last name',
      },
      expressions: {
        hide: ({ model }) => !model.firstName,
      },
    },
  ];

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}

/**  Copyright 2021 Formly. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://github.com/ngx-formly/ngx-formly/blob/main/LICENSE */

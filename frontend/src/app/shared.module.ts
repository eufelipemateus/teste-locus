import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http'
import { InterceptorsModule } from './Interceptors'
import { CurrencyMaskModule } from 'ng2-currency-mask'
import { ComponentsModule } from './components/components.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    InterceptorsModule,
    CurrencyMaskModule,
    ComponentsModule
  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    InterceptorsModule,
    CurrencyMaskModule,
    ComponentsModule
  ]
})
export class SharedModule { }

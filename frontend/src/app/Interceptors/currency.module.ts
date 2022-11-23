import { LOCALE_ID, DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core'
import localePt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common'
import { CustomCurrencyMaskConfig } from './currency_options'
import { CURRENCY_MASK_CONFIG } from 'ng2-currency-mask'

registerLocaleData(localePt, 'pt')

@NgModule({
  declarations: [
    /* ... */
  ],
  imports: [
    /* ... */
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },

    /* if you don't provide the currency symbol in the pipe,
        this is going to be the default symbol (R$) ... */
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    },
    {
      provide: CURRENCY_MASK_CONFIG,
      useValue: CustomCurrencyMaskConfig
    }
  ]
})

export class CurrencyModule {}

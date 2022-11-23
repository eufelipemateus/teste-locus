import { ErrorHandler, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import {
  ApiHttpInterceptorInterceptor,
  // ErrorsHandler
} from '@Interceptors/index'
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar'
import { CurrencyModule } from './currency.module'
import { MAT_DATE_LOCALE } from '@angular/material/core'
// import { CURRENCY_MASK_CONFIG } from 'ng2-currency-mask'
// import { CustomCurrencyMaskConfig } from './currency_options'
// import { NG_VALUE_ACCESSOR } from '@angular/forms'
// import { TagsListComponent } from '../components/tags-list/tags-list.component'

@NgModule({
  declarations: [],
  imports: [CommonModule, CurrencyModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiHttpInterceptorInterceptor,
      multi: true
    },
   /* {
      provide: ErrorHandler,
      useClass: ErrorsHandler
    },*/
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: { duration: 3000 }
    }, /*  {      provide: NG_VALUE_ACCESSOR,      multi: true,      useExisting: forwardRef(() => TagsListComponent)
    } */

    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ]
})
export class InterceptorsModule {}

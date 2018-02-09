import { Component } from '@angular/core';
import {ProductService} from './product/product.service'

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [ProductService]
})
export class AppComponent {
  title = 'Product List Page';
}

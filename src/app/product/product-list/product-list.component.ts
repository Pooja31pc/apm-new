import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {

  constructor(private productService : ProductService) {}

  pageTitle: string = 'Product List';

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;

    // this.listFilter = 'garden';
  }
  
  displayedColumns: string[] = ['image', 'product', 'code', 'available', 'price', 'rating'];

  isButtonClicked : boolean = false;

  private listFilterWord : string = '';
  
  public get listFilter() : string {
    return this.listFilterWord;
  }
  
  public set listFilter(value : string) {
    this.listFilterWord = value;
    this.filteredProducts = this.performFilter(value);
  }
  
  filteredProducts: IProduct[] = [];

  products : IProduct[] = [];

  onShowImageClick() : any {
    this.isButtonClicked = !this.isButtonClicked;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }

  onRatingClicked(message: string) : void {
    this.pageTitle = 'Product List: ' + message;
  }

}


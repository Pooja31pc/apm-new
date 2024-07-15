import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {

  constructor() {}

  pageTitle: string = 'Product List';

  ngOnInit(): void {
    this.listFilter = 'garden';
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

  products : IProduct[] = [
    {
      imageUrl: "assets/images/garden_cart.jpg",
      productName: "Garden Cart",
      productCode: "GDN-0023",
      releaseDate: "January 23, 2024",
      price: 120.99,
      starRating: 4.5,
    },
    {
      imageUrl: "assets/images/hammer.jpg",
      productName: "Hammer",
      productCode: "HAM-0024",
      releaseDate: "February 20, 2024",
      price: 89.50,
      starRating: 3.0,
    },
    {
      imageUrl: "assets/images/flower_pot.jpg",
      productName: "Flower Pot",
      productCode: "FLO-0025",
      releaseDate: "March 13, 2024",
      price: 45.00,
      starRating: 2.0,
    },
    {
      imageUrl: "assets/images/vermicompost.jpg",
      productName: "Vermicompost",
      productCode: "VER-0025",
      releaseDate: "March 23, 2024",
      price: 100.00,
      starRating: 4.2,
    }
  ]

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


import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {

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

  // message : string = '';

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
      starRating: 4.0,
    },
    {
      imageUrl: "assets/images/flower_pot.jpg",
      productName: "Flower Pot",
      productCode: "FLO-0025",
      releaseDate: "March 13, 2024",
      price: 45.00,
      starRating: 4.5,
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

  // onRatingClickrd(message: string): void {
  //   this.message = message;
  // }
}


// products : any[] = [
//   {
//     productId: 2,
//     productName: "Garden Cart",
//     productCode: "GDN-0023",
//     releaseDate: "January 23, 2024",
//     description: "This is a dummy product 1",
//     price: 120.99,
//     starRating: 4.5,
//     imageUrl: "assets/images/"
//   },
//   {
//     productId: 3,
//     productName: "Hammer",
//     productCode: "HAM-0024",
//     releaseDate: "February 20, 2024",
//     description: "This is a dummy product 2",
//     price: 89.50,
//     starRating: 4.0,
//     imageUrl: "assets/images/"
//   },
//   {
//     productId: 4,
//     productName: "Flower Pot",
//     productCode: "FLO-0025",
//     releaseDate: "March 13, 2024",
//     description: "This is a dummy product 3",
//     price: 45.00,
//     starRating: 4.5,
//     imageUrl: "assets/images/"
//   },
//   {
//     productId: 5,
//     productName: "Vermicompost",
//     productCode: "VER-0025",
//     releaseDate: "March 23, 2024",
//     description: "This is a dummy product 4",
//     price: 100.00,
//     starRating: 4.2,
//     imageUrl: "assets/images/"
//   }
// ]
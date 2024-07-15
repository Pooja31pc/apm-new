import { Injectable } from "@angular/core";
import { IProduct } from "./product";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    getProducts() : IProduct[] {
        return [
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
    }
}
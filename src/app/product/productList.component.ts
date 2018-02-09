import { Component, OnInit } from "@angular/core";
import { IProduct} from "./product";
import {ProductService} from './product.service'

@Component({
    templateUrl: "./product-list.component.html",
    styleUrls: ['./product-list.component.less'],
})


export class ProductListComponent implements OnInit{
    public pageTitle: string = 'Product List';

    imageMargin : number = 5;
    showImage : Boolean = true ;
    filterList : string = '';
    errorMessage: string;

    procucts : IProduct[] = [
        
    ]

    constructor( private _productService : ProductService ){

    } 

    toggleImage() : void {
        this.showImage = !this.showImage
    }

    ngOnInit(): void {
        this._productService.getProduct()
        .subscribe( product => this.procucts = product),
            error => this.errorMessage = <any>error;
    }

    OnRatingClicked(message: string): void{
        this.pageTitle = 'Product List :' + message; 
    }

}
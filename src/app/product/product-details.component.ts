import { Component, OnInit } from "@angular/core";
import {ActivatedRoute, Router } from '@angular/router'
import { IProduct} from "./product";
import { Input } from "@angular/core/src/metadata/directives";

@Component({
    templateUrl:'./product-details.component.html'
})

export class ProductDetailsComponent implements OnInit {
    pageTitle : string = 'Product Details';
    product : IProduct;
    ProductName : string;

    constructor( private _route: ActivatedRoute, private _router :  Router){
        console.log(this._route.snapshot.params['id']);
       
    }
   
    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
        this.ProductName = this._route.snapshot['ProductName'];
    }

    onBack() : void {
        this._router.navigate(['/products'])
    }
}
import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export interface Product {
    // Unique Id
    id: number;
    // Ref on category belongs to
    categoryId: number;
    // The title
    title: string;
    // Price
    price: number;
    // Mark product with specialproce
    isSpecial: boolean;
    // Description
    desc: string;
    // Path to small image
    imageS: string;
    // Path to large image
    imageL: string;
}

@Injectable()
export class ProductService {

    // URL to Products web api
    private productsUrl = 'http://localhost:8077/api/Products'; //'app/products';//

    constructor(private http: Http) {}

    getProducts(category?: number, search?: string): Observable<Product[]> {
        let url = this.productsUrl;
        if (category) {
            url += `/GetByCategory?categoryId=${category}`;
        } else if (search) {
            url += `/GetByTitle?title=${search}`;
        }
        else{
            url +=`/GetAll`
        }     
        return this.http
            .get(url)
            .map((response: Response) => response.json().resultData as Product[])
            .catch(this.handleError);
    }

    getProduct(id: number): Observable<Product> {
        return this.http
            .get(this.productsUrl + `/GetById/?id=${id}`)
            .map((response: Response) => response.json().resultData as Product)
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        let errMsg = (error.message) ? error.message : error.status ? 
            `${error.status} - ${error.statusText}` : 'Server error';
        window.alert(`An error occurred: ${errMsg}`);
        return Observable.throw(errMsg);
    }
}

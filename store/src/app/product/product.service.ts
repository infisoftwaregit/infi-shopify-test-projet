import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {IProduct} from '../core/models';
import {Observable} from 'rxjs';

@Injectable()
export class ProductService {

  private api = `${environment.api}/products`;

  constructor(
    private http: HttpClient
  ) {
  }


  getAll(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.api);
  }

}

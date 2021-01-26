import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CartService} from '../../services';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  public totalItems$: Observable<number> = new Observable<number>();

  constructor(
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.totalItems$ = this.cartService.getTotalItems();
  }

  goToCart(): void {
    this.router.navigate(['/cart']);
  }

}

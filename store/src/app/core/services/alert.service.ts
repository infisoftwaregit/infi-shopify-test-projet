import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IAlert {type: 'default' | 'primary' | 'secondary' | 'danger' | 'warning' | 'info' | 'success', message: string}

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private list: IAlert[] = [];

  private readonly alertList: BehaviorSubject<IAlert[]> = new BehaviorSubject<IAlert[]>(this.list);
  public alertList$ = this.alertList.asObservable();

  constructor(){}

  removeAlert(index: number): void {
    this.list = this.list.filter((value: IAlert, i: number) => {
      if (i === index) {
        return false;
      }
      return true;
    });

    this.alertList.next(this.list);
  }

  show(body: IAlert): void {
    this.list = [...this.list, body];
    this.alertList.next(this.list);
  }

  clearAlert(): void {
    this.alertList.next([]);
  }
}

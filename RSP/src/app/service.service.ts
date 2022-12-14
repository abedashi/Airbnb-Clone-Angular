import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { List } from './listing/listing.module';
import { Watchlist } from './watsh-list/watchlist.module';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(
    private http: HttpClient
  ) { }
  
  createWatchlistData(index: number) {
    this.http
      .get('http://localhost:80/Airbnb-Clone-API/api/watchlist/create.php', {
        params: new HttpParams().set('appartment_id', index)
      })
      .subscribe(resData => {
        console.log(resData);
      });
  }

  getWatchlistData() {
    return this.http
      .get<Watchlist[]>('http://localhost/Airbnb-Clone-API/api/watchlist/get.php')
  }
  getWatchlistSingle(index: number) {
    return this.http
      .get('http://localhost/Airbnb-Clone-API/api/watchlist/get_single.php', {
        params: new HttpParams().set('appartment_id', index)
      })
  }

  deleteFromWatchist(index: number) {
    this.http
      .delete('http://localhost/Airbnb-Clone-API/api/watchlist/delete.php', {
        params: new HttpParams().set('appartmentId', index)
      })
      .subscribe(resData => {
        console.log(resData);
      });
  }

  getData() {
    return this.http
      .get<List[]>('http://localhost/Airbnb-Clone-API/api/appartments-list/get.php')
  }
  getAllListsForOneUser(index: number) {
    return this.http.get('http://localhost/Airbnb-Clone-API/api/appartments-list/get_single_user.php', {
      params: new HttpParams().set('userId', index)
    })
  }

  getSingleData(index: number){
    return this.http
      .get<List>('http://localhost/Airbnb-Clone-API/api/appartments-list/get_single.php', {
        params: new HttpParams().set('id', index)
      });
  }

  createReservation(check_in: string, check_out: string, totalPrice: number, nbDays: number, appartment_id: number) {
    this.http.post('http://localhost/Airbnb-Clone-API/api/reservations/create.php', {
      check_in: check_in,
      check_out: check_out,
      totalPrice: totalPrice,
      nbDays: nbDays
    }, {
      params: new HttpParams().set('appartment_id', appartment_id)
    })
    .subscribe();
  }

  getAllReservations(index: number) {
    return this.http.get<[{check_in: string, check_out: string}]>('http://localhost/Airbnb-Clone-API/api/reservations/get.php', {
      params: new HttpParams().set('appartment_id', index)
    });
  }
}


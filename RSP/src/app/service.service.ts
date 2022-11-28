import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  // listing: List[] = []
  // addList(newList: List) {
  //   this.listing.push(newList);
  // }
  // arr: List[] = [];
  
  createWachlistData(index: number) {
    this.http
      .get('http://localhost/Airbnb-Clone-API/api/watchlist/create.php', {
        params: new HttpParams().set('appartment_id', index)
      }).subscribe();
  }

  getWatchlistData() {
    return this.http
      .get<Watchlist[]>('http://localhost/Airbnb-Clone-API/api/watchlist/get.php')
  }

  getData() {
    return this.http
      .get<List[]>('http://localhost/Airbnb-Clone-API/api/appartments-list/get.php')
  }

  // watchList: List[] = [];

  // getWatchlist() {
  //   return this.watchList;
  // }
  // addToWatchListId(index: number) {
  //   this.watchList.push(this.listing[index]);
  // }

  // getList() {
  //   return this.listing;
  // }

  // getListId(index: number) {
  //   return this.listing[index];
  // }

  getSingleData(index: number){
    return this.http
      .get<List>('http://localhost/Airbnb-Clone-API/api/appartments-list/get_single.php', {
        params: new HttpParams().set('id', index)
      });
  }
}

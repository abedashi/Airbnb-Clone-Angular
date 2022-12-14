import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostProfileService {
  constructor(private http: HttpClient) {}

  updateProfile(
    about: string,
    language: string,
    location: string,
    job: string
  ) {
    const postData = {
      about: about,
      language: language,
      location: location,
      job: job,
    };
    return this.http.put(
      'http://localhost:80/Airbnb-Clone-API/api/users/update_profile.php',
      postData
    );
  }

  updateImage(image: string) {
    const upImage = { image: image };
    return this.http.put(
      'http://localhost:80/Airbnb-Clone-API/api/users/update_image.php',
      upImage
    );
  }

  getProfile() {
    return this.http
      .get('http://localhost/Airbnb-Clone-API/api/users/getProfile.php');
  }

  getProfileData(index: number) {
    return this.http
      .get('http://localhost/Airbnb-Clone-API/api/users/get_profile.php', {
        params: new HttpParams().set('id', index)
      }
    );
  }
}

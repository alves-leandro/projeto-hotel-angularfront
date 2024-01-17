import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Models } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  constructor(private apiService: ApiService) {}

  getAllUserInfos(): Observable<Models['UserInfo'][]> {
    return this.apiService.get('user-infos');
  }

  getUserInfoById(userInfoId: string): Observable<Models['UserInfo']> {
    return this.apiService.get(`user-infos/${userInfoId}`);
  }

  createUserInfo(userInfoData: any): Observable<Models['UserInfo']> {
    return this.apiService.post('user-infos', userInfoData);
  }

  updateUserInfo(
    userInfoId: string,
    userInfoData: any,
  ): Observable<Models['UserInfo']> {
    return this.apiService.patch(`user-infos/${userInfoId}`, userInfoData);
  }

  deleteUserInfo(userInfoId: string): Observable<any> {
    return this.apiService.delete(`user-infos/${userInfoId}`);
  }
}

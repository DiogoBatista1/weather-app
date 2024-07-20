import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apikey='9a92e96137882f70c2eb6e14feb2a56f';
  constructor(private http:HttpClient) { }
  getWeatherDatas(cityName:string):Observable<any>{
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apikey}`,{})
  }
}

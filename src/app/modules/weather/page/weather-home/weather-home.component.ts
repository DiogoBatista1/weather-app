import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherDatas } from 'src/app/models/interfaces/WeatherDatas';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: [],
})
export class WeatherHomeComponent implements OnInit {

  initialCity='São Paulo';
  weatherDatas!:WeatherDatas;
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCity);
  }
  getWeatherDatas(cityname: string): void {
    this.weatherService.getWeatherDatas(cityname).subscribe({
      next: (response) => {
       response &&(this.weatherDatas=response);
      },
      error: (error) => console.log(error),
    });
  }
}

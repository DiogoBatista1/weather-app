import { Component, Input } from '@angular/core';
import { WeatherDatas } from 'src/app/models/interfaces/WeatherDatas';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: [],
})
export class WeatherCardComponent {
  @Input() weatherDatasInput!: WeatherDatas;
  ngOnInit(): void {
    console.log(
      'DADOS RECEBIDOS DO COMPONENTE PAI - WEATHER-CARD',
      this.weatherDatasInput
    );
  }
}

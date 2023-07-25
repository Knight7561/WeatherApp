import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from './services/weather-service.service';
import { WeatherData } from './models/weather.model';

const CELSICS_UNIT ='C';
const FAHARENHIET_UNIT ='F';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent implements OnInit{
  cityName:string| undefined;
  fetchedData:WeatherData | undefined
  tempMetric:String = CELSICS_UNIT;
  thresholdTemperature:number = 80.6
  constructor(private weatherService:WeatherServiceService){

  }
  ngOnInit(): void {
    this.cityName='Bloomington'
    this.getData(this.cityName)
    this.cityName=''

  }

  getFToC(tempF:number):number{
    if (this.tempMetric==CELSICS_UNIT) {
      return (tempF - 32) * 5/9;
    }
    return tempF
  }

  onSubmit() {
    this.getData(this.cityName)
    this.cityName = ''
  }

  private getData(cityName:string |undefined) {
    this.fetchedData = {
      "coord": {
          "lon": -122.3321,
          "lat": 47.6062
      },
      "weather": [
          {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
          }
      ],
      "base": "stations",
      "main": {
          "temp": 64.49,
          "feels_like": 64.58,
          "temp_min": 60.91,
          "temp_max": 67.73,
          "pressure": 1016,
          "humidity": 84
      },
      "visibility": 8047,
      "wind": {
          "speed": 6.91,
          "deg": 220
      },
      "clouds": {
          "all": 100
      },
      "dt": 1690247646,
      "sys": {
          "type": 2,
          "id": 2012938,
          "country": "US",
          "sunrise": 1690202203,
          "sunset": 1690257278
      },
      "timezone": -25200,
      "id": 5809844,
      "name": "Seattle",
      "cod": 200
  };
  return;
    return this.weatherService.getWeatherData(cityName??'')
    .subscribe({
      next: (res) =>{
        console.log(res)
        this.fetchedData=res
      }
    })
  }
}

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: String): Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl+cityName,{
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHost_label,environment.XRapidAPIHost_Value)
      .set(environment.XRapidAPIKey_Label,environment.XRapidAPIKey_Value)
    })
  }
}

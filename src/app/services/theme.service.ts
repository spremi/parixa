import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { ThemeData } from '../models/theme-data';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  private themes: ThemeData[] = [];

  constructor(private http: HttpClient) { }

  list(): Observable<ThemeData[]> {
    if (this.themes.length > 0) {
      return of(this.themes);
    }

    return this.http.get<ThemeData[]>('/assets/data/themes.json').pipe(
      filter((data) => !!data),
      tap((data) => {
        this.themes = data;
      })
    );
  }
}

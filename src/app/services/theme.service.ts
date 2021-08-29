import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, BehaviorSubject, Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { ThemeData } from '../models/theme-data';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  private themes: ThemeData[] = [];

  /**
   * Current theme, if any.
   */
  private current: ThemeData = null;

  /**
   * Behavior subject to track change in selected theme.
   */
  private current$: BehaviorSubject<ThemeData> = new BehaviorSubject<ThemeData>(this.current);

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

  /**
   * Get current theme.
   */
  get(): Observable<ThemeData> {
    return this.current$.asObservable();
  }

  /**
   * Set current theme.
   */
  set(arg: ThemeData): void {
    if (!arg) {
      return;
    }

    if (!this.current || (this.current && this.current.name !== arg.name)) {
      this.current = arg;

      this.current$.next(this.current);
    }
  }
}

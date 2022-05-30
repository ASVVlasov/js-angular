import { InjectionToken } from '@angular/core';

export const BASE_URL = new InjectionToken('BASE_URL', {
  factory: () => 'https://course-angular.javascript.ru/api',
  providedIn: 'root',
});

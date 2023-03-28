import { Injectable } from '@angular/core';
import { InitAppState } from '@app/core/constants/states.constant';
import { IAppState } from '@app/core/interfaces/states.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  /**
   * Global state
   */
  private state$ = new BehaviorSubject<IAppState>(InitAppState);
}

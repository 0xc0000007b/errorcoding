import * as m from 'moment';
export interface Day {
  value: m.Moment;
  active: boolean;
  disabled: boolean;
  selected: boolean;
}

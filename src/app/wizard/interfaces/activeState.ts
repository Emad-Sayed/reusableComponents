import { Form } from '../modals/form';

export interface ActiveState {
  activate(): void;
  next(): void;
  previous(): void;
}

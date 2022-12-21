import { ReactComponent as First } from './images/first.svg';
import { ReactComponent as Second } from './images/second.svg';
import { ReactComponent as Third } from './images/third.svg';
import { ReactComponent as Fourth } from './images/fourth.svg';

type TSelects = {
  title: string;
  items: string[];
}

export type TRows = {
  commodity: string;
  id: number;
  icon: typeof First;
  name: string;
  highlighted: boolean;
  blocked: boolean;
}

export const mockSelects: Array<TSelects> = [
  { title: 'Статус', items: [] },
  { title: 'Товар', items: [] },
  { title: 'ID', items: [] },
  {
    title: 'Название', items: ['32Gb', 'Space grey', 'Silver', '41-й test1234']
  }
];

export const mockRows: Array<TRows> = [
  { commodity: 'хххх-', id: 1, icon: First, name: 'Синий', highlighted: false, blocked: false },
  { commodity: 'хххх-', id: 12, icon: Second, name: '39-й рзмер', highlighted: false, blocked: false },
  { commodity: 'хххх-', id: 189, icon: Third, name: '39,5-й размер', highlighted: false, blocked: false },
  { commodity: 'хххх-', id: 10, icon: Fourth, name: '40-й рзмер', highlighted: false, blocked: false }
];
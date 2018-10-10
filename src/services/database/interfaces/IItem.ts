import { ItemCategories } from '@/services/database/ItemCategories';

export default interface IItem {
  id: number;
  category: ItemCategories;
  name: string;
  price: number;
  size?: number;
}

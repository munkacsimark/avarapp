import { ItemCategory } from '@/services/database/ItemCategory';

export default interface IItem {
  id: number;
  category: ItemCategory;
  name: string;
  price: number;
  size?: number;
}

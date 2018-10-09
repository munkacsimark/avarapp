import {
  coffees,
  beers,
  hotDrinks,
  softDrinks,
  snacks,
  wines,
  froccss,
} from '@/services/database/dataBase';
import { ItemCategory } from '@/services/database/ItemCategory';
import IItem from '@/services/database/interfaces/IItem';

export default class DataBaseService {

  public static getItemsByIds = (idList: number[]): Promise<Set<IItem>> =>
    new Promise<Set<IItem>>((resolve, reject) => {
      try {
        const itemList: IItem[] = [...DataBaseService.mergeAll()].filter(item =>
          idList.some(id => item.id === id)
        );
        resolve(new Set(itemList));
      } catch (error) {
        reject(error);
      }
    });

  public static getItemsByCategories = (categoryList: ItemCategory[]): Promise<Set<IItem>> =>
    new Promise<Set<IItem>>((resolve, reject) => {
      try {
        const itemList: IItem[] = [];
        categoryList.forEach(category => {
          switch(category) {
            case ItemCategory.COFFEE: itemList.push(...coffees); break;
            case ItemCategory.BEER: itemList.push(...beers); break;
            case ItemCategory.HOT_DRINK: itemList.push(...hotDrinks); break;
            case ItemCategory.SOFT_DRINK: itemList.push(...softDrinks); break;
            case ItemCategory.SNACK: itemList.push(...snacks); break;
            case ItemCategory.WINE: itemList.push(...wines); break;
            case ItemCategory.FROCCS: itemList.push(...froccss); break;
            default: throw new ReferenceError('Unknown ItemCategory');
          }
        });
        resolve(new Set(itemList));
      } catch (error) {
        reject(error);
      }
    });

  private static mergeAll = (): Set<IItem> =>
    new Set([
      ...coffees,
      ...beers,
      ...hotDrinks,
      ...softDrinks,
      ...snacks,
      ...wines,
      ...froccss
    ]);

}

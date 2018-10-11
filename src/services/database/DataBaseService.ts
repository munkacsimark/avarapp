import {
  coffees,
  beers,
  hotDrinks,
  softDrinks,
  snacks,
  wines,
  froccss,
} from '@/services/database/dataBase';
import { ItemCategories } from '@/services/database/ItemCategories';
import IItem from '@/services/database/interfaces/IItem';

export default class DataBaseService {

  public static getItemsByIds = (idList: number[]): IItem[] => {
    const dbItems: IItem[] = [...DataBaseService.mergeAll()];
    const itemList: IItem[] = [];
    idList.forEach((id: number) =>
      itemList.push(dbItems.filter((dbItem: IItem) =>
        dbItem.id === id)[0]));
    return itemList;
  }

  public static getItemsByCategories = (categoryList: ItemCategories[]): IItem[] => {
    const itemList: IItem[] = [];
    categoryList.forEach((category) => {
      switch (category) {
        case ItemCategories.COFFEE: itemList.push(...coffees); break;
        case ItemCategories.BEER: itemList.push(...beers); break;
        case ItemCategories.HOT_DRINK: itemList.push(...hotDrinks); break;
        case ItemCategories.SOFT_DRINK: itemList.push(...softDrinks); break;
        case ItemCategories.SNACK: itemList.push(...snacks); break;
        case ItemCategories.WINE: itemList.push(...wines); break;
        case ItemCategories.FROCCS: itemList.push(...froccss); break;
        default: throw new ReferenceError('Unknown ItemCategories');
      }
    });
    return itemList;
  }

  private static mergeAll = (): Set<IItem> =>
    new Set([
      ...coffees,
      ...beers,
      ...hotDrinks,
      ...softDrinks,
      ...snacks,
      ...wines,
      ...froccss,
    ])

}

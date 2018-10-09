import { LocalStorageKeys } from '@/services/localstorage/LocalStorageKeys';

export default class LocalStorageService {

  public static getConsumption = () =>
    new Promise<number[]>((resolve, reject) => {
      try {
        const consumption: string | null = localStorage.getItem(LocalStorageKeys.CONSUMPTION);
        resolve(consumption ? JSON.parse(consumption) : []);
      } catch (error) {
        reject(error);
      }
    })

  public static addDrink = (drinkId: number) =>
    new Promise<void>((resolve, reject) => {
      try {
        const currentConsumption: number[] = JSON.parse(localStorage.getItem(LocalStorageKeys.CONSUMPTION) || '[]');
        currentConsumption.push(drinkId);
        localStorage.setItem(LocalStorageKeys.CONSUMPTION, JSON.stringify(currentConsumption));
        resolve();
      } catch (error) {
        reject(error);
      }
    })

  public static removeDrink = (drinkId: number) =>
    new Promise<void>((resolve, reject) => {
      try {
        const currentConsumption: number[] = JSON.parse(localStorage.getItem(LocalStorageKeys.CONSUMPTION) || '[]');
        currentConsumption.splice(currentConsumption.indexOf(drinkId), 1);
        localStorage.setItem(LocalStorageKeys.CONSUMPTION, JSON.stringify(currentConsumption));
        resolve();
      } catch (error) {
        reject(error);
      }
    })

}



import { LocalStorageKeys } from '@/services/localstorage/LocalStorageKeys';

export default class LocalStorageService {

  public static getConsumption = (): number[] => {
    const consumption: string | null = localStorage.getItem(LocalStorageKeys.CONSUMPTION);
    return consumption ? JSON.parse(consumption) : [];
  }

  public static addConsumption = (drinkId: number): void => {
    const currentConsumption: number[] = JSON.parse(localStorage.getItem(LocalStorageKeys.CONSUMPTION) || '[]');
    currentConsumption.push(drinkId);
    localStorage.setItem(LocalStorageKeys.CONSUMPTION, JSON.stringify(currentConsumption));
  }

  public static removeConsumption = (drinkId: number): void => {
    const currentConsumption: number[] = JSON.parse(localStorage.getItem(LocalStorageKeys.CONSUMPTION) || '[]');
    currentConsumption.splice(currentConsumption.indexOf(drinkId), 1);
    localStorage.setItem(LocalStorageKeys.CONSUMPTION, JSON.stringify(currentConsumption));
  }

  public static clearConsumptions = (): void => {
    localStorage.removeItem(LocalStorageKeys.CONSUMPTION);
  }
}



import { ActionTree } from 'vuex';
import LocalStorageService from '@/services/localstorage/LocalStorageService';
import IAppState from './IAppState';
import IRootState from '../../IRootState';
import { MutationKeys } from './mutations';


export const actions: ActionTree<IAppState, IRootState> = {

  async fetchData({ commit }): Promise<void> {
    try {
      const consumption: number[] = await LocalStorageService.getConsumption();
      commit(MutationKeys.APP_CHANGED, consumption);
    } catch (error) {
      commit(MutationKeys.APP_ERROR);
    }
  },

  async addDrink({ commit }, drinkId: number): Promise<void> {
    try {
      await LocalStorageService.addDrink(drinkId);
      const consumption: number[] = await LocalStorageService.getConsumption();
      commit(MutationKeys.APP_CHANGED, consumption);
    } catch (error) {
      commit(MutationKeys.APP_ERROR);
    }
  },

};

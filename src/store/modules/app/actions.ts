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

  async addConsumption({ commit }, id: number): Promise<void> {
    try {
      await LocalStorageService.addConsumption(id);
      commit(MutationKeys.APP_CHANGED, await LocalStorageService.getConsumption());
    } catch (error) {
      commit(MutationKeys.APP_ERROR);
    }
  },

  async removeConsumption({ commit }, id: number): Promise<void> {
    try {
      await LocalStorageService.removeConsumption(id);
      commit(MutationKeys.APP_CHANGED, await LocalStorageService.getConsumption());
    } catch (error) {
      commit(MutationKeys.APP_ERROR);
    }
  },

};

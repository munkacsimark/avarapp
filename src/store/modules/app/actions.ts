import { ActionTree } from 'vuex';
import LocalStorageService from '@/services/localstorage/LocalStorageService';
import IAppState from './IAppState';
import IRootState from '../../IRootState';
import { MutationKeys } from './mutations';


export const actions: ActionTree<IAppState, IRootState> = {

  fetchData({ commit }): void {
    const consumption: number[] = LocalStorageService.getConsumption();
    commit(MutationKeys.APP_CHANGED, consumption);
  },

  addConsumption({ commit }, id: number): void {
    LocalStorageService.addConsumption(id);
    commit(MutationKeys.APP_CHANGED, LocalStorageService.getConsumption());
  },

  removeConsumption({ commit }, index: number): void {
    LocalStorageService.removeConsumption(index);
    commit(MutationKeys.APP_CHANGED, LocalStorageService.getConsumption());
  },

};

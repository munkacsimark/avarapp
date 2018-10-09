import { MutationTree } from 'vuex';
import IAppState from './IAppState';

export const mutations: MutationTree<IAppState> = {
  appChanged(state: IAppState, consumption: number[]) {
    state.consumption = consumption;
    state.error = false;
  },
  appError(state: IAppState) {
    state.consumption = [];
    state.error = true;
  },
};

export enum MutationKeys {
  APP_CHANGED = 'appChanged',
  APP_ERROR = 'appError',
}

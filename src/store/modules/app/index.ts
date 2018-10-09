import { Module } from 'vuex';
import IRootState from '@/store/IRootState';
import IAppState from '@/store/modules/app/IAppState';
import { actions } from '@/store/modules/app/actions';
import { mutations } from '@/store/modules/app/mutations';

export const state: IAppState = {
  consumption: [],
  error: false,
};

const namespaced: boolean = true;

export const app: Module<IAppState, IRootState> = {
  namespaced,
  state,
  actions,
  mutations,
};

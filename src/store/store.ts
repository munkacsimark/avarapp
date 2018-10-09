import Vue from 'vue';
import Vuex from 'vuex';
import IRootState from '@/store/IRootState';
import { app } from '@/store/modules/app';

Vue.use(Vuex);

export default new Vuex.Store<IRootState>({
  state: {
    version: '0.1.0',
  },
  modules: {
    app,
  },
});

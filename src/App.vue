<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ActionKeys } from '@/store/ActionKeys';

@Component({})
export default class App extends Vue {

  public constructor() {
    super();
  }

  public async mounted(): Promise<void> {
    await this.$store.dispatch(ActionKeys.FETCH_DATA);
  }

}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
body {
  font-size: 1.6rem;
  line-height: 1;
  margin: 0;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

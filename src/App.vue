<template>
  <div id="app">
    <router-view/>
    <loaded-fader
      v-if="faderIsLive"
      :is-loaded="isLoaded"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ActionKeys } from '@/store/ActionKeys';
import LoadedFader from '@/components/ui/LoadedFader.vue';

@Component({
  components: {
    LoadedFader
  }
})
export default class App extends Vue {

  private isLoaded: boolean = false;
  private faderIsLive: boolean = true;

  public constructor() {
    super();
  }

  public mounted(): void {
    this.$store.dispatch(ActionKeys.FETCH_DATA);
 
    const loadedTimeout: number = setTimeout(() => {
      this.isLoaded = true;
      clearTimeout(loadedTimeout);
    }, 0);

    const faderDestroyTimeout: number = setTimeout(() => {
      this.faderIsLive = false;
      clearTimeout(faderDestroyTimeout);
    }, 2000);
  }

}
</script>

<style lang="scss">
@import './styles/colors';

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
  background-color: map-get($colors, 'blue-dark');
  color: map-get($colors, 'white');
}
</style>

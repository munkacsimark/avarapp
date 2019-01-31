<template>
  <div :class="[$style.fader, {[$style.faderLoaded]: isLoaded}]"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  props: {
    isLoaded: Boolean,
  },
})
export default class LoadedFader extends Vue {

  public constructor() {
    super();
  }

}
</script>

<style lang="scss" module>
  @import '../../styles/colors';

  .fader {
    display: flex;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(map-get($colors, 'blue-black'), 1);
    transition: 0s;

    &.faderLoaded {
      background-color: rgba(map-get($colors, 'blue-black'), 0);
      transition: 2s;
    }
  }
</style>

<template>
  <div :class="$style.container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class ViewContainer extends Vue {}
</script>

<style lang="scss" module>
@import '../../styles/mixins';
@import '../../styles/sizes';

.container {
  display: flex;
  flex-direction: column;
  width: map-get($app-sizes, 'normal');
  padding: $header-height 20px $footer-height 20px;

  @include respond-to('bigscreen') {
    width: map-get($app-sizes, 'bigscreen');
    margin: 0 auto;
  }
}
</style>

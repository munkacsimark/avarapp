<template>
  <view-container>
    <view-header></view-header>
      Helloka: {{ consumption }}
      <button @click="addRnd">ADD</button>
    <view-footer></view-footer>
  </view-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ViewContainer from '@/components/ui/ViewContainer.vue';
import ViewHeader from '@/components/ui/ViewHeader.vue';
import ViewFooter from '@/components/ui/ViewFooter.vue';
import { ActionKeys } from '@/store/ActionKeys';

@Component({
  components: {
    ViewContainer,
    ViewHeader,
    ViewFooter,
  },
})
export default class Home extends Vue {

  public constructor() {
    super();
  }

  private async addRnd(): Promise<void> {
    const rnd = Math.floor(Math.random() * 100);
    await this.$store.dispatch(ActionKeys.ADD_DRINK, rnd);
  }

  private get consumption(): number[] {
    return this.$store.state.app.consumption;
  }

}
</script>

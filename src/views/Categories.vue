<template>
  <view-container>
    <view-header/>
    <div>
      <router-link
        v-for="(value, key) in itemCategories"
        :key="key"
        :to="`${categoryRouteBase}/${value}`"
        :class="$style.categoryBox">
        {{ value }}</router-link>
    </div>
    <view-footer/>
  </view-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ViewContainer from '@/components/ui/ViewContainer.vue';
import ViewHeader from '@/components/ui/ViewHeader.vue';
import ViewFooter from '@/components/ui/ViewFooter.vue';
import { ItemCategories } from '@/services/database/ItemCategories';
import { Routes } from '@/router/Routes';

@Component({
  components: {
    ViewContainer,
    ViewHeader,
    ViewFooter,
  },
})
export default class Categories extends Vue {

  private categoryRouteBase: Routes = Routes.CATEGORIES;

  public constructor() {
    super();
  }

  get itemCategories(): {[key: string]: any} {
    return ItemCategories;
  }

}
</script>

<style lang="scss" module>
  .categoryBox {
    display: flex;
    padding: 10px;
  }
</style>

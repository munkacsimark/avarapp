<template>
  <view-container>
    <view-header/>
    <div>
      <div :class="$style.contentRow">
        <router-link
          :to="beersPath"
          :class="$style.beerIcon">
          Sör</router-link>
        <router-link
          :to="froccssPath"
          :class="$style.froccsIcon">
          Fröccs</router-link>
      </div>
      <div :class="$style.contentRow">
        <router-link
          :to="hotDrinksPath"
          :class="$style.hotDrinkIcon">
          Melegítő</router-link>
        <router-link
          :to="softDrinksPath"
          :class="$style.softDrinkIcon">
          Üdítő</router-link>
      </div>
      <div :class="$style.contentRow">
        <router-link
          :to="coffeesPath"
          :class="$style.coffeeIcon">
          Kávé</router-link>
        <router-link
          :to="winesPath"
          :class="$style.wineIcon">
          Bor</router-link>
      </div>
      <div :class="$style.contentRow">
        <router-link
          :to="snacksPath"
          :class="$style.snackIcon">
          Harapnivalók</router-link>
      </div>
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

  private beersPath: string = `${Routes.CATEGORIES}/${ItemCategories.BEER}`;
  private froccssPath: string = `${Routes.CATEGORIES}/${ItemCategories.FROCCS}`;
  private softDrinksPath: string = `${Routes.CATEGORIES}/${ItemCategories.SOFT_DRINK}`;
  private hotDrinksPath: string = `${Routes.CATEGORIES}/${ItemCategories.HOT_DRINK}`;
  private coffeesPath: string = `${Routes.CATEGORIES}/${ItemCategories.COFFEE}`;
  private winesPath: string = `${Routes.CATEGORIES}/${ItemCategories.WINE}`;
  private snacksPath: string = `${Routes.CATEGORIES}/${ItemCategories.SNACK}`;

  public constructor() {
    super();
  }

}
</script>

<style lang="scss" module>
  @import '../styles/backgrounds';
  %icon {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    text-indent: -9999em;
  }
  .contentRow {
    display: flex;
    justify-content: space-evenly;
    margin: 30px auto;
  }
  .beerIcon {
    @extend %icon;
    @include beersBackgroundImage;
  }
  .froccsIcon {
    @extend %icon;
    @include froccssBackgroundImage;
  }
  .hotDrinkIcon {
    @extend %icon;
    @include hotDrinksBackgroundImage;
  }
  .softDrinkIcon {
    @extend %icon;
    @include softDrinksBackgroundImage;
  }
  .coffeeIcon {
    @extend %icon;
    @include coffeesBackgroundImage;
  }
  .wineIcon {
    @extend %icon;
    @include winesBackgroundImage;
  }
  .snackIcon {
    @extend %icon;
    @include snacksBackgroundImage;
  }
</style>

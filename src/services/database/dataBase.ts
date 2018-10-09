import { ItemCategory } from '@/services/database/ItemCategory';
import IItem from '@/services/database/interfaces/IItem';

const coffees: Set<IItem> = new Set([
  {
    id: 1,
    name: 'Espresso',
    category: ItemCategory.COFFEE,
    price: 300,
  },
  {
    id: 2,
    name: 'Hosszú',
    category: ItemCategory.COFFEE,
    price: 300,
  },
  {
    id: 3,
    name: 'Capuccino',
    category: ItemCategory.COFFEE,
    price: 350,
  },
  {
    id: 4,
    name: 'Latte',
    category: ItemCategory.COFFEE,
    price: 400,
  },
  {
    id: 5,
    name: 'Melange',
    category: ItemCategory.COFFEE,
    price: 450,
  },
  {
    id: 6,
    name: 'Ír kávé',
    category: ItemCategory.COFFEE,
    price: 900,
  },
  {
    id: 7,
    name: 'Jeges kávé',
    category: ItemCategory.COFFEE,
    price: 700,
  },
]);

const beers: Set<IItem> = new Set([
  {
    id: 8,
    name: 'Dreher',
    category: ItemCategory.BEER,
    price: 500,
    size: 0.5,
  },
  {
    id: 9,
    name: 'Dreher',
    category: ItemCategory.BEER,
    price: 300,
    size: 0.3,
  },
  {
    id: 10,
    name: 'Hidegkomlós Dreher',
    category: ItemCategory.BEER,
    price: 500,
    size: 0.5,
  },
  {
    id: 11,
    name: 'Hidegkomlós Dreher',
    category: ItemCategory.BEER,
    price: 300,
    size: 0.3,
  },
  {
    id: 12,
    name: 'Pilsner Urquell',
    category: ItemCategory.BEER,
    price: 600,
    size: 0.5,
  },
  {
    id: 13,
    name: 'Pilsner Urquell',
    category: ItemCategory.BEER,
    price: 360,
    size: 0.3,
  },
  {
    id: 14,
    name: 'HB Búza',
    category: ItemCategory.BEER,
    price: 700,
    size: 0.5,
  },
  {
    id: 15,
    name: 'HB Búza',
    category: ItemCategory.BEER,
    price: 420,
    size: 0.3,
  },
  {
    id: 16,
    name: 'Arany Ászok',
    category: ItemCategory.BEER,
    price: 400,
    size: 0.5,
  },
  {
    id: 17,
    name: 'Frissenszűrt Ászok',
    category: ItemCategory.BEER,
    price: 400,
    size: 0.5,
  },
  {
    id: 18,
    name: 'Kozel',
    category: ItemCategory.BEER,
    price: 440,
    size: 0.5,
  },
  {
    id: 19,
    name: 'Kozel Dark',
    category: ItemCategory.BEER,
    price: 480,
    size: 0.5,
  },
  {
    id: 20,
    name: 'Dreher Pale Ale',
    category: ItemCategory.BEER,
    price: 500,
    size: 0.5,
  },
  {
    id: 21,
    name: 'Dreher 24',
    category: ItemCategory.BEER,
    price: 500,
    size: 0.5,
  },
  {
    id: 22,
    name: 'Peroni',
    category: ItemCategory.BEER,
    price: 600,
    size: 0.33,
  },
  {
    id: 23,
    name: 'Asahi SD',
    category: ItemCategory.BEER,
    price: 600,
    size: 0.33,
  },
]);

const hotDrinks: Set<IItem> = new Set([
  {
    id: 24,
    name: 'Tea',
    category: ItemCategory.HOT_DRINK,
    price: 350,
  },
  {
    id: 25,
    name: 'Tea mézzel',
    category: ItemCategory.HOT_DRINK,
    price: 400,
  },
  {
    id: 26,
    name: 'Kakaó',
    category: ItemCategory.HOT_DRINK,
    price: 400,
  },
  {
    id: 27,
    name: 'Forró csokoládé',
    category: ItemCategory.HOT_DRINK,
    price: 700,
  },
  {
    id: 28,
    name: 'Grog',
    category: ItemCategory.HOT_DRINK,
    price: 700,
  },
  {
    id: 29,
    name: 'Forralt bor',
    category: ItemCategory.HOT_DRINK,
    price: 225,
    size: 0.1,
  },
]);

const softDrinks: Set<IItem> = new Set([
  {
    id: 30,
    name: 'Házi limonádé',
    category: ItemCategory.SOFT_DRINK,
    price: 130,
    size: 0.1,
  },
  {
    id: 31,
    name: 'Házi szörp',
    category: ItemCategory.SOFT_DRINK,
    price: 110,
    size: 0.1,
  },
  {
    id: 32,
    name: 'Fuzetea',
    category: ItemCategory.SOFT_DRINK,
    price: 350,
    size: 0.25,
  },
  {
    id: 33,
    name: 'Cappy',
    category: ItemCategory.SOFT_DRINK,
    price: 400,
    size: 0.25,
  },
  {
    id: 34,
    name: 'Coca-Cola',
    category: ItemCategory.SOFT_DRINK,
    price: 350,
    size: 0.25,
  },
  {
    id: 35,
    name: 'Coca-Cola Zero',
    category: ItemCategory.SOFT_DRINK,
    price: 350,
    size: 0.25,
  },
  {
    id: 36,
    name: 'Sprite',
    category: ItemCategory.SOFT_DRINK,
    price: 350,
    size: 0.25,
  },
  {
    id: 37,
    name: 'Fanta',
    category: ItemCategory.SOFT_DRINK,
    price: 350,
    size: 0.25,
  },
  {
    id: 38,
    name: 'Kinley',
    category: ItemCategory.SOFT_DRINK,
    price: 350,
    size: 0.25,
  },
  {
    id: 39,
    name: 'Ásványvíz',
    category: ItemCategory.SOFT_DRINK,
    price: 280,
    size: 0.25,
  },
  {
    id: 40,
    name: 'Szódavíz',
    category: ItemCategory.SOFT_DRINK,
    price: 50,
    size: 0.1,
  },
  {
    id: 41,
    name: 'RedBull',
    category: ItemCategory.SOFT_DRINK,
    price: 700,
    size: 0.25,
  },
]);

const snacks: Set<IItem> = new Set([
  {
    id: 42,
    name: 'Melegszendvics',
    category: ItemCategory.SNACK,
    price: 600,
  },
  {
    id: 43,
    name: 'Pogácsa',
    category: ItemCategory.SNACK,
    price: 250,
  },
  {
    id: 44,
    name: 'Chips',
    category: ItemCategory.SNACK,
    price: 450,
  },
  {
    id: 45,
    name: 'Nógrádi ropi',
    category: ItemCategory.SNACK,
    price: 150,
  },
  {
    id: 46,
    name: 'Sós mogyoró',
    category: ItemCategory.SNACK,
    price: 400,
  },
  {
    id: 47,
    name: 'Rágó',
    category: ItemCategory.SNACK,
    price: 250,
  },
]);

const wines: Set<IItem> = new Set([
  // todo get wine list
]);

const froccss: Set<IItem> = new Set([
  // todo get froccs list
]);

export {
  coffees,
  beers,
  hotDrinks,
  softDrinks,
  snacks,
  wines,
  froccss,
}

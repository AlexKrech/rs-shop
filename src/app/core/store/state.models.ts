import { SafeHtml } from '@angular/platform-browser';

export interface ILocation {
  city: string;
}

export interface ICategory {
  id: string;
  name: string;
  ico?: SafeHtml;
  subCategories: ISubCategoryInfo[];
}

export interface ISubCategoryInfo {
  id: string;
  name: string;
}

export interface ICategoryIco {
  id: string;
  icon: string;
}

export interface ISubCategoryItems {
  id: string;
  name: string;
}

export interface IShopItem {
  id: string;
  name: string;
  imageUrls: [string, string];
  availableAmount: number;
  price: number;
  rating: number;
  description: string;
  isInCart: boolean;
  isFavorite: boolean;
}

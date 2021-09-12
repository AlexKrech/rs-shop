import { SafeHtml } from '@angular/platform-browser';

export interface ILocation {
  city: string;
}

export interface ICategory {
  id: string;
  name: string;
  ico?: SafeHtml;
  subCategories: ISubCategories[];
}

interface ISubCategories {
  id: string;
  name: string;
}

export interface ICategoryIco {
  id: string;
  icon: string;
}

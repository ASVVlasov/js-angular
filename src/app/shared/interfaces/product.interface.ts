import { IImage } from './image.interface';

export interface IProduct {
  _id: string;
  name: string;
  price: number;
  rating: number;
  status: number;
  images: IImage[];
  feedbacksCount?: number;
  subCategory?: string;
}

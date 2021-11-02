import { IsNotEmpty } from 'class-validator';
import { ProductCategory } from '../product-category.enun';

export class createProductDto {
  @IsNotEmpty()
  productName: string;
  @IsNotEmpty()
  productDescription: string;
  @IsNotEmpty()
  productPrice: number;
  @IsNotEmpty()
  status: boolean;
  @IsNotEmpty()
  imgLink: string;
  @IsNotEmpty()
  category: ProductCategory;
}

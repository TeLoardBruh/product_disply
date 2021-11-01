import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator';
import { ProductCategory } from '../product-category.enun';

export class GetFilterProductDto {
  @IsOptional()
  @IsString()
  search?: string;
  @IsOptional()
  @IsString()
  status?: string;
  @IsOptional()
  @IsEnum(ProductCategory)
  category?: ProductCategory;
}

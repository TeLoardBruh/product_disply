import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ProductCategory } from './product-category.enun';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  productName: string;
  @Column()
  productDescription: string;
  @Column()
  productPrice: number;
  @Column()
  status: boolean;
  @Column()
  category: ProductCategory;
}

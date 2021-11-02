import { Exclude } from 'class-transformer';
import { User } from 'src/auth/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
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
  imgLink: string;
  @Column()
  category: ProductCategory;

  @ManyToOne((_type) => User, (user) => user.products, { eager: false })
  @Exclude({ toPlainOnly: true })
  user: User;
}

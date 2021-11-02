import { User } from 'src/auth/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { createProductDto } from './dto/create-product.dto';
import { GetFilterProductDto } from './dto/get-filters-product.dto';
import { Product } from './product.entity';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  async getProducts(filterDto: GetFilterProductDto): Promise<Product[]> {
    const { search, category, status } = filterDto;
    const statusBoolean = Boolean(status);
    const query = this.createQueryBuilder('product');
    if (search) {
      query.andWhere(
        '(LOWER(product.productName) LIKE LOWER(:search) OR LOWER(product.productDescription) LIKE LOWER(:search))',
        { search: `%${search}%` },
      );
    }

    if (statusBoolean) {
      query.andWhere('product.status = :statusBoolean', { statusBoolean });
    }
    if (category) {
      query.andWhere('product.category = :category', { category });
    }
    const products = await query.getMany();
    return products;
  }
  async createProduct(
    createProductDto: createProductDto,
    user: User,
  ): Promise<Product> {
    const {
      productName,
      productDescription,
      category,
      productPrice,
      status,
      imgLink,
    } = createProductDto;
    const product = this.create({
      productName,
      productDescription,
      productPrice,
      status,
      imgLink,
      category,
      user,
    });

    await this.save(product);
    return product;
  }
}

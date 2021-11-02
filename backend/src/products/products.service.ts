import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductCategory } from './product-category.enun';
import { createProductDto } from './dto/create-product.dto';
import { GetFilterProductDto } from './dto/get-filters-product.dto';
import { ProductRepository } from './product.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { User } from '../auth/user.entity';
@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductRepository)
    private productRepository: ProductRepository,
  ) {}

  async getProduct(filterDto: GetFilterProductDto): Promise<Product[]> {
    return this.productRepository.getProducts(filterDto);
  }

  async getProductById(id: string): Promise<Product> {
    const found = await this.productRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Product with this id ${id} is not found`);
    }
    return found;
  }

  createProduct(
    createProductDto: createProductDto,
    user: User,
  ): Promise<Product> {
    return this.productRepository.createProduct(createProductDto,user);
  }
  

  async updateProductStatus(id: string, status: boolean): Promise<Product> {
    const product = await this.getProductById(id);

    product.status = status;

    await this.productRepository.save(product);

    return product;
  }

  async deleteProduct(id: string): Promise<void> {
    const result = await this.productRepository.delete(id);
    if (result.affected == 0) {
      throw new NotFoundException(`Product with this id ${id} is not found`);
    }
  }
}

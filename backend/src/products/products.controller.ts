import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createProductDto } from './dto/create-product.dto';
import { GetFilterProductDto } from './dto/get-filters-product.dto';
import { UpdateProductDtoStatus } from './dto/update-product.dto';
import { Product } from './product.entity';
import { ProductsService } from './products.service';

@Controller('products')
@UseGuards(AuthGuard())
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(@Query() filterDto: GetFilterProductDto): Promise<Product[]> {
    return this.productsService.getProduct(filterDto);
  }

  @Get('/:id')
  getProductById(@Param('id') id: string): Promise<Product> {
    return this.productsService.getProductById(id);
  }

  @Post()
  createProduct(@Body() createProductDto: createProductDto): Promise<Product> {
    return this.productsService.createProduct(createProductDto);
  }

  @Patch('/:id/status')
  updateProductStatus(
    @Param('id') id: string,
    @Body('') updateProductStatusDto: UpdateProductDtoStatus,
  ): Promise<Product> {
    const { status } = updateProductStatusDto;
    return this.productsService.updateProductStatus(id, status);
  }

  @Delete('/:id')
  deleteProduct(@Param('id') id: string): Promise<void> {
    return this.productsService.deleteProduct(id);
  }
}

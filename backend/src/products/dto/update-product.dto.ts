import { IsBoolean } from 'class-validator';

export class UpdateProductDtoStatus {
  @IsBoolean()
  status: boolean;
}

import { CreateCatDto } from './create-cat.dto';

export class UpdateCatDto implements Partial<CreateCatDto> {
  name?: string;
  color?: string;
}

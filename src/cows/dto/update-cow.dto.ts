import { CreateCowDto } from './create-cow.dto';

export class UpdateCowDto implements Partial<CreateCowDto> {
  name?: string;
  breed?: string;
}

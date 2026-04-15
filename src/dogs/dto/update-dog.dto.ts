import { CreateDogDto } from './create-dog.dto';

export class UpdateDogDto implements Partial<CreateDogDto> {
  name?: string;
  breed?: string;
}

import { CreateTigerDto } from './create-tiger.dto';

export class UpdateTigerDto implements Partial<CreateTigerDto> {
  name?: string;
  species?: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SendQuestionDto {
  @ApiProperty()
  @IsString()
  readonly question: string;
}

import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Pet extends Document {
  @Prop({ required: true })
  name: string;
}

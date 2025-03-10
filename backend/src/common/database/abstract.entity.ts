import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

@Schema()
@ObjectType({ isAbstract: true })
export abstract class AbstractEntity {
  @Prop({ type: SchemaTypes.ObjectId, auto: true })
  @Field(() => ID)
  _id: Types.ObjectId;
}

/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ConversationTypeWhereInput } from "./ConversationTypeWhereInput";
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { ValidateNested, IsOptional } from "class-validator";

@InputType()
class ConversationTypeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ConversationTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => ConversationTypeWhereInput)
  @IsOptional()
  @Field(() => ConversationTypeWhereInput, {
    nullable: true,
  })
  every?: ConversationTypeWhereInput;

  @ApiProperty({
    required: false,
    type: () => ConversationTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => ConversationTypeWhereInput)
  @IsOptional()
  @Field(() => ConversationTypeWhereInput, {
    nullable: true,
  })
  some?: ConversationTypeWhereInput;

  @ApiProperty({
    required: false,
    type: () => ConversationTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => ConversationTypeWhereInput)
  @IsOptional()
  @Field(() => ConversationTypeWhereInput, {
    nullable: true,
  })
  none?: ConversationTypeWhereInput;
}
export { ConversationTypeListRelationFilter as ConversationTypeListRelationFilter };

/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ModelWhereUniqueInput } from "../../model/base/ModelWhereUniqueInput";
import { ConversationTypeUpdateManyWithoutTemplatesInput } from "./ConversationTypeUpdateManyWithoutTemplatesInput";
import { MessageUpdateManyWithoutTemplatesInput } from "./MessageUpdateManyWithoutTemplatesInput";
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { ValidateNested, IsOptional, IsString } from "class-validator";

@InputType()
class TemplateUpdateInput {
  @ApiProperty({
    required: false,
    type: () => MessageUpdateManyWithoutTemplatesInput,
  })
  @ValidateNested()
  @Type(() => MessageUpdateManyWithoutTemplatesInput)
  @IsOptional()
  @Field(() => MessageUpdateManyWithoutTemplatesInput, {
    nullable: true,
  })
  messages?: MessageUpdateManyWithoutTemplatesInput;

  @ApiProperty({
    required: false,
    type: () => ConversationTypeUpdateManyWithoutTemplatesInput,
  })
  @ValidateNested()
  @Type(() => ConversationTypeUpdateManyWithoutTemplatesInput)
  @IsOptional()
  @Field(() => ConversationTypeUpdateManyWithoutTemplatesInput, {
    nullable: true,
  })
  messageTypes?: ConversationTypeUpdateManyWithoutTemplatesInput;

  @ApiProperty({
    required: false,
    type: () => ModelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ModelWhereUniqueInput)
  @IsOptional()
  @Field(() => ModelWhereUniqueInput, {
    nullable: true,
  })
  model?: ModelWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  params?: string | null;
}

export { TemplateUpdateInput as TemplateUpdateInput };

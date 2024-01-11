/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ConversationTypeWhereUniqueInput } from "../../conversationType/base/ConversationTypeWhereUniqueInput";
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ConversationTypeUpdateManyWithoutTemplatesInput {
  @Field(() => [ConversationTypeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ConversationTypeWhereUniqueInput],
  })
  connect?: Array<ConversationTypeWhereUniqueInput>;

  @Field(() => [ConversationTypeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ConversationTypeWhereUniqueInput],
  })
  disconnect?: Array<ConversationTypeWhereUniqueInput>;

  @Field(() => [ConversationTypeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ConversationTypeWhereUniqueInput],
  })
  set?: Array<ConversationTypeWhereUniqueInput>;
}

export { ConversationTypeUpdateManyWithoutTemplatesInput as ConversationTypeUpdateManyWithoutTemplatesInput };

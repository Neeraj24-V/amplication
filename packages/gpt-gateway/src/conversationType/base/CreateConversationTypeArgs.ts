/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ConversationTypeCreateInput } from "./ConversationTypeCreateInput";
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";

@ArgsType()
class CreateConversationTypeArgs {
  @ApiProperty({
    required: true,
    type: () => ConversationTypeCreateInput,
  })
  @ValidateNested()
  @Type(() => ConversationTypeCreateInput)
  @Field(() => ConversationTypeCreateInput, { nullable: false })
  data!: ConversationTypeCreateInput;
}

export { CreateConversationTypeArgs as CreateConversationTypeArgs };

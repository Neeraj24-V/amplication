/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ModelCreateInput } from "./ModelCreateInput";
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";

@ArgsType()
class CreateModelArgs {
  @ApiProperty({
    required: true,
    type: () => ModelCreateInput,
  })
  @ValidateNested()
  @Type(() => ModelCreateInput)
  @Field(() => ModelCreateInput, { nullable: false })
  data!: ModelCreateInput;
}

export { CreateModelArgs as CreateModelArgs };

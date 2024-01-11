/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ModelUpdateInput } from "./ModelUpdateInput";
import { ModelWhereUniqueInput } from "./ModelWhereUniqueInput";
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";

@ArgsType()
class UpdateModelArgs {
  @ApiProperty({
    required: true,
    type: () => ModelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ModelWhereUniqueInput)
  @Field(() => ModelWhereUniqueInput, { nullable: false })
  where!: ModelWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ModelUpdateInput,
  })
  @ValidateNested()
  @Type(() => ModelUpdateInput)
  @Field(() => ModelUpdateInput, { nullable: false })
  data!: ModelUpdateInput;
}

export { UpdateModelArgs as UpdateModelArgs };

import { MaxLength, Length } from "class-validator";
import { InputType, Field } from "type-graphql";

@InputType()
export class ProductInput {
  @Field()
  @MaxLength(40)
  title: string;

  @Field()
  @Length(20, 255)
  about_product: string;

  @Field()
  @Length(3, 255)
  imgSrcUrl: string;
}

@InputType()
export class ProductUpdateInput {
  @Field(() => String, { nullable: true })
  title?: string ;

  @Field(() => String, { nullable: true })
  about_product?: string ;

  @Field(() => String, { nullable: true })
  imgSrcUrl?: string;
}
import { Field, Int, ObjectType } from "type-graphql";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@ObjectType()
@Entity('products')
export class Product extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column('text')
    title: string;

    @Field(() => String)
    @Column('text')
    about_product: string;

    @Field(() => String)
    @Column('text')
    imgSrcUrl: string
}

//Field means that witch field gonna be exposed
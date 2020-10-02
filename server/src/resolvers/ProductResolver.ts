import { ProductInput, ProductUpdateInput } from '../inputs/CreateProductInput';
import { Int , Arg, Mutation, Query, Resolver} from 'type-graphql';
import { Product } from '../entity/Product'

@Resolver()
export class ProductResolver {
  @Query(() => [Product])
  allProducts() {
    return Product.find()
  }

  @Mutation(() => Product)
    async createProduct(@Arg("data", () => ProductInput) data: ProductInput) {
    const product = await Product.create(data).save();
    return product;
  }

  @Mutation(() => Product)
  async findProductById(@Arg("id", () => Int) id: number) {
    const user = await Product.findOne({ where: { id } })
    return user;
  }

  @Mutation(() => Boolean)
  async updateProduct(
    @Arg("id", () => Int) id: number,
    @Arg("input", () => ProductUpdateInput) input: ProductUpdateInput
  ) {
    await Product.update({ id }, input);
    return true;
  }

  @Mutation(() => Boolean)
  async deleteProduct(@Arg("id", () => Int) id: number) {
    await Product.delete({ id });
    return true;
  }


}
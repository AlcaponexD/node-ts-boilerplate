import { EntityRepository, Repository, getRepository } from 'typeorm';
import Product from '../entities/Product';
import iProductRecommendResponse from '../../interfaces/ProductRecommendResponse';
import iShowProductResponse from '../../interfaces/ShowProductResponse';

@EntityRepository(Product)
class ProductRepository extends Repository<Product> {
  public async findByUrl(url: string): Promise<Product | undefined> {
    const product = await this.findOne({
      where: {
        url,
      },
    });

    return product;
  }
  public async findRecommends(): Promise<
    iProductRecommendResponse[] | undefined
  > {
    const products = await getRepository(Product)
      .createQueryBuilder('product')
      .select([
        'product.id',
        'product.title',
        'product.url',
        'product.avatar',
        'product.price',
        'product.description',
        'product.classification',
        'product.created_at',
      ])
      .leftJoin('product.store', 'store')
      .leftJoin('product.user', 'user')
      .leftJoin('product.category', 'category')
      .addSelect([
        'store.id',
        'store.title',
        'user.id',
        'user.name',
        'category.id',
        'category.title',
      ])
      .where({
        in_review: 0,
        published: 1,
      })
      .getMany();
    return products;
  }
  public async findProductById(
    id: string,
  ): Promise<iShowProductResponse | undefined> {
    const product = await getRepository(Product)
      .createQueryBuilder('product')
      .select([
        'product.id',
        'product.title',
        'product.url',
        'product.avatar',
        'product.price',
        'product.description',
        'product.classification',
        'product.created_at',
      ])
      .leftJoin('product.store', 'store')
      .leftJoin('product.user', 'user')
      .leftJoin('product.category', 'category')
      .addSelect([
        'store.id',
        'store.title',
        'user.id',
        'user.name',
        'category.id',
        'category.title',
      ])
      .where({
        id,
      })
      .getOneOrFail();
    return product;
  }
}
export default ProductRepository;

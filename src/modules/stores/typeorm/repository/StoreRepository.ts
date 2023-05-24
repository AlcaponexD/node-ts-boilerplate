import { EntityRepository, Repository } from 'typeorm';
import Store from '../entities/Store';

@EntityRepository(Store)
class StoreRepository extends Repository<Store> {
  public async findByUrl(url: string): Promise<Store | undefined> {
    const store = await this.findOne({
      where: {
        url,
      },
    });

    return store;
  }
}

export default StoreRepository;

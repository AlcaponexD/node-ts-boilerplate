import { Router } from 'express';
import categoryRouter from '../../../modules/categories/routes/category.routes';
import productRouter from '../../../modules/products/routes/product.routes';
import storeRouter from '../../../modules/stores/routes/store.routes';
import passwordRouter from '../../../modules/users/routes/password.routes';
import sessionsRouter from '../../../modules/users/routes/session.routes';
import usersRouter from '../../../modules/users/routes/users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/products', productRouter);
routes.use('/store', storeRouter);
routes.use('/categories', categoryRouter);

export default routes;

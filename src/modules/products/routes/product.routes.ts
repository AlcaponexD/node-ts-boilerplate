import { Segments, celebrate } from 'celebrate';
import { Router } from 'express';
import Joi from 'joi';
import isAuthenticated from '../../../shared/http/middlewares/isAuthenticated';
import ProductControlller from '../controllers/ProductController';

const productController = new ProductControlller();
const productRouter = Router();

productRouter.post(
  '/',
  isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      title: Joi.string(),
      price: Joi.number(),
      url: Joi.string().required(),
      avatar: Joi.any(),
      description: Joi.string(),
      category_name: Joi.string(),
      store_id: Joi.string(),
    },
  }),
  productController.create,
);

productRouter.get('/recommends', productController.listRecommends);
productRouter.get(
  '/show/me',
  isAuthenticated,
  productController.showMyProducts,
);
productRouter.get('/:id', productController.showProduct);
productRouter.put(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      title: Joi.string(),
      price: Joi.number(),
      avatar: Joi.any(),
      description: Joi.string(),
      category_name: Joi.string(),
    },
  }),
  productController.update,
);

export default productRouter;

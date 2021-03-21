import { Router } from 'express';
import { serve, setup } from 'swagger-ui-express';

import swaggerFile from '../../swagger.json';

const swaggerRouter = Router();

swaggerRouter.use('/', serve, setup(swaggerFile));

export { swaggerRouter };

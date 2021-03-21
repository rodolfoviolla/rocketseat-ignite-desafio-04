import { Router } from 'express';

import { swaggerRouter } from './swagger';
import { usersRoutes } from './users.routes';

const routes = Router();

routes.use('/api-docs', swaggerRouter);

routes.use('/users', usersRoutes);

export { routes };

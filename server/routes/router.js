import homeRouter from '../domains/home/homeRouter';
import projectRouter from '../domains/project/projectRouter';

const addRoutes = (app) => {
  // agregando ruta home
  app.use('/', homeRouter);
  app.use('/project', projectRouter)
};

export default { addRoutes };

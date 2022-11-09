import homeRouter from '../home/homeRouter';

const addRoutes = (app) => {
  // agregando ruta home
  app.use('/', homeRouter);
};

export default { addRoutes };

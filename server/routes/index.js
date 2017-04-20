import Users from '../controller/Users';

const routes = (router) => {
  router.post('/signup', Users.create);
};


export default routes;

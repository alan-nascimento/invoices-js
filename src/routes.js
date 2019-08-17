import Router from 'express';
import invoices from './models/invoices';

const routes = Router();

routes.get('/', (req, res) => res.sendFile(`${__dirname}/public/index.html`));
routes.get('/invoices', (req, res) => res.json(invoices));

export default routes;

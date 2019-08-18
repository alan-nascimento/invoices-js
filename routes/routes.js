import Router from 'express';
import invoices from '../models/invoices';

const routes = Router();

routes.get('/invoices', (req, res) => res.json(invoices));

export default routes;

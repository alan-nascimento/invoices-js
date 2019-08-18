import { log } from './utils/promise-helpers.js';
import invoicesService from './services/service.js';

document
  .getElementById('getInvoices')
  .onclick = () => invoicesService
    .sumItems('2143')
    .then(log)
    .catch(log);

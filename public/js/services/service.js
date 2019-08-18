import { handleStatus } from '../utils/promise-helpers.js';
import { partialize, pipe } from '../utils/operators.js';

const API = 'http://localhost:3000/invoices';

const getItemsFromInvoices = (invoices) => invoices.flatMap((invoice) => invoice.items);
const filterItemsByCode = (code, items) => items.filter((item) => item.code === code);
const sumItemsValue = (items) => items.reduce((total, item) => total + item.value, 0);

const invoicesService = {
  listAll() {
    return fetch(API)
      .then(handleStatus)
      .catch((err) => Promise.reject(new Error(`Unable to get invoices. ${err}`)));
  },
  sumItems(code) {
    const filterItems = partialize(filterItemsByCode, code);
    const sumItems = pipe(getItemsFromInvoices, filterItems, sumItemsValue);

    return this.listAll().then(sumItems);
  },
};

export default invoicesService;

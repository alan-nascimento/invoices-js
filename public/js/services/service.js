import { handleStatus } from '../utils/promise-helpers.js';

const API = 'http://localhost:3000/invoices';

const sumItems = (code) => (invoices) => invoices
  .flatMap((invoice) => invoice.items)
  .filter((invoice) => invoice.code === code)
  .reduce((total, item) => total + item.value, 0);

const invoicesService = {
  listAll() {
    return fetch(API)
      .then(handleStatus)
      .catch((err) => {
        console.log(err);
        return Promise.reject(new Error('Unable to get invoices.'));
      });
  },
  sumItems(code) {
    return this.listAll().then(sumItems(code));
  },
};

export default invoicesService;

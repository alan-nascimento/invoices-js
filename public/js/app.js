import handleStatus from './utils/promise-helpers.js';

document
  .getElementById('getInvoices')
  .onclick = () => fetch('http://localhost:3000/invoices')
    .then(handleStatus)
    .then(console.log)
    .catch(console.log);

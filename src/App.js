import express from 'express';

class App {
  constructor() {
    this.express = express();
  }
}

export default new App().express;

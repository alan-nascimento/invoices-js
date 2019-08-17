import express from "express";

class App {
  express;
  constructor() {
    this.express = express();
  }
}

export default new App().express;

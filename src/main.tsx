import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { createServer, Model, Server } from "miragejs";

createServer({

  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [{
        id:1,
        title: 'Freelancer de website',
        type: 'deposit',
        category: 'Dev',
        amount:6000,
        createdAt: new Date('2021-02-12'),
      }],
    })
  },

 routes(){
   this.namespace = 'api';
   this.get('/transactions', () => {
     return this.schema.all('transaction')
   })
   this.post('/transactions', (schema, request) => {
     const data = JSON.parse(request.requestBody)

     return schema.create('transaction', data)
   })
 }
})



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
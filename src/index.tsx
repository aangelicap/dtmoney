import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';


createServer({

  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title: 'Freelancer web',
          type: 'deposit',
          category: 'Job',
          amount: 6000,
          createdAt: new Date('2021-05-12 09:00:03'),
        },
        {
          id: 3,
          title: 'Compra de equipamentos',
          type: 'withdraw',
          category: 'Job',
          amount: 10000,
          createdAt: new Date('2021-06-12 09:00:03'),
        },
        {
          id: 4,
          title: 'Compra de mercado',
          type: 'withdraw',
          category: 'Comida',
          amount: 50,
          createdAt: new Date('2021-06-12 09:00:03'),
        },
        {
          id: 5,
          title: 'Salário mensal',
          type: 'deposit',
          category: 'Job',
          amount: 5000,
          createdAt: new Date('2021-06-01 09:00:03'),
        },
        {
          id: 6,
          title: 'Viagem',
          type: 'withdraw',
          category: 'Lazer',
          amount: 1100,
          createdAt: new Date('2021-06-06 09:00:03'),
        },
      ]
    });
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

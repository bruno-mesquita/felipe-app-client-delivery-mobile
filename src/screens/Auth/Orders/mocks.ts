const logoMock = require('../../../assets/images/mocks/raio_de_luz.jpg');

export default [
  {
    id: '1',
    name: 'Pizzaria Roma',
    photo: {
      id: '1',
      encoded: logoMock,
    },
    total: 50.4,
    avaliation: null,
    active: true,
    date: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Bar do Bruno',
    photo: {
      id: '2',
      encoded: logoMock,
    },
    total: 25.45,
    avaliation: null,
    active: false,
    date: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Beco Burger',
    photo: {
      id: '3',
      encoded: logoMock,
    },
    total: 35.45,
    avaliation: 4.5,
    active: false,
    date: new Date().toISOString(),
  },
  {
    id: '4',
    name: 'Restaurante Canoa',
    photo: {
      id: '4',
      encoded: logoMock,
    },
    total: 80.5,
    avaliation: null,
    active: false,
    date: new Date().toISOString(),
  },
];

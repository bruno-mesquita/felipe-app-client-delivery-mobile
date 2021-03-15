import { Establishment } from './props';

const data: Establishment = {
  id: '1',
  name: 'Lanchonete Raio de Luz',
  rate: 4.4,
  fee: 5.5,
  menus: [
    {
      id: '1',
      name: 'Lanches',
      products: [
        {
          id: '1',
          name: 'X - Ratão',
          description:
            'Tudo que for encontrado embaixo da pia, Tudo que for encontrado embaixo da pia, Tudo que for encontrado embaixo da pia',
          image: {
            id: '1',
            encoded: require('../../../assets/images/mocks/pizza.png'),
          },
          price: 40,
        },
        {
          id: '2',
          name: 'X - Ratão',
          description: 'Tudo que for encontrado embaixo da pia',
          image: {
            id: '1',
            encoded: require('../../../assets/images/mocks/pizza.png'),
          },
          price: 40,
        },
        {
          id: '3',
          name: 'X - Ratão',
          description: 'Tudo que for encontrado embaixo da pia',
          image: {
            id: '1',
            encoded: require('../../../assets/images/mocks/pizza.png'),
          },
          price: 40,
        },
        {
          id: '4',
          name: 'X - Ratão',
          description: 'Tudo que for encontrado embaixo da pia',
          image: {
            id: '1',
            encoded: require('../../../assets/images/mocks/pizza.png'),
          },
          price: 40,
        },
      ],
    },
    {
      id: '2',
      name: 'Açais',
      products: [
        {
          id: '1',
          name: 'Açai 300ml',
          description: 'Açai da marca Rio puro',
          image: {
            id: '1',
            encoded: require('../../../assets/images/mocks/pizza.png'),
          },
          price: 10,
        },
      ],
    },
    {
      id: '3',
      name: 'Pizzas',
      products: [],
    },
    {
      id: '4',
      name: 'Bebidas',
      products: [],
    },
  ],
  image: {
    id: '1',
    encoded: require('../../../assets/images/mocks/raio_de_luz.jpg'),
  },
};

const apiMock = {
  get: async (path: string) => data,
};

export default apiMock;

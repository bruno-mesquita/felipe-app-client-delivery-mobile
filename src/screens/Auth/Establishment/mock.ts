import { Establishment } from './props';

const data: Establishment = {
  id: 1,
  name: 'Lanchonete Raio de Luz',
  rate: 4.4,
  fee: 5.5,
  image: require('../../../assets/images/mocks/raio_de_luz.jpg'),
};

const menus = [
  {
    id: 1,
    name: 'Lanches',
  },
  {
    id: 2,
    name: 'Açais',
  },
  {
    id: 3,
    name: 'Pizzas',
    products: [],
  },
  {
    id: 4,
    name: 'Bebidas',
    products: [],
  },
];

const products = [
  {
    id: 9,
    name: 'Açai 300ml',
    description: 'Açai da marca Rio puro',
    image: require('../../../assets/images/mocks/pizza.png'),
    price: 10,
    menuId: 2,
  },
  {
    id: 1,
    name: 'X - Ratão',
    description:
      'Tudo que for encontrado embaixo da pia, Tudo que for encontrado embaixo da pia, Tudo que for encontrado embaixo da pia',
    image: require('../../../assets/images/mocks/pizza.png'),
    price: 40,
    menuId: 1,
  },
  {
    id: 2,
    name: 'X - Ratão',
    description: 'Tudo que for encontrado embaixo da pia',
    image: require('../../../assets/images/mocks/pizza.png'),
    price: 40,
    menuId: 1,
  },
  {
    id: 3,
    name: 'X - Ratão',
    description: 'Tudo que for encontrado embaixo da pia',
    image: require('../../../assets/images/mocks/pizza.png'),
    price: 40,
    menuId: 1,
  },
  {
    id: 4,
    name: 'X - Ratão',
    description: 'Tudo que for encontrado embaixo da pia',
    image: require('../../../assets/images/mocks/pizza.png'),
    price: 40,
    menuId: 1,
  },
  {
    id: 5,
    name: 'X - Ratão',
    description: 'Tudo que for encontrado embaixo da pia',
    image: require('../../../assets/images/mocks/pizza.png'),
    price: 40,
    menuId: 1,
  },
  {
    id: 6,
    name: 'X - Ratão',
    description: 'Tudo que for encontrado embaixo da pia',
    image: require('../../../assets/images/mocks/pizza.png'),
    price: 40,
    menuId: 1,
  },
];

const apiMock = {
  get: async (path: string) => ({ data: { result: data } }),
  getMenus: async () => ({ data: { result: menus } }),
  getProducts: async (menuId: number) => ({
    data: { result: products.filter(item => item.menuId === menuId) },
  }),
};

export default apiMock;

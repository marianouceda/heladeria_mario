const productsApi = [
    {
        id: 1,
        category: 'Helados',
        name: '1/4 Kilogramo',
        // image: ,
        price: 450,
        description: '250 gramos de helado con 3 gustos a elección. Opcionales: vasito de pasta, cuchuritas y salsa.'
    },
    {
        id: 2,
        category: 'Helados',
        name: '1/2 Kilogramo',
        // image: ,
        price: 850,
        description: '500 gramos de helado con 4 gustos a elección. Opcionales: vasito de pasta, cuchuritas y salsa.'
    },
    {
        id: 3,
        category: 'Helados',
        name: '1 Kilogramo',
        // image: ,
        price: 1700,
        description: '1000 gramos de helado con 4 gustos a elección. Opcionales: vasito de pasta, cuchuritas y salsa.'
    },
    {
        id: 4,
        category: 'Postres',
        name: 'Bombón Escocés',
        // image: ,
        price: 350,
        description: 'Helado de crema americana con centro de dulce de leche repostero, recubierto con chocolate y decorado con almendra'
    },
    {
        id: 5,
        category: 'Postre',
        name: 'Bombón Suizo',
        // image: ,
        price: 350,
        description: 'Helado de chocolate con centro de dulce de leche repostero, recubierto con chocolate y decorado con cereza al maraschino'
    },
    {
        id: 6,
        category: 'Postres',
        name: 'Bombón Mario',
        // image: ,
        price: 350,
        description: 'Helado de dulce de leche con centro de dulce de leche repostero, recubierto con chocolate y decorado con nuez'
    },
    {
        id: 7,
        category: 'Postres',
        name: 'Almendrado',
        // image: ,
        price: 350,
        description: 'Porción de helado de almendado relleno de trozos de almendras con cobertura de crocante de maní.'
    },
    {
        id: 8,
        category: 'Postres',
        name: 'Mixto',
        // image: ,
        price: 300,
        description: 'Porción de helado de frutilla, granizado y chocolate con centro de dulce de leche repostero.'
    },
    {
        id: 9,
        category: 'Postres',
        name: 'Palito Helado',
        // image: ,
        price: 150,
        description: 'Helado de frutilla o dulce de leche.'
    },
    {
        id: 10,
        category: 'Postres',
        name: 'Palito Bombón',
        // image: ,
        price: 250,
        description: 'Helado de crema americana con baño de chocolate.'
    },
    {
        id: 11,
        category: 'Otros',
        name: 'Tortas Heladas',
        // image: ,
        // price: ,
        description: 'Elaboración únicamente por pedido con anticipación. Precio por kilogramo.'
    },
];

export const getProductById = (id) =>{
    return productsApi[(id-1)];
  }

export default productsApi;
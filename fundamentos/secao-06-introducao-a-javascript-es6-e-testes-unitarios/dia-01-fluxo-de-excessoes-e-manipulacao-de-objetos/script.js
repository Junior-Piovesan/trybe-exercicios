const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const nomeDelivery = order.order.delivery.deliveryPerson;
    const nome = order.name;
    const telefone = order.phoneNumber;
    const rua = order.address.street;
    const numero = order.address.number;
    const ap = order.address.apartment;
    return `Olá ${nomeDelivery}, entrega para: ${nome}, Telefone: ${telefone}, R. ${rua}, Nº:${numero}, AP:${ap}.`  
  };
  console.log(customerInfo(order));

  const alteraValue = () => {
    const Nome = order.order.delivery.deliveryPerson = 'Luiz Silva';
    const valor = order.payment.total = 50;
  }
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    alteraValue();
    const nomeDelivery = order.order.delivery.deliveryPerson;
    const pizzas = Object.keys(order.order.pizza);
    const bebida = order.order.drinks.coke.type;
    const valor = order.payment.total;
    return `Olá ${nomeDelivery}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${bebida} é de ${valor},00.`;
  };
  console.log(orderModifier(order));
  
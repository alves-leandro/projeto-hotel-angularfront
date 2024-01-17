export interface Models {
  Room: {
    id: string;
    number: number;
    status: string;
    type: string;
    capacityAdults: number;
    capacityChildren: number;
    imageUrl: string;
    value: number;
  };

  User: {
    id: string;
    username: string;
    name: string;
    email: string;
    password: string;
    rule: string;
  };

  Promotion: {
    id: string;
    name: string;
    details: string;
    value: number;
    initialDate: string;
    endDate: string;
  };

  Transaction: {
    id: string;
    reservationId: string;
    reservationsDate: string;
    price: number;
  };

  Reservation: {
    id: string;
    userId: string;
    roomId: string;
    promotionId: string;
    endDate: string;
    initialDate: string;
    adults: number;
    children: number;
    totalValue: number;
    Promotion: {
      id: string;
      name: string;
      details: string;
      value: number;
      initialDate: string;
      endDate: string;
    };
  };

  UserInfo: {
    id: string;
    cpf: string;
    contact: string;
    nationality: string;
    emergency_contact: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    userId: string;
  };

  Checkin: {
    id: string;
    checkin_date: string;
    userId: string;
    reservationId: string;
  };

  Checkout: {
    id: string;
    checkout_date: string;
    userId: string;
    reservationId: string;
  };

  KitchenDishes: {
    id: string;
    name: string;
    description: string;
    price: number;
  };

  Supplies: {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
  };

  ReservationDish: {
    id: string;
    reservationId: string;
    kitchenDishesId: string;
  };

  ReservationSupplies: {
    id: string;
    reservationId: string;
    supplyId: string;
  };
}

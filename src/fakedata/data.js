const foods = [
  {
    title: 'Healthy Meal Plan',
    subtitle: 'How we dream about our future',
    description:
      'A delicious dish made with freshly bought okra. Grab some mustard oil, cumin seeds, fennel seeds, finely-chopped onions, ginger and a pinch of amchoor. We promise you ll make this recipe a regular affair in your weekly menu',
    img: 'https://i.ibb.co/BcP5mnR/lunch1.png',
    catagories: 'lunch',
    price: 9.99,
    id: 1,
  },
  {
    title: 'Fried Chicken Bento',
    subtitle: 'How we dream about our future',
    description:
      'A classic dish that never goes out of style. The quintessential chana kulcha  needs only a few ingredients - cumin powder, ginger, coriander powder, carom powder and some mango powder, which is what gives the chana its sour and tangy taste.',
    img: 'https://i.ibb.co/5xDqGxh/lunch2.png',
    catagories: 'lunch',
    price: 12.99,
    id: 2,
  },
  {
    title: 'Trragon-Rubbed-Salmon',
    subtitle: 'How we dream about our future',
    description:
      'Eggs are a versatile food that can be cooked for any meal of the day. From breakfast to dinner, it can be a go-to food. Here is a mildly-spiced egg curry made with garlic, onions, a whole lot of kasuri methi, fresh cream, yogurt and fresh coriander. It can be paired with plain chapati, paratha, rice, biryani or pulao depending upon your choice. You can also serve pickle along with it',
    img: 'https://i.ibb.co/KGBysH4/lunch3.png',
    catagories: 'lunch',
    price: 25.99,
    id: 3,
  },
  {
    title: 'Indian Lunch',
    subtitle: 'How we dream about our future',
    description:
      'A staple in almost every household, Gujarati kadhi is a lovely curry which is simple, light and it is very easy to make. A lovely Gujarati-style kadhi made with yogurt, gram flour, curry leaves and ginger, this one has sweet undertones. This cooling curry is great to escape the heat',
    img: 'https://i.ibb.co/M60bPjB/lunch4.png',
    catagories: 'lunch',
    price: 15.99,
    id: 4,
  },
  {
    title: 'Beaf Steak',
    subtitle: 'How we dream about our future',
    description:
      'Eggs are a versatile food that can be cooked for any meal of the day. From breakfast to dinner, it can be a go-to food. Here is a mildly-spiced egg curry made with garlic, onions, a whole lot of kasuri methi, fresh cream, yogurt and fresh coriander. It can be paired with plain chapati, paratha, rice, biryani or pulao depending upon your choice. You can also serve pickle along with it',
    img: 'https://i.ibb.co/j30WMLC/lunch5.png',
    catagories: 'lunch',
    price: 7.99,
    id: 5,
  },
  {
    title: 'Honey Soy Salmon',
    subtitle: 'How we dream about our future',
    description:
      'Eggs are a versatile food that can be cooked for any meal of the day. From breakfast to dinner, it can be a go-to food. Here is a mildly-spiced egg curry made with garlic, onions, a whole lot of kasuri methi, fresh cream, yogurt and fresh coriander. It can be paired with plain chapati, paratha, rice, biryani or pulao depending upon your choice. You can also serve pickle along with it',
    img: 'https://i.ibb.co/6tK5Tks/lunch6.png',
    catagories: 'lunch',
    price: 20.5,
    id: 6,
  },
  {
    title: 'Salmon with Grapefruits',
    subtitle: 'How we dream about our future',
    description:
      'Eggs are a versatile food that can be cooked for any meal of the day. From breakfast to dinner, it can be a go-to food. Here is a mildly-spiced egg curry made with garlic, onions, a whole lot of kasuri methi, fresh cream, yogurt and fresh coriander. It can be paired with plain chapati, paratha, rice, biryani or pulao depending upon your choice. You can also serve pickle along with it',
    img: 'https://i.ibb.co/FHXVP2p/dinner1.png',
    catagories: 'dinner',
    price: 9.99,
    id: 7,
  },
  {
    title: 'Lemony Salmon',
    subtitle: 'How we dream about our future',
    description:
      'Eggs are a versatile food that can be cooked for any meal of the day. From breakfast to dinner, it can be a go-to food. Here is a mildly-spiced egg curry made with garlic, onions, a whole lot of kasuri methi, fresh cream, yogurt and fresh coriander. It can be paired with plain chapati, paratha, rice, biryani or pulao depending upon your choice. You can also serve pickle along with it',
    img: 'https://i.ibb.co/2Y5Wrr0/dinner2.png',
    catagories: 'dinner',
    price: 12.99,
    id: 8,
  },
  {
    title: 'Pork Tenderiain',
    subtitle: 'How we dream about our future',
    description:
      'Eggs are a versatile food that can be cooked for any meal of the day. From breakfast to dinner, it can be a go-to food. Here is a mildly-spiced egg curry made with garlic, onions, a whole lot of kasuri methi, fresh cream, yogurt and fresh coriander. It can be paired with plain chapati, paratha, rice, biryani or pulao depending upon your choice. You can also serve pickle along with it',
    img: 'https://i.ibb.co/YPvpNvg/dinner3.png',
    catagories: 'dinner',
    price: 23.99,
    id: 9,
  },
  {
    title: 'Baked Chicken',
    subtitle: 'How we dream about our future',
    description:
      'Eggs are a versatile food that can be cooked for any meal of the day. From breakfast to dinner, it can be a go-to food. Here is a mildly-spiced egg curry made with garlic, onions, a whole lot of kasuri methi, fresh cream, yogurt and fresh coriander. It can be paired with plain chapati, paratha, rice, biryani or pulao depending upon your choice. You can also serve pickle along with it',
    img: 'https://i.ibb.co/dtj5k2X/dinner4.png',
    catagories: 'dinner',
    price: 15.99,
    id: 10,
  },
  {
    title: 'Curlic Butter baked salmon',
    subtitle: 'How we dream about our future',
    description:
      'Eggs are a versatile food that can be cooked for any meal of the day. From breakfast to dinner, it can be a go-to food. Here is a mildly-spiced egg curry made with garlic, onions, a whole lot of kasuri methi, fresh cream, yogurt and fresh coriander. It can be paired with plain chapati, paratha, rice, biryani or pulao depending upon your choice. You can also serve pickle along with it',
    img: 'https://i.ibb.co/sK9jxQ0/dinner5.png',
    catagories: 'dinner',
    price: 7.99,
    id: 11,
  },
  {
    title: 'French fries with cheese',
    subtitle: 'How we dream about our future',
    description:
      'Eggs are a versatile food that can be cooked for any meal of the day. From breakfast to dinner, it can be a go-to food. Here is a mildly-spiced egg curry made with garlic, onions, a whole lot of kasuri methi, fresh cream, yogurt and fresh coriander. It can be paired with plain chapati, paratha, rice, biryani or pulao depending upon your choice. You can also serve pickle along with it',
    img: 'https://i.ibb.co/8YmrN9g/dinner6.png',
    catagories: 'dinner',
    price: 19.99,
    id: 12,
  },
  {
    title: 'Bagel and cream cheese',
    subtitle: 'How we dream about our future',
    description:
      'Eggs are a versatile food that can be cooked for any meal of the day. From breakfast to dinner, it can be a go-to food. Here is a mildly-spiced egg curry made with garlic, onions, a whole lot of kasuri methi, fresh cream, yogurt and fresh coriander. It can be paired with plain chapati, paratha, rice, biryani or pulao depending upon your choice. You can also serve pickle along with it',
    img: 'https://i.ibb.co/MgJBfpR/breakfast1.png',
    catagories: 'breakfast',
    price: 9.99,
    id: 13,
  },
  {
    title: 'Breakfast sandwich',
    subtitle: 'How we dream about our future',
    description:
      'Eggs are a versatile food that can be cooked for any meal of the day. From breakfast to dinner, it can be a go-to food. Here is a mildly-spiced egg curry made with garlic, onions, a whole lot of kasuri methi, fresh cream, yogurt and fresh coriander. It can be paired with plain chapati, paratha, rice, biryani or pulao depending upon your choice. You can also serve pickle along with it',
    img: 'https://i.ibb.co/QYCPS1T/breakfast2.png',
    catagories: 'breakfast',
    price: 12.99,
    id: 14,
  },
  {
    title: 'baked chicken',
    subtitle: 'How we dream about our future',
    description:
      'Eggs are a versatile food that can be cooked for any meal of the day. From breakfast to dinner, it can be a go-to food. Here is a mildly-spiced egg curry made with garlic, onions, a whole lot of kasuri methi, fresh cream, yogurt and fresh coriander. It can be paired with plain chapati, paratha, rice, biryani or pulao depending upon your choice. You can also serve pickle along with it',
    img: 'https://i.ibb.co/4ZrvM55/breakfast3.png',
    catagories: 'breakfast',
    price: 23.99,
    id: 15,
  },
  {
    title: 'Eggs benedict',
    subtitle: 'How we dream about our future',
    description:
      'Eggs are a versatile food that can be cooked for any meal of the day. From breakfast to dinner, it can be a go-to food. Here is a mildly-spiced egg curry made with garlic, onions, a whole lot of kasuri methi, fresh cream, yogurt and fresh coriander. It can be paired with plain chapati, paratha, rice, biryani or pulao depending upon your choice. You can also serve pickle along with it',
    img: 'https://i.ibb.co/JB5ZtGk/breakfast4.png',
    catagories: 'breakfast',
    price: 15.99,
    id: 16,
  },
  {
    title: 'Toast fried Egg Butter',
    subtitle: 'How we dream about our future',
    description:
      'Eggs are a versatile food that can be cooked for any meal of the day. From breakfast to dinner, it can be a go-to food. Here is a mildly-spiced egg curry made with garlic, onions, a whole lot of kasuri methi, fresh cream, yogurt and fresh coriander. It can be paired with plain chapati, paratha, rice, biryani or pulao depending upon your choice. You can also serve pickle along with it',
    img: 'https://i.ibb.co/596htG4/breakfast5.png',
    catagories: 'breakfast',
    price: 7.99,
    id: 17,
  },
  {
    title: 'Full breakfast egg toast',
    subtitle: 'How we dream about our future',
    description:
      'Eggs are a versatile food that can be cooked for any meal of the day. From breakfast to dinner, it can be a go-to food. Here is a mildly-spiced egg curry made with garlic, onions, a whole lot of kasuri methi, fresh cream, yogurt and fresh coriander. It can be paired with plain chapati, paratha, rice, biryani or pulao depending upon your choice. You can also serve pickle along with it',
    img: 'https://i.ibb.co/9gbks0C/breakfast6.png',
    catagories: 'breakfast',
    price: 19.99,
    id: 18,
  },
];

export default foods;

const foods = [
  {
    title: 'Healthy Meal Plan',
    subtitle: 'How we dream about our future',
    description:
      'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img: 'https://i.ibb.co/BcP5mnR/lunch1.png',
    catagories: 'lunch',
    price: 9.99,
    id: 1,
  },
  {
    title: 'Fried Chicken Bento',
    subtitle: 'How we dream about our future',
    description:
      'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img: 'https://i.ibb.co/5xDqGxh/lunch2.png',
    catagories: 'lunch',
    price: 12.99,
    id: 2,
  },
  {
    title: 'Trragon-Rubbed-Salmon',
    subtitle: 'How we dream about our future',
    description:
      'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img: 'https://i.ibb.co/KGBysH4/lunch3.png',
    catagories: 'lunch',
    price: 23.99,
    id: 3,
  },
  {
    title: 'Indian Lunch',
    subtitle: 'How we dream about our future',
    description:
      'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img: 'https://i.ibb.co/M60bPjB/lunch4.png',
    catagories: 'lunch',
    price: 15.99,
    id: 4,
  },
  {
    title: 'Beaf Steak',
    subtitle: 'How we dream about our future',
    description:
      'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img: 'https://i.ibb.co/j30WMLC/lunch5.png',
    catagories: 'lunch',
    price: 7.99,
    id: 5,
  },
  {
    title: 'Honey Soy Salmon',
    subtitle: 'How we dream about our future',
    description:
      'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img: 'https://i.ibb.co/6tK5Tks/lunch6.png',
    catagories: 'lunch',
    price: 19.99,
    id: 6,
  },
  {
    title: 'Salmon with Grapefruits',
    subtitle: 'How we dream about our future',
    description:
      'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img: 'https://i.ibb.co/FHXVP2p/dinner1.png',
    catagories: 'dinner',
    price: 9.99,
    id: 7,
  },
  {
    title: 'Lemony Salmon',
    subtitle: 'How we dream about our future',
    description:
      'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img: 'https://i.ibb.co/2Y5Wrr0/dinner2.png',
    catagories: 'dinner',
    price: 12.99,
    id: 8,
  },
  {
    title: 'Pork Tenderiain',
    subtitle: 'How we dream about our future',
    description:
      'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img: 'https://i.ibb.co/YPvpNvg/dinner3.png',
    catagories: 'dinner',
    price: 23.99,
    id: 9,
  },
  {
    title: 'Baked Chicken',
    subtitle: 'How we dream about our future',
    description:
      'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img: 'https://i.ibb.co/dtj5k2X/dinner4.png',
    catagories: 'dinner',
    price: 15.99,
    id: 10,
  },
  {
    title: 'Curlic Butter baked salmon',
    subtitle: 'How we dream about our future',
    description:
      'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img: 'https://i.ibb.co/sK9jxQ0/dinner5.png',
    catagories: 'dinner',
    price: 7.99,
    id: 11,
  },
  {
    title: 'French fries with cheese',
    subtitle: 'How we dream about our future',
    description:
      'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img: 'https://i.ibb.co/8YmrN9g/dinner6.png',
    catagories: 'dinner',
    price: 19.99,
    id: 12,
  },
  {
    title: 'Bagel and cream cheese',
    subtitle: 'How we dream about our future',
    description:
      'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img: 'https://i.ibb.co/MgJBfpR/breakfast1.png',
    catagories: 'breakfast',
    price: 9.99,
    id: 13,
  },
  {
    title: 'Breakfast sandwich',
    subtitle: 'How we dream about our future',
    description:
      'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img: 'https://i.ibb.co/QYCPS1T/breakfast2.png',
    catagories: 'breakfast',
    price: 12.99,
    id: 14,
  },
  {
    title: 'baked chicken',
    subtitle: 'How we dream about our future',
    description:
      'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img: 'https://i.ibb.co/4ZrvM55/breakfast3.png',
    catagories: 'breakfast',
    price: 23.99,
    id: 15,
  },
  {
    title: 'Eggs benedict',
    subtitle: 'How we dream about our future',
    description:
      'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img: 'https://i.ibb.co/JB5ZtGk/breakfast4.png',
    catagories: 'breakfast',
    price: 15.99,
    id: 16,
  },
  {
    title: 'Toast fried Egg Butter',
    subtitle: 'How we dream about our future',
    description:
      'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img: 'https://i.ibb.co/596htG4/breakfast5.png',
    catagories: 'breakfast',
    price: 7.99,
    id: 17,
  },
  {
    title: 'Full breakfast egg toast',
    subtitle: 'How we dream about our future',
    description:
      'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
    img: 'https://i.ibb.co/9gbks0C/breakfast6.png',
    catagories: 'breakfast',
    price: 19.99,
    id: 18,
  },
];

const chooseData = [
  {
    title: 'Fast Delivery',
    description:
      'Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future',
    img: 'https://i.ibb.co/FgMN1nG/first-Delivery.png',
    id: 2001,
    icon: 'https://i.ibb.co/fn4khnZ/Group-245.png',
  },
  {
    title: 'A Good Auto Responder',
    description:
      'Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future',
    img: 'https://i.ibb.co/C25jcdb/good-Responder.png',
    id: 2002,
    icon: 'https://i.ibb.co/ZmkWpHL/Group-1133.png',
  },
  {
    title: 'Home Delivery',
    description:
      'Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future',
    img: 'https://i.ibb.co/TPrT6FY/home-Delivery.png',
    icon: 'https://i.ibb.co/hX3vLsf/Group-204.png',
    id: 2003,
  },
];
export { chooseData };
export default foods;

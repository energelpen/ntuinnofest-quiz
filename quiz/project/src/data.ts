import { FoodItem, Beneficiary } from './types';

export const foodItems: FoodItem[] = [
  {
    id: '1',
    name: 'Low-Sodium Soup',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800',
    correctBeneficiary: 'elderly',
    explanation: 'Low sodium options are essential for elderly health management.'
  },
  {
    id: '2',
    name: 'Whole Grain Cereal',
    image: 'https://images.unsplash.com/photo-1521483756775-c37af386fce9?w=800',
    correctBeneficiary: 'children',
    explanation: 'Nutrient-rich breakfast options support children\'s growth and development.'
  },
  {
    id: '3',
    name: 'Rice',
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=800',
    correctBeneficiary: 'low-income',
    explanation: 'Versatile staple food that provides essential carbohydrates.'
  },
  {
    id: '4',
    name: 'Fresh Fruits',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800',
    correctBeneficiary: 'children',
    explanation: 'Essential vitamins and natural sugars for growing children.'
  },
  {
    id: '5',
    name: 'Canned Fish',
    image: 'https://images.unsplash.com/photo-1597691424453-c9f4ff4e8f21?w=800',
    correctBeneficiary: 'elderly',
    explanation: 'High in protein and omega-3, easy to prepare.'
  },
  {
    id: '6',
    name: 'Dried Beans',
    image: 'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=800',
    correctBeneficiary: 'low-income',
    explanation: 'Cost-effective protein source with long shelf life.'
  }
];

export const beneficiaries: Beneficiary[] = [
  {
    type: 'elderly',
    title: 'Elderly',
    description: 'Focus: Health-friendly options',
    icon: 'Heart'
  },
  {
    type: 'children',
    title: 'Families with Young Children',
    description: 'Focus: Nutrient-rich & kid-friendly',
    icon: 'Baby'
  },
  {
    type: 'low-income',
    title: 'Low-Income Families',
    description: 'Focus: Staple & cost-efficient food',
    icon: 'Home'
  }
];
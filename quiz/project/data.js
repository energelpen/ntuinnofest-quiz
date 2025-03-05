export const foodItems = [
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

export const beneficiaries = [
  {
    type: 'elderly',
    title: 'Elderly',
    description: 'Focus: Health-friendly options',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`
  },
  {
    type: 'children',
    title: 'Families with Young Children',
    description: 'Focus: Nutrient-rich & kid-friendly',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/></svg>`
  },
  {
    type: 'low-income',
    title: 'Low-Income Families',
    description: 'Focus: Staple & cost-efficient food',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`
  }
];
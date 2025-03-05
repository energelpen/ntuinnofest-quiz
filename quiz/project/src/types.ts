export interface FoodItem {
  id: string;
  name: string;
  image: string;
  correctBeneficiary: BeneficiaryType;
  explanation: string;
}

export type BeneficiaryType = 'elderly' | 'children' | 'low-income';

export interface Beneficiary {
  type: BeneficiaryType;
  title: string;
  description: string;
  icon: string;
}
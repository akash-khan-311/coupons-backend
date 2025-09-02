export type TCupons = {
  code: string;
  discountPercentage: number;
  maxUsage: number;
  usedCount: number;
  expiryDate: Date;
  isActive: boolean;
  isDeleted: boolean;
};

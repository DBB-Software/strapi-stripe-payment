enum BillingPeriod {
  MONTH = 'month',
  YEAR = 'year'
}

export enum PlanType {
  ONE_TIME = 'one_time',
  RECURRING = 'recurring'
}

export interface Plan {
  price: number
  id: string
  interval: BillingPeriod
  type: PlanType
  product: Product
  currency: string
}

export interface CreatePlanRequestParams {
  price: string
  type: string
  productId: string
  interval?: string
  currency: string
}

export interface Product {
  id: string
  name: string
  plans: Plan[]
}

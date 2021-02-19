interface CustomerCreationRequest {
  name: string
}

interface CustomerUpdateRequest {
  id: string,
  name?: string
}

interface CustomerDeletionRequest {
  id: string
}

interface EmployeeCreationRequest {
  name: string,
  position: string,
  email: string,
  contact: string
}

interface EmployeeUpdateRequest {
  id: string,
  name?: string,
  position?: string,
  email?: string,
  contact?: string
}

interface EmployeeDeletionRequest {
  id: string
}

interface MenuGroupCreationRequest {
  name: string
}

interface MenuGroupProductAddRequest {
  id: string,
  name: string,
  price: number
}

interface MenuGroupProductUpdateRequest {
  menuGroupID: string,
  productID: string,
  name: string,
  price: number
}

interface MenuGroupProductDeletionRequest {
  menuGroupID: string,
  productID: string
}

interface MenuGroupUpdateRequest {
  id: string,
  name?: string,
  products?: [any]
}

interface MenuGroupDeletionRequest {
  id: string
}

interface DineInOrderCreationRequest {
  table: number,
  numGuests: number,
  notes: string,
  cart: [any],
  paid: boolean
}

interface TakeawayOrderCreationRequest {
  name: string,
  contact: string,
  notes: string,
  cart: [any]
}

interface DeliveryOrderCreationRequest {
  name: string,
  address: string,
  contact: string,
  notes: string,
  cart: [any]
}

interface OrderUpdateRequest {

}

interface OrderDeletionRequest {
  id: string
}

interface ReservationCreationRequest {
  table: number,
  name: string,
  contact: string,
  numGuests: number,
  arrival: Date,
  notes: string
}

interface ReservationUpdateRequest {
  id: string,
  table?: number,
  name?: string,
  contact?: string,
  numGuests?: number,
  arrival?: Date,
  notes?: string
}

interface ReservationDeletionRequest {
  id: string
}

export {
  CustomerCreationRequest,
  CustomerUpdateRequest,
  CustomerDeletionRequest,
  EmployeeCreationRequest,
  EmployeeUpdateRequest,
  EmployeeDeletionRequest,
  MenuGroupCreationRequest,
  MenuGroupProductAddRequest,
  MenuGroupProductUpdateRequest,
  MenuGroupProductDeletionRequest,
  MenuGroupUpdateRequest,
  MenuGroupDeletionRequest,
  DineInOrderCreationRequest,
  TakeawayOrderCreationRequest,
  DeliveryOrderCreationRequest,
  OrderUpdateRequest,
  OrderDeletionRequest,
  ReservationCreationRequest,
  ReservationUpdateRequest,
  ReservationDeletionRequest
}
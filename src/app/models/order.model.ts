export class OrderModel {
    _id: string;
    CustomerID?: string;
    ShipName?: string;
    ShipAddress?: string;
    ShipCity?: string;
    ShipRegion?: string;
    ShipPostalCode?: string;
    ShipCountry?: string;
    EmployeeID?: Number;
    OrderID?: Number;
    ShipVia?: Number;
    Freight?: Number;
    OrderDate?: Date;
    RequiredDate?: Date;
    ShippedDate?: Date;
}

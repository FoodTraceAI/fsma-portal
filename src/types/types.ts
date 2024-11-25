interface AuthState {
  email: string;
  password: string;
  accessToken: string;
  refreshToken: string;
}

interface supShipCTE {
  id: number;
  sscc: {
    sscc: string;
  };
  supCteStatus: string;
  cteReceiveId: number;
  ftlItem: string;
  variety: string;
  tlcId: number;
  quantity: number;
  unitOfMeasure: string;
  foodDesc: string;
  shipToLocationId: number;
  shipFromLocationId: number;
  shipDate: string;
  tlcSourceId: number;
  tlcSourceReference: string;
  referenceDocumentType: string;
  referenceDocumentNum: string;
  dateCreated: Date;
  dateModified: Date;
  isDeleted: boolean;
  dateDeleted: Date;
}

interface cteReceive {
  id: number;
  cteType: string;
  locationId: number;
  ftlItem: string;
  variety: string;
  tlcId: number;
  quantity: number;
  unitOfMeasure: string;
  foodDesc: string;
  ipsLocationId: number;
  receiveDate: string;
  receiveTime: Date;
  tlcSourceId: number;
  tlcSourceReference: string;
  referenceDocumentType: string;
  referenceDocumentNum: string;
  dateCreated: Date;
  dateModified: Date;
  isDeleted: boolean;
  dateDeleted: Date;
}

export type { AuthState, supShipCTE, cteReceive };

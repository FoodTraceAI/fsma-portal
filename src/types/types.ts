interface AuthState {
  email: string;
  password: string;
  accessToken: string;
  refreshToken: string;
}

interface baseShipment {
  tlcId: number;
  tlcVal: string;
  tlcSrc: string;
  tlcSrcRef: string;
  quantity: number;
  unitOfMeasure: string;
  ftlItem: string;
  variety: string;
  prodDesc: string;
  shipFromBus: string;
  shipFromCity: string;
  referenceDocumentType: string;
  referenceDocumentNum: string;
  dateCreated: Date;
  dateModified: Date;
  isDeleted: boolean;
  dateDeleted: Date;
  authUsername: string;
}

interface arrivingShipment extends baseShipment {
  supShipCteId: number;
  supShipStatus: string;
  sscc: string;
  logSerialNo: string;
  shipToBus: string;
  shipToCity: string;
  shipDate: Date;
  type: "arriving"
}

interface receivingShipment extends baseShipment {
  cteReceiveId: number;
  receiveBus: string;
  receiveCity: string;
  receiveDate: Date;
  receiveTime: TimeRanges;
  type: "receiving"
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
  prodDesc: string;
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

interface supShipCTE {
  sscc: string;
  logSerialNo: string;
  supCteStatus: string;
  // cteReceiveId: number;
  ftlItem: string;
  variety: string;
  tlcId: number;
  quantity: number;
  unitOfMeasure: string;
  prodDesc: string;
  shipToLocationId: number;
  shipFromLocationId: number;
  shipDate: Date;
  tlcSourceId: number;
  tlcSourceReference: string;
  referenceDocumentType: string;
  referenceDocumentNum: string;
}

interface tracePlan {
  id: number;
  issueDate: Date;
  locationId: number;
  descProdRecordMaintenance: string;
  descProcIdentifyFoods: string;
  descAssignTraceLotCodes: string;
  tracePlanContactId: number;
  farmMap: [string];
  dateCreated: Date;
  dateModified: Date;
  authUsername: string;
}

export type {
  AuthState,
  cteReceive,
  supShipCTE,
  arrivingShipment,
  receivingShipment,
  tracePlan,
};

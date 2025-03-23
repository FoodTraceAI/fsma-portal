interface AuthState {
  email: string;
  password: string;
  accessToken: string;
  refreshToken: string;
}

// interface arrivingShipments {
//   supShipCteId: number;
//   supShipStatus: string;
//   sscc: string;
//   logSerialNo: string;
//   tlcId: number;
//   tlcVal: string;
//   tlcSrc: string;
//   tlcSrcRef: string;
//   quantity: number;
//   unitOfMeasure: string;
//   ftlItem: string;
//   variety: string;
//   prodDesc: string;
//   shipToBus: string;
//   shipToCity: string;
//   shipFromBus: string;
//   shipFromCity: string;
//   shipDate: Date;
//   referenceDocumentType: string;
//   referenceDocumentNum: string;
//   dateCreated: Date;
//   dateModified: Date;
//   isDeleted: boolean;
//   dateDeleted: Date;
//   authUsername: string;
// }

// interface receivedShipments {
//   id: number;
//   cteReceiveId: number;
//   tlcId: number;
//   tlcVal: string;
//   tlcSrc: string;
//   tlcSrcRef: string;
//   quantity: number;
//   unitOfMeasure: string;
//   ftlItem: string;
//   variety: string;
//   prodDesc: string;
//   receiveBus: string;
//   receiveCity: string;
//   shipFromBus: string;
//   shipFromCity: string;
//   receiveDate: Date;
//   receiveTimeL: TimeRanges;
//   referenceDocumentType: string;
//   referenceDocumentNum: string;
//   dateCreated: Date;
//   dateModified: Date;
//   isDeleted: boolean;
//   dateDeleted: Date;
//   authUsername: string;
// }

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
  arrivingShipment,
  receivingShipment,
  tracePlan,
};

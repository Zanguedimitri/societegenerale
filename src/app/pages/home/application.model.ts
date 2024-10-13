export interface Application {
  id:number,
  label:string,
  applyDate:string,
  interviewDate:string,
  status:'WAITING' | 'PROGRESS' | 'CLOSED',
  hrResponse : HrResponse,
}

export enum HrResponse {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}




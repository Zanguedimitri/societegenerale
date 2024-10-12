export interface Application {
  id:number,
  label:string,
  applyDate:number,
  interviewDate:number,
  status:'WAITING' | 'PROGRESS' | 'CLOSED',
  hrResponse :'PENDING' | 'ACCEPTED' | 'REJECTED', 
}





export class User {
  Id: string;
  UserName: string;
  FullName: string;
  PhoneNumber: string;
  Password: string;
  Address : string;
  DepartmentID: number;
  DepartmentName: string;
  BeginWork: string;
  tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
  localISOTime = (new Date(Date.now() - this.tzoffset)).toISOString().slice(0, -1)

  constructor() {
    this.Id = "";
    this.UserName = "";
    this.FullName = "";
    this.PhoneNumber = "";
    this.Password = "";
    this.Address = "";
    this.BeginWork = this.localISOTime;
}
}

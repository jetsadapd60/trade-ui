export interface SignInResponeModel {
  status: boolean;
  message: string;
  description: string;
  data: Data;
  transactionID: string;
  transactionDateTime: string;
}

export interface Data {
  token: string;
  refreshToken: string;
  clientID: string;
  userID: string;
  fullName: string;
  userType: string;
  roleName: string;
  permission: Permission[];
  permisGroup: string[];
}

interface Permission {
  orderBy: number;
  menuName: string;
  menuNameEn: string;
  menuCode: string;
  menuLink: string;
  isView: boolean;
  isAdd: boolean;
  isEdit: boolean;
  isDelete: boolean;
  isApprove: boolean;
}
export interface ProfileResponesModel {
  status: boolean;
  result: Result;
}

export interface Result {
  pagination: Pagination;
  status: boolean;
  message: string;
  description: string;
  data: DataProfile[];
  transactionID: string;
  transactionDateTime: string;
}

export interface DataProfile {
  pK_AuULLo: string;
  loginDate: string;
  username: string;
  roleName: string;
  marketingTeam?: string;
  ipAddress?: string;
}

interface Pagination {
  total: number;
  pageSize: number;
  count: number;
  currentPage: number;
}
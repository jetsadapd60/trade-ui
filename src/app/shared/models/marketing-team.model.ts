
export interface MarketingTeamResponeModel {
    status: boolean;
    result: DataMarketingTeam[];
  }
  
  export interface DataMarketingTeam {
    pK_SyMTe: string;
    code?: string;
    prefixNo: string;
    name: string;
    sort: number;
    isSystem: boolean;
    active: boolean;
    createBy?: any;
    createDate: string;
    updateBy?: any;
    updateDate?: any;
    authUsers: any[];
    members: any[];
    snapshot_1_Members: any[];
  }
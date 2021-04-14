import { IHistoricalData } from '../historical-data';
export interface IHistoricalDataList{ 
    data: {
      data: Array<IHistoricalData>;
      page: number;
      size: number;
      totalCount: number;
    },
    isUpToDate: boolean,
    isError: boolean,
    errorMessage: string
  };
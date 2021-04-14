import { actionTypes } from '../action-types';
import { IHistoricalDataList } from '../../models/store/historical-data-list';
import { IHistoricalData } from '../../models/historical-data';
import Api from '../api/api';
import { isNNObject } from '../../util/index';

let controller: string = 'search';

export const searchQuote = (text: string, callback: (result: Array<string>) => void) => (dispatch: any) => {
  new Api().get(controller + '/quote/' + text, (result: any, message: string) => {
    if (isNNObject(result) && isNNObject(result.data)) {
      callback(result.data);
    } else {
      callback([]);
    }
  });
};

export const search = (quote: string, page: number, size: number, callback: (result: boolean) => void) => (dispatch: any) => {
  dispatch(getsearchResult({
    data: [],
    page: 0,
    size: 20,
    totalCount: 0
  }, false, false, ''));
  new Api().get(controller + '/' + quote + '/' + page + '/' + size, (result: any, message: string) => {
    if (isNNObject(result) && isNNObject(result.data)) {
      dispatch(getsearchResult({
        data: result.data.data,
        page,
        size,
        totalCount: result.data.totalCount
      }, true, false, ''));
      callback(true);
    } else {
      callback(false);
    }
  });
};

const getsearchResult = (data: {
  data: Array<IHistoricalData>;
  page: number;
  size: number;
  totalCount: number;
}, isUpToDate: boolean, isError: boolean, errorMessage: string) => ({
  type: actionTypes.LOAD_HISTORICALDATALIST,
  payload: { 
    data,
    isUpToDate,
    isError,
    errorMessage
  } as IHistoricalDataList
});
import { actionTypes } from '../action-types';
import { IHistoricalDataList } from '../../models/store/historical-data-list';

const createEmptyResult = (): IHistoricalDataList => ({
    data: {
        data: [],
        page: 0,
        size: 20,
        totalCount: 0
      },
    isUpToDate: false,
    isError: false,
    errorMessage: ""
});

export const HistoricalDataList = (state = createEmptyResult(), action: any) => {
    switch (action.type) {
        case actionTypes.LOAD_HISTORICALDATALIST:
            return handleResult(state, action.payload);
        case actionTypes.RESET:
            state = createEmptyResult();
    }
    return state;
};

const handleResult = (state: IHistoricalDataList, payload: IHistoricalDataList): IHistoricalDataList => {
    return {
        ...state,
        data: payload.data,
        isUpToDate: payload.isUpToDate,
        isError: payload.isError,
        errorMessage: payload.errorMessage
    };
};

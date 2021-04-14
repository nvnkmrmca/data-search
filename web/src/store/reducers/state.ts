import { combineReducers } from 'redux';
import { IAppState } from '../../models/app-state';
import { HistoricalDataList } from './historical-data-list';

export const State = combineReducers<IAppState>({
    HistoricalDataList: HistoricalDataList
});

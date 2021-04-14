import { connect } from 'react-redux';
import { IAppState } from '../models/app-state';
import { searchQuote, search } from '../store/actions/historical-data';
import Page from '../components/home/dashboard';

const mapStateToProps = (state: IAppState, ownProps: any) => ({
    historicalDataList: state.HistoricalDataList,
});
const mapDispatchToProps = (dispatch: any) => ({
    searchQuote: (text: string, callback: (result: Array<string>) => void) => dispatch(searchQuote(text, callback)),
    search: (quote: string, page: number, size: number, callback: (result: boolean) => void) => dispatch(search(quote, page, size, callback))
});

export const Dashboard = connect(mapStateToProps, mapDispatchToProps)(Page);
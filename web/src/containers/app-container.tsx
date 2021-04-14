import { connect } from 'react-redux';
import { IAppState } from '../models/app-state';
import Page from '../components/app-container';

const mapStateToProps = (state: IAppState, ownProps: any) => ({
});
const mapDispatchToProps = (dispatch: any) => ({
});

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(Page);
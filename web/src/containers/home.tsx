import { connect } from 'react-redux';
import { IAppState } from '../models/app-state';
import Page from '../components/home/index';

const mapStateToProps = (state: IAppState, ownProps: any) => ({
});
const mapDispatchToProps = (dispatch: any) => ({
});

export const Home = connect(mapStateToProps, mapDispatchToProps)(Page);
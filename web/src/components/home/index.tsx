import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { View } from '../common/elements';
import Header from './header';
import Footer from './footer';
import { Dashboard as CDashboard} from '../../containers/dashboard';
import NotFound from '../../components/not-found';

export default () => {
  return (
    <View className="container">
      <Header/>
      <View className="content">
        <Switch>
          <Route path={'/'} exact component={CDashboard} />
          <Route component={NotFound} />
        </Switch>
      </View>
      <Footer />
    </View>
  );
}
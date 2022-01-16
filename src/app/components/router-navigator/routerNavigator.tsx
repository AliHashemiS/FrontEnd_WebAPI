import React from 'react';
import { Route, Routes } from 'react-router';
import { RouteModel } from '../../models';

interface props {
  routes:RouteModel[]
}

export class RouterNavigator extends React.Component<props> {
  
  render() {
    return (
      <Routes>
        {this.props.routes.map(route => (<Route key={route.path} path={route.path} element={<route.component/> }/>) )}
      </Routes>);
  }

}

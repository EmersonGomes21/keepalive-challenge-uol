import React from 'react';
import {Route, Redirect} from 'react-router-dom';
export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {

  const signed = localStorage.getItem('@keepalive/connected');

  if (!signed && isPrivate){

    return <Redirect to="/login"/>;
  }


  if (signed && !isPrivate){
    return <Redirect to="/home"/>;
  }


  return(
    <Route
    {...rest}
    render={props =>(
      <Component {...props}/>

    )}

    />

  );
}
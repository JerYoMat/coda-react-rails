import React from "react";
import "./Loading.scss";
import Card from '@material-ui/core/Card'
import { relativeLength } from "highcharts";

const Loading = () => (
    <Card style={{maxWidth: 64, position: 'relative', marginLeft: 'auto', marginRight: 'auto'}}>
    <div className="lds-spinner">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
    </Card>

);

export default Loading;

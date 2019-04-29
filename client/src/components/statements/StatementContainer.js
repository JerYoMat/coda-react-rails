import React from 'react';
import LineChart from '../charts/LineChart';

import Table from './sub-components/Table';
const StatementContainer = ({ statements }) => {
      return (<div className='financial-statements-container'>
          {
            statements && statements.hasOwnProperty('IS') ? 
              (
                <React.Fragment>
                  <LineChart finData={statements['IS']['totalrevenue'].slice(1)} years={statements['info']['fiscalyear'].slice(1)} />
                  <Table title="Income Statement" statement={statements['IS']} fiscalYears={statements['info']['fiscalyear']}/>
                  <Table title="Balance Sheet" statement={statements['BS']} fiscalYears={statements['info']['fiscalyear']}/> <Table title="Cash Flow Statement" statement={statements['CF']} fiscalYears={statements['info']['fiscalyear']}/>
                </React.Fragment>
              ) : 
              ("")
          }
      </div>)
};  


export default StatementContainer;
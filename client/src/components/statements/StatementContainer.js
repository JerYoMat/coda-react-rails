import React from 'react';
import { connect } from 'react-redux'

import Table from './sub-components/Table';
const StatementContainer = ({ statements, companyId }) => (
      <div className='financial-statements-container'>
          {
            statements && statements.hasOwnProperty('IS') ? 
              (
                <React.Fragment>
                  <Table title="Income Statement" statement={statements['IS']} fiscalYears={statements['info']['fiscalyear']}/>
                  <Table title="Balance Sheet" statement={statements['IS']} fiscalYears={statements['info']['fiscalyear']}/> <Table title="Cash Flow Statement" statement={statements['IS']} fiscalYears={statements['info']['fiscalyear']}/>
                </React.Fragment>
              ) : 
              ("")
          }
      </div>
    );  


export default StatementContainer;
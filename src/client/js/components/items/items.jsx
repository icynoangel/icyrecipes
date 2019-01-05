import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Item from './item';

import IconSettings from '@salesforce/design-system-react/components/icon-settings';
import Illustration from '@salesforce/design-system-react/components/illustration';

import Dropdown from '@salesforce/design-system-react/components/menu-dropdown';
import DataTable from '@salesforce/design-system-react/components/data-table';
import DataTableColumn from '@salesforce/design-system-react/components/data-table/column';
// import DataTableCell from '@salesforce/design-system-react/components/data-table/cell';
import DataTableRowActions from '@salesforce/design-system-react/components/data-table/row-actions';

class Items extends Component {
  static propTypes = {
    items: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.columns = [
      <DataTableColumn
        key="callback-name"
        label="Name"
        property="callbackName"
      />,
      <DataTableColumn key="url" label="URL" property="url" />,
      <DataTableColumn key="status" label="Status" property="status" />,
      <DataTableColumn
        key="max-batch-size"
        label="Max Batch Size"
        property="maxBatchSize"
      />,
      <DataTableColumn key="id" label="ID" property="callbackId" />,
      <DataTableRowActions
        key="row-actions"
        options={[
          {
            id: 0,
            label: 'Edit',
            value: 'edit'
          },
          {
            id: 1,
            label: 'Delete',
            value: 'delete'
          }
        ]}
        onAction={this.handleRowAction}
        dropdown={<Dropdown />}
      />
    ];

    this.mockCallbacks = [
      {
        callbackName: 'Test callback 1',
        url: 'https://salesforce.com/callback1',
        status: 'Pending',
        maxBatchSize: 50,
        callbackId: 'b33bc32e-ef60-4bfb-b46e-fb1c721d90fb',
        id: 'b33bc32e-ef60-4bfb-b46e-fb1c721d90fb' // duplicate callbackId for id is marked as required in DataTable
      },
      {
        callbackName: 'Test callback 2',
        url: 'https://salesforce.com/callback2',
        status: 'Verified',
        maxBatchSize: 1000,
        callbackId: '50a4a31c-42f7-4663-9e0a-11e613425688',
        id: '50a4a31c-42f7-4663-9e0a-11e613425688'
      },
      {
        callbackName: 'Test callback 3',
        url: 'https://salesforce.com/callback3',
        status: 'Verified',
        maxBatchSize: 700,
        callbackId: '7ad5d3c6-7a81-4a8f-bcf6-1e20bd37b796',
        id: '7ad5d3c6-7a81-4a8f-bcf6-1e20bd37b796'
      }
    ];
  }

  handleRowAction = (item, action) => {
    console.log(item, action);
  };

  render() {
    const items = this.props.items;

    return (
      <div className="items">
        <IconSettings iconPath="/icons">
          <div className="slds-grid slds-grid_pull-padded slds-grid_vertical-align-center">
            <div className="slds-col_padded">
              <Illustration
                heading="No URL callbacks yet..."
                messageBody="To receive event notifications from Marketing Cloud, register your URL callbacks."
                name="Lake Mountain"
                path="/illustrations/lake-mountain.svg#lake-mountain"
                size="large"
              />
            </div>
          </div>

          <DataTable items={this.mockCallbacks}>{this.columns}</DataTable>
        </IconSettings>
        {items.map((item, key) => {
          return <Item item={item} key={key} />;
        })}
      </div>
    );
  }
}

export default Items;

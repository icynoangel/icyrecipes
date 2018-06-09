import React, {Component} from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Button from './../../src/client/js/components/button/button';
import Modal from './../../src/client/js/components/modal/modal';
import ModalConfirmation from './../../src/client/js/components/modal/modal-confirmation';

class ModalConfirmationStory extends Component {

  constructor(props) {
    super(props);
    this.openConfirmationModal = this.openConfirmationModal.bind(this);

    let modalContainer = document.getElementById('modal');

    if(!modalContainer) {
      modalContainer = document.createElement('div');
      modalContainer.setAttribute('id', 'modal');
      document.body.appendChild(modalContainer);
    }
  }

  openConfirmationModal() {
    this.refs.confirmationModal.open();
  }

  onConfirm() {
    console.log("Confirmed pressed");
  }

  onDeny() {
    console.log("Deny pressed");
  }

  render() {
    return (
      <div>
        <Button
          key="open-confirmation-modal"
          onClick={this.openConfirmationModal}
          caption="Open Modal"
          type="primary"
        />
        <Modal ref="confirmationModal">
          <ModalConfirmation 
            description="Please confirm or deny"
            onConfirm={this.onConfirm}
            onDeny={this.onDeny} />
        </Modal>
      </div>
    );
  }
}

storiesOf('Modal', module)
  .add('Modal confirmation', 
    withInfo({
      text: `Markup of Modal component

        <Modal ref="confirmationModal">
          <ModalConfirmation 
            description="Please confirm or deny"
            onConfirm={this.onConfirm}
            onDeny={this.onDeny} />
        </Modal>
      `,
      source: false,
      propTables: [Modal, ModalConfirmation],
      propTablesExclude: [ModalConfirmationStory],
    })( () => {
      return <ModalConfirmationStory />;
    }) 
  );


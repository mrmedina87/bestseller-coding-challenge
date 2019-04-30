import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CheckBox from '../../presentationals/CheckBox';
import AddGCForm from '../../presentationals/AddGCForm';
import GCList from '../../presentationals/GCList';
import ErrorMessage from '../../presentationals/ErrorMessage';
import * as actions from '../../actions';
import * as sc from './style';

const {
  AddGCLabel,
  StyledAddGiftCard,
  Title,
  Label,
} = sc;

class AddGiftCard extends Component {
  state = {
    showAddGCForm: false,
  }

  handleCheckboxChange = event => {
    this.setState({ showAddGCForm: event.target.checked });
  }

  wasAlreadyAdded = () => {
    const {
      giftCardNumber, controlCode,
    } = this.props.addGC.values;
    const filtered = this.props.giftCards.list.filter(item =>
      item.giftCardNumber === giftCardNumber &&
      item.controlCode === controlCode
    );
    return filtered.length > 0;
  }

  submitHandler = () => {
    if (!this.wasAlreadyAdded()) {
      this.props.giftCardsActions.applyGiftCard();
    } else {
      this.props.giftCardsActions.setErrorMsg('That Gift card was already added');
    }
  }

  render() {
    const checkBoxName = 'hasGiftCards';
    const gcList = this.props.giftCards.list;
    const addGCLabel = 'Please enter the 19-digit number and code from your gift card below.';
    const haveGCLabel = 'Do you have a gift card?';
    return <>
      <StyledAddGiftCard>
        <div>
          <Title>Gift Cards</Title>
          <Label
            htmlFor={checkBoxName}>
            <CheckBox
              name={checkBoxName}
              id={checkBoxName}
              checked={this.state.showAddGCForm}
              onChange={this.handleCheckboxChange}
            />
            <span>
              { haveGCLabel }
            </span>
          </Label>
        </div>
        {
          this.state.showAddGCForm ?
            <>
              <AddGCLabel>
                { addGCLabel }
              </AddGCLabel>
              <GCList gcList={gcList}/>
              <AddGCForm
                onSubmit = {this.submitHandler}
                sending = {this.props.giftCards.isApplying}
              />
            </> :
            ''
        }
        <ErrorMessage errorMsg = {this.props.giftCards.errorMsg} />
      </StyledAddGiftCard>
    </>;
  }
}

const mapStateToProps = (state) => {
  const {
    form,
    giftCards,
  } = state;
  return {
    addGC: form.addGC,
    giftCards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    giftCardsActions: bindActionCreators(actions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddGiftCard);

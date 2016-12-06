import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import validCookieExists from '../../lib/validCookieExists';
import TopBar from '../event/top-bar';
import Button from '../common/Button';
// import EventDetailsHeader from '../general/event-details-header';
import styles from '../../style';

class EventDetails extends Component {

  // constructor (props) {
  //   super(props);
  // }

  componentDidMount () {

    if (validCookieExists() && this.props.shouldGetFBFriends) { //eslint-disable-line

      this.props.getFBFriends(); //eslint-disable-line
    }
  }

  render () {

    const hideNext = this.props.eventDetails.eventName === '' || this.props.eventDetails.eventDescription === '';

    return (
      <View>
        <TopBar location="eventdetails" />
        <View style={styles.container}>
          <Text>
            Enter the name of your event and a description.
          </Text>

          <View style={styles.row}>
            <TextInput
              style={styles.inputStyle}
              handleChange={ this.props.handleChange.bind(this, 'eventName') }
              value={ this.props.eventDetails ? this.props.eventDetails.eventName : '' }
              type="text"
              placeholder="Event name"
            />
          </View>
          <View style={styles.row}>
            <TextInput
              style={styles.inputStyle}
              handleChange={ this.props.handleChange.bind(this, 'eventDescription') }
              value={ this.props.eventDetails ? this.props.eventDetails.eventDescription : '' }
              type="text"
              placeholder="Event description"
            />
          </View>
          <View style={styles.row}>
            <TextInput
              style={styles.inputStyle}
              handleChange={ this.props.handleChange.bind(this, 'eventNote') }
              value={ this.props.eventDetails ? this.props.eventDetails.eventNote : '' }
              placeholder="Leave a note to your friends (optional)"
            />
          </View>
          <View style={styles.row}>

            { (hideNext) &&
              <View />
            }
            { (!hideNext) &&
            <Button
              onPress={Actions.what}
              buttonStyle={styles.buttonStyle}
              buttonTextStyle={styles.buttonTextStyle}
            >
              Next
              </Button>
            }
          </View>
        </View>
      </View>
    );
  }
}

export default EventDetails;

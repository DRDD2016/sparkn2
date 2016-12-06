import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Input from '../general/input';
import AddInput from '../general/add-input';
import EventDetailsHeader from '../general/event-details-header';
import TopBar from '../event/top-bar';
import Button from '../common/Button';
import styles from '../../style';

const EventWhat = ({ eventDetails, eventWhatData, addInput, removeInput, handleEventWhat }) => { // eslint-disable-line react/prop-types

  const inputCount = eventWhatData.length;

  const inputs = eventWhatData.map((value, i) => {

    return (

      <Input
        style={styles.inputStyle}
        handleChange={ handleEventWhat.bind(this, i) }
        key={ i }
        inputCount={ inputCount }
        value={ value }
        inputKey={ i }
        removeInput={ removeInput }
        placeholder="What would you like to do?"
      />

    );
  });

  const hideAddInput = eventWhatData.length >= 3;
  const hideNext = eventWhatData[0] === '';

  return (
    <View>
      <TopBar location="eventdetails/what" />
      <View style={styles.rowEventDetailsHeader}>

        <EventDetailsHeader
          location="Enter details"
          eventName={ eventDetails.eventName }
          eventDescription={ eventDetails.eventDescription }
        />

      </View>

      <View style={styles.container}>
        <Text style={styles.smallMessageText}>
          Enter what your event will be (or leave blank to decide it later).
        </Text>
        <Text style={styles.smallMessageText}>
          You can add more than one option to create a poll.
        </Text>

        { inputs }

        <AddInput data={ eventWhatData } handler={ addInput } />

        <View style={styles.row}>

          { (hideNext) &&
            <View />
          }
          { (!hideNext) &&
            <Button
              onPress={Actions.where}
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
};

export default EventWhat;

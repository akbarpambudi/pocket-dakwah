import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Prayer from '../Prayer';
import {ViewPager} from 'rn-viewpager';
import { Card } from 'react-native-elements';

type Props = {
  selectedDate: string,
  onDateSelected: (selectedDate: any) => void
};

export default class CalendarView extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {};
        this.onDayPress = this.onDayPress.bind(this);
    }

  events = {};

  render() {
      return (
          <View style={styles.container}>
              <View style={{flex:1}}>
                  <Calendar
                      onDayPress={this.onDayPress}
                      style={styles.calendar}
                      hideExtraDays
                      markedDates={{
                          [this.props.selectedDate]: {
                              selected: true,
                              disableTouchEvent: true,
                              selectedDotColor: 'orange'
                          }
                      }}
                  />
              </View>
              <View style={styles.event}>
                  <ViewPager style={{flex:1,padding:5}}>
                      <View>
                          <Card containerStyle={{flex:1}} title={'waktu sholat'}>
                              <Prayer/>
                          </Card>
                      </View>
                      <View>
                          <Card containerStyle={{flex:1}} wrapperStyle={{justifyContent:'center',alignItems:'center'}} title={'Ibadah Sunnah'}>
                              <Text style={{fontSize:16}}>Coming soon</Text>
                          </Card>
                      </View>
                      <View>
                          <Card containerStyle={{flex:1}} wrapperStyle={{justifyContent:'center',alignItems:'center'}} title={'Jadwal Kajian'}>
                              <Text style={{fontSize:16}}>Coming soon</Text>
                          </Card>
                      </View>
                  </ViewPager>
              </View>
          </View>
      );
  }

  onDayPress(day) {
      const {onDateSelected} = this.props;
      onDateSelected(day);
  }
}

const styles = StyleSheet.create({
    calendar: {
        borderTopWidth: 1,
        paddingTop: 5,
        borderBottomWidth: 1,
        borderColor: '#eee',
        height: 350
    },
    event: {
        // height: 350,
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor:'#ececec'
    }
});

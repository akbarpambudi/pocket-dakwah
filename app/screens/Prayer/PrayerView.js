import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

type Props = {
    prayerTimes: any,
    containerStyles:any
}

export default class PrayerView extends Component<Props> {
    render() {
        const {prayerTimes,containerStyles} = this.props;
        return (
            
            <View style={containerStyles}>
                <ListItem title={'Subuh (Fajr)'} rightTitle={prayerTimes.fajr}/> 
                <ListItem title={'Dhuhr'} rightTitle={prayerTimes.dhuhr}/> 
                <ListItem title={'Asr'} rightTitle={prayerTimes.asr}/> 
                <ListItem title={'Maghrib'} rightTitle={prayerTimes.maghrib}/> 
                <ListItem title={'Isha'} rightTitle={prayerTimes.isha}/> 
            </View>
        );
    }
}

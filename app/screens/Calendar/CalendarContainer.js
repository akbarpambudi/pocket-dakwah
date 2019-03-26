import React, { Component } from 'react';
// eslint-disable-next-line react-native/split-platform-components
import {PermissionsAndroid} from 'react-native';
import * as _ from 'lodash';
import CalendarView from './CalendarView';
import { getPrayerTime } from '../../utils/prayerTimeUtils';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as calendarActions from './../../actions/calendarActions';
import * as applicationActions from './../../actions/applicationActions';

type Props = {
    calendar : any;
    application: any;
    calendarActions:any;
    applicationActions:any;
}

export class CalendarContainer extends Component<Props> {

    constructor(props){
        super(props);
        this.onDateSelected = this.onDateSelected.bind(this);
        
    }

    componentDidMount(){
        this.props.calendarActions.setSelectedDate(new Date());
    }


    onDateSelected(date){
        this.props.calendarActions.setSelectedDate(new Date(date.timestamp));
    }

    render() {
        const selectedDate = this.props.calendar.selectedDate.dateString || '';
        return (
            <React.Fragment>
                <CalendarView 
                    onDateSelected={this.onDateSelected} 
                    selectedDate={selectedDate}  
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state)=>{
    return {calendar: state.calendar, application: state.application};
};

const mapActionsToProps = (dispatch)=>({
    calendarActions : bindActionCreators(calendarActions,dispatch),
    applicationActions : bindActionCreators(applicationActions,dispatch)
});

export default connect(mapStateToProps,mapActionsToProps)(CalendarContainer);
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Calendar from './../screens/Calendar';

import React, { Component } from 'react';
// eslint-disable-next-line react-native/split-platform-components
import { View, Text, PermissionsAndroid } from 'react-native';
import { connect } from 'react-redux';
import * as applicationActions from './../actions/applicationActions';
import { bindActionCreators } from 'redux';
import { Header } from 'react-native-elements';
const RNApp = createStackNavigator(
    {
        Calendar: {
            screen: Calendar,
            navigationOptions: { header: (<Header containerStyle={{height:50}} centerComponent={{ text: 'Pocket Dakwah', style: { color: '#fff' } }}/>), gesturesEnabled: false }
        }
    },
    {
        initialRouteName: 'Calendar'
    }
);
const RNAppContainer =  createAppContainer(RNApp);

type Props = {
    application: any,
    applicationActions:any
}
export class NavigationStack extends Component<Props> {

    constructor(props){
        super(props);
        const {geolocation} = navigator;
        this.geolocation = geolocation;
        this.watchId = -1;
    }

    async  requestLocationPermission(){
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'Example App',
                    'message': 'Example App access to your location '
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            throw err;
        }
    }

    componentDidMount(){
        this.requestLocation();
    }

    async requestLocation(){
        try{
            
            if(await this.requestLocationPermission()){
                this.geolocation.getCurrentPosition((position)=>{
                    // eslint-disable-next-line no-console
                    console.log(position);
                    this.props.applicationActions.setAppCoordinates(position.coords);
                },(error)=>{

                    // eslint-disable-next-line no-console
                    console.error(error);
                });
                this.watchId = this.geolocation.watchPosition((position)=>{
                    // eslint-disable-next-line no-console
                    console.log(position);
                    this.props.applicationActions.setAppCoordinates(position.coords);
                },(error)=>{

                    // eslint-disable-next-line no-console
                    console.error(error);
                });
            }else{
                alert('please enable your location manually');
            }
        }catch(err){
            // eslint-disable-next-line no-console
            console.error(err);
        }
    }

    componentWillUnmount(){
        this.geolocation.clearWatch(this.watchId);
    }

    render() {
        if(! this.props.application.coordinates){
            return (<Text>Fetching location...</Text>);
        }
        return (
            <React.Fragment>
                <RNAppContainer {...this.props} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    application : state.application
});

const mapDispatchToProps = (dispatch)=> ({
    applicationActions: bindActionCreators(applicationActions,dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationStack);




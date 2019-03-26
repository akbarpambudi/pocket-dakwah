import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import PrayerView from './PrayerView';
import * as prayerTimeActions from './../../actions/prayerTimeActions';
import * as _ from 'lodash';
type Props = {
    prayerTimes: any[],
    prayerTimeActions:any
}

export class PrayerContainer extends Component<Props> {
  static propTypes = {
      prop: PropTypes
  }

  componentDidMount(){
      this.props.prayerTimeActions.requestPrayerTimes();
  }

  render() {
      return (
          <React.Fragment>
              <PrayerView {...this.props} />
          </React.Fragment>
      );
  }
}

const mapStateToProps = (state) => ({
    prayerTimes :state.prayer
});

const mapDispatchToProps = (dispatch)=>({
    prayerTimeActions: bindActionCreators(prayerTimeActions,dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PrayerContainer);

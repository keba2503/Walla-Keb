import React, { Component } from 'react';
import { adApi, tags } from '../services/api';
import Adcard from './AdCard';
import '../App.css';
import Adfilter  from './filter'


export default class Ads extends Component {
    constructor(props) {
      super(props);
      this.state = {
        ads: '',
        tags: '',
      };
    }
  
  async componentDidMount() {
    const adslist = await adApi();
    this.setState({
      tags: await tags(),
    });
    if (adslist.success) {
      this.setState({
        ads: adslist.results,
      });
    } else {
      return alert('Not logged in');
    }
  }

  render() {
    const { ads } = this.state
    if (ads !== '') {

      return (
        <div>         
          <Adfilter></Adfilter>
          <Adcard data={ads}></Adcard>
        </div>
      );
    } else {
      return <div>Please wait a Moment.</div>;
    }
  }
  }
  
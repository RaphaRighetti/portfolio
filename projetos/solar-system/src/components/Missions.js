import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

const missionsMaped = missions.map((e) => (
  <MissionCard
    name={ e.name }
    year={ e.year }
    country={ e.country }
    destination={ e.destination }
    key={ e.name }
  />
));

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions" className="missionsdiv">
        <Title headline="Missões" />
        {missionsMaped}
      </div>
    );
  }
}

export default Missions;

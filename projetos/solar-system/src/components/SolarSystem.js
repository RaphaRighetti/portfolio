import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

const allPlanets = planets.map((e) => (
  <PlanetCard planetName={ e.name } planetImage={ e.image } key={ e.name } />
));
class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solarsystem">
        <Title headline="Planetas" />
        <div className="planets">
          {allPlanets}
        </div>
        <hr />
      </div>
    );
  }
}

export default SolarSystem;

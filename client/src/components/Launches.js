import React, { Fragment } from 'react';
import { useQuery } from '@apollo/client';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';
import { LAUNCHES_QUERY } from '../graphql/queries';

const Launches = () => {
  
  const { loading, data, error } = useQuery(LAUNCHES_QUERY)
  
  if (loading) return <h4>Loading...</h4>
  if (error) console.log(error)
  
  var launches
  
  if (data) {
      console.log(data)
      launches = data.launches
  }
  
  return (
    <Fragment>
      <h1 className="display-4 my-3">Launches</h1>
      <MissionKey />
      {
        launches.map(launch => (
          <LaunchItem key={launch.flight_number} launch={launch} />
        ))
      }
    </Fragment>
  );
}

export default Launches
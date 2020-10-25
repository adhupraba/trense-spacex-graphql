import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { LAUNCH_QUERY } from '../graphql/queries';

const Launch = (props) => {
    
    let { flight_number } = props.match.params
    
    const { loading, error, data } = useQuery(LAUNCH_QUERY, {
        variables: { flight_number: parseInt(flight_number) }
    })
    
    if (loading) return <h4>Loading...</h4>
    if (error) console.log(error)
    
    var launch
    
    if (data) {
        console.log(data)
        launch = data.launch
    }
    
    return (
        <div>
          <h1 className="display-4 my-3">
            <span className="text-dark">Mission:</span> {launch.mission_name}
          </h1>
          <h4 className="mb-3">Launch Details</h4>
          <ul className="list-group">
            <li className="list-group-item">
              Flight Number: {launch.flight_number}
            </li>
            <li className="list-group-item">
              Launch Year: {launch.launch_year}
            </li>
            <li className="list-group-item">
              Launch Successful:{' '}
              <span
                className={classNames({
                  'text-success': launch.launch_success,
                  'text-danger': !launch.launch_success
                })}
              >
                {launch.launch_success ? 'Yes' : 'No'}
              </span>
            </li>
          </ul>

          <h4 className="my-3">Rocket Details</h4>
          <ul className="list-group">
            <li className="list-group-item">Rocket ID: {launch.rocket.rocket_id}</li>
            <li className="list-group-item">
              Rocket Name: {launch.rocket.rocket_name}
            </li>
            <li className="list-group-item">
              Rocket Type: {launch.rocket.rocket_type}
            </li>
          </ul>
          <hr />
          <Link to="/" className="btn btn-secondary mb-3">
            Back
          </Link>
        </div>
    )
}

export default Launch
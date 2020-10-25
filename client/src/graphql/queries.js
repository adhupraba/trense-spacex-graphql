import { gql } from '@apollo/client'

export const LAUNCH_QUERY = gql`
    query LaunchQuery($flight_number: Int!) {
      launch(flight_number: $flight_number) {
          flight_number
          mission_name
          launch_year
          launch_success
          launch_date_local
          rocket {
              rocket_id
              rocket_name
              rocket_type
          }
      }
    }
`

export const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`
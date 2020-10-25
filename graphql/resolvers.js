const { default: axios } = require('axios')

const resolvers = {
    Query: {
        launch: (parent, args) => {
            return axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`).then((res) => {
                return res.data
            })
        },
        launches: () => {
            return axios.get(`https://api.spacexdata.com/v3/launches`).then((res) => {
                return res.data
            })
        },
        rocket: (parent, args) => {
            return axios.get(`https://api.spacexdata.com/v3/rockets/${args.id}`).then((res) => {
                return res.data
            })
        },
        rockets: () => {
            return axios.get('https://api.spacexdata.com/v3/rockets').then((res) => {
                return res.data
            });
        }
    }
}

module.exports = resolvers
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLInt } = graphql;

const LaunchesType = new GraphQLObjectType({
  name: "Launches",
  fields: () => ({
    id: { type: GraphQLString },
    static_fire_date_utc: { type: GraphQLString },
    rocket: { type: GraphQLString },
    success: { type: GraphQLBoolean },
    details: { type: GraphQLString },
    flight_number:{ type: GraphQLInt },
    name:{ type: GraphQLString },
  }),
});

module.exports = LaunchesType;

const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const CrewType = new GraphQLObjectType({
  name: "Crew",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    agency: { type: GraphQLString },
    image: { type: GraphQLString },
    wikipedia: { type: GraphQLString },
    status:{type: GraphQLString },
  }),
});

module.exports = CrewType;

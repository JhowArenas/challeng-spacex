const graphql = require("graphql");
const { GraphQLObjectType, GraphQLFloat, GraphQLBoolean, GraphQLString } = graphql;

const RocketType = new GraphQLObjectType({
  name: "Rocket",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    active: { type: GraphQLBoolean },
    type: { type: GraphQLString },
    description: { type: GraphQLString },
    country: { type: GraphQLString },
    company: { type: GraphQLString },
    height: { type: Size },
    diameter: { type: Size },
  }),
});

const Size = new GraphQLObjectType({
  name: "Size",
  fields: () => ({
    meters: {type: GraphQLFloat},
    feet: {type: GraphQLFloat},
  }),
});

module.exports = RocketType;

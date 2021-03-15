const graphql = require("graphql");
const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } = graphql;

const crewData = require("../json/Crew.json");
const rocketData = require("../json/Rocket.json");
const launchesData = require("../json/Launches.json");

const CrewType = require("./TypeDefs/CrewType");
const RocketType = require('./TypeDefs/RocketType');
const LaunchesType = require('./TypeDefs/LaunchesType');


const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllCrew: {
      type: new GraphQLList(CrewType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return crewData;
      },
    },
    getAllRockets: {
      type: new GraphQLList(RocketType),
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return rocketData;
      },
    },
    getAllLaunches: {
      type: new GraphQLList(LaunchesType),
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return launchesData;
      },
    },
    getRocket: {
      type: new GraphQLList(RocketType),
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return (rocketData
          .then(res => res.rocketData.get(`${args.id}`)))
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: CrewType,
      args: {
        name: { type: GraphQLString },
        agency: { type: GraphQLString },
        image: { type: GraphQLString },
        wikipedia: { type: GraphQLString },
        status:{type: GraphQLString },
      },
      resolve(parent, args) {
        crewData.push({
          id: crewData.length + 1,
          name: args.name,
          agency: args.agency,
          image: args.image,
          wikipedia: args.wikipedia,
          status: args.status,
        });
        return args;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });

const { ApolloServer, gql } = require("apollo-server");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type Query {
    hello: String

    uploads: [File]
  }

  type Mutation {
    singleUpload(file: Upload!): File!
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: (root, args, context) => "Hello world!"
  },
  Mutation: {
    singleUpload: (parent, args) => {
      return args.file.then(file => {
        return file;
      });
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});


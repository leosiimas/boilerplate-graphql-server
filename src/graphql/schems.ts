import fs from "fs";

const typeDefs = `
  ${fs.readFileSync(__dirname.concat("/schema.graphql"), "utf8")}
`;

export default typeDefs;

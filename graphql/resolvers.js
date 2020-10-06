const gy = {
    name: "gayoung",
    age: 23,
    gender: "female"
};

const resolvers = {
    Query: {
        person: () => gy
    }
};

export default resolvers;
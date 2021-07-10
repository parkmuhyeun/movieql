import {getMovies} from "./db";

const resolvers = {
    Query: {
        movies: (_, {rating, limit}) => getMovies(limit, rating)            // Input a Movie in movies array
    }
};

export default resolvers;

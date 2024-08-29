// src/types/index.ts

export interface Movie {
    _id: string;
    plot: string;
    genres: string[];
    runtime: number;
    cast: string[];
    poster: string;
    title: string;
    fullplot: string;
    languages: string[];
    released: Date;
    directors: string[];
    rated: string;
    awards: {
        wins: number;
        nominations: number;
        text: string;
    };
    year: number;
    imdb: {
        rating: number;
        votes: number;
        id: number;
    };
    countries: string[];
    type: string;
    tomatoes: {
        viewer: {
            rating: number;
            numReviews: number;
            meter: number;
        };
        critic: {
            rating: number;
            numReviews: number;
            meter: number;
        };
    };
}

export class MovieModel {
    public title: string;
    public release_date: string;
    public poster_path: string;
    public overview: string;
    public vote_average: number;
    public original_title: string;
    public tagline: string;
    public id: string
    public runtime: number;

    constructor(title: string, release_date: string, poster_path: string, overview: string, vote_average: number, original_title: string, tagline: string, id: string, runtime: number) {
        this.title = title;
        this.release_date = release_date;
        this.poster_path = poster_path;
        this.overview = overview;
        this.vote_average = vote_average;
        this.original_title = original_title;
        this.tagline = tagline;
        this.id = id;
        this.runtime = runtime
    }
}

export class MovieList {
    public title: string;
    public poster_path: string;
    public page: string;
    public id: string

    constructor(title: string, poster_path: string, page: string, id: string) {
        this.title = title;
        this.poster_path = poster_path
        this.page = page
        this.id = id
    }
}
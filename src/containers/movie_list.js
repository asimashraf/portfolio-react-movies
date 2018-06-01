import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieList extends Component {

    renderMovie(movieName) {
        const img = movieName.Poster;
        const title = movieName.Title;
        const actors = movieName.Actors;
        const genre = movieName.Genre;
        const released = movieName.Released;

        return (
            <tr key={title}>
                <td><img src={img} /></td>
                <td>{title}</td>
                <td>{actors}</td>
                <td>{genre}</td>
                <td>{released}</td>
                
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Movie Title</th>
                        <th>Actors</th>
                        <th>Genre</th>
                        <th>Released</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.movie.map(this.renderMovie)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps( {movie}) {
    return { movie };
}

export default connect(mapStateToProps)(MovieList);
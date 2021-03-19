import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieServices';


class Movies extends Component {
    state = { 
        movies : getMovies()
     };

     deleteMovie = (movie) => {
       
        const movies = this.state.movies.filter( m => m._id !== movie._id);
        this.setState({movies : movies})
     }
    render() { 
        
       if(this.state.movies.length === 0) 
        return <h1>There are no movies in the database</h1>

       return <React.Fragment>
           <h1>Vidly Rental Online Services</h1><br/><br/>
           <p>There are {this.state.movies.length} movies in the database</p>
            <table className = "table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.movies.map(
                        movie => 
                            <tr key = {movie._id}>
                            <td >{movie.title}</td>
                            <td >{movie.genre.name}</td>
                            <td >{movie.numberInStock}</td>
                            <td >{movie.dailyRentalRate}</td>
                            <td><button className='btn btn-danger' onClick = { () => this.deleteMovie(movie) }>Delete</button></td>
                        </tr> 
                    )}
                </tbody>
            </table>
       </React.Fragment>    
    }
}
 
export default Movies;
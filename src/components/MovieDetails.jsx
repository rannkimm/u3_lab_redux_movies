import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoadMovieDetails } from '../store/actions/MovieActions'

const mapStateToProps = ({ movieDetailsState }) => {
  return { movieDetailsState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieDetails: (id) => dispatch(LoadMovieDetails(id))
  }
}

const MovieDetails = (props) => {
  let { id } = useParams()

  useEffect(() => {
    props.fetchMovieDetails(id)
  },[id])
console.log(props.movieDetailsState.movieDetails)
  return (
      <div>
        <ul>
            <h1>{props.movieDetailsState.movieDetails.original_title}</h1>
            <h3>Overview</h3>
            <p>{props.movieDetailsState.movieDetails.overview}</p>
            <h3>Release Date</h3>
            <p>{props.movieDetailsState.movieDetails.release_date}</p>
            <h3>Runtime</h3>
            <p>{props.movieDetailsState.movieDetails.runtime}</p>
        </ul>
        <Link to={'/'}>Back</Link>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
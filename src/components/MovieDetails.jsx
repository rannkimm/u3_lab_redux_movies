import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
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
    <ul>
        {props.movieDetailsState.movieDetails.overview}
      {/* {props.movieDetailsState.movieDetails.map((movie) => (
          <li key={movie.id}>{movie.overview}</li>
        ))} */}
    </ul>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
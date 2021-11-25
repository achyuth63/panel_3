import MoviesSlider from '../MoviesSlider'

import {
  PrimeVideoContainer,
  MoviesContainer,
  MoviesHeading,
} from './styledComponents'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    movie => movie.categoryId === actionMovie,
  )

  const comedyMoviesList = moviesList.filter(
    movie => movie.categoryId === comedyMovie,
  )

  return (
    <PrimeVideoContainer>
      <MoviesContainer>
        <MoviesHeading>Thriller Movies</MoviesHeading>
        <MoviesSlider moviesList={actionMoviesList} />
        <MoviesHeading>Sci-fi Movies </MoviesHeading>
        <MoviesSlider moviesList={comedyMoviesList} />
      </MoviesContainer>
    </PrimeVideoContainer>
  )
}

export default PrimeVideo

import fetch from 'isomorphic-unfetch'

import { getMovies } from './movies'
import Layout from '../components/Layout'
import Weather from '../components/Weather'
import LastMovie from '../components/LastMovie'
import Calendar from '../components/Calendar'
import { months } from '../utils/date'

const Index = (props) => {
  return (
    <Layout>
      <article>
        <section>
          <Calendar />
        </section>
        <section>
          <Weather temperature={props.temperature} />
        </section>
        <section>
          <LastMovie movies={props.movies} />
        </section>
      </article>
    </Layout>
  )
}

const getWeather = async function() {
  const res = await fetch(`https://api.mansurov.me/weather`)
  const data = await res.json()

  return data.temperature
}

Index.getInitialProps = async function() {
  const temperature = await getWeather()
  const movies = await getMovies()

  return {
    movies: movies.sort((a, b) => new Date(b.watched_date) - new Date(a.watched_date)),
    temperature
  }
}

export default Index

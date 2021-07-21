import Head from 'next/head'
import Link from 'next/link'
import { getInitialPokemonData } from '../lib/pokemon'
import styles from '../styles/Home.module.css'
import _ from 'lodash'
import Layout from '../components/layout'
import NewPokemon from '../components/newPokemon'

const numberOfPokemon = 10

export async function getStaticProps() {
  const pokemonNames = await getInitialPokemonData(numberOfPokemon)
  return {
    props: {
      pokemonNames
    }
  }
}

export default function Home({pokemonNames}) {
  return (
    <Layout home>
        <Head>
          <title>PokeNext</title>
        </Head>

        <main className={styles.main}>
          <h2>{`Here's ${numberOfPokemon} Pokemon:`}</h2>
          <ul className={styles.list}>
            {pokemonNames.map(({name}) => (
              <li key={name}>
                <Link href={`/pokemon/${name}`}>
                  <a>{_.capitalize(name)}</a>
                </Link>
              </li>
            ))}
          </ul>
        </main>
        <NewPokemon />
    </Layout>
  )
}

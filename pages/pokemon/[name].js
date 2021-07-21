import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import _ from 'lodash'
import { getPokemonData, getPokemonNames } from "../../lib/pokemon";
import Layout from '../../components/layout';

export async function getStaticProps({ params }) {
  const pokemonData = await getPokemonData(params.name)
  return {
    props: {
      pokemonData
    }
  }
}

export async function getStaticPaths() {
  const paths = await getPokemonNames(10)
  return {
    paths,
    fallback: false
  }
}

export default function Pokemon({ pokemonData }) {
  const { name, height, weight, sprite, types } = pokemonData
  return (
    <Layout>
      <Head>
        <title>{_.capitalize(name)}</title>
      </Head>
      <div>
        <h1>{_.capitalize(name)}</h1>
        <Image src={sprite} alt={name} height={150} width={150}/>
        <h2>Height: {height}</h2>
        <h2>Weight: {weight}</h2>
        <h2>Types:</h2>
        <ul className={styles.list}>
          {types.map(({ type }) => (
            <li key={type.name}>{type.name}</li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}
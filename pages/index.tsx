import Head from 'next/head'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import CompanyStory from '../components/CompanyStory'
import Problem from '../components/Problem'
import Solution from '../components/Solution'
import Technology from '../components/Technology'
import Timeline from '../components/Timeline'
import Market from '../components/Market'
import Competitive from '../components/Competitive'
import Funding from '../components/Funding'
import Vision from '../components/Vision'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <>
      <Head>
        <title>VH4 Aerospace — Prometheus</title>
        <meta name="description" content="Prometheus-1 — India's first private suborbital space tourism vehicle." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <main className="section-snap">
        <section id="hero" className="section"><Hero /></section>
        <section id="story" className="section"><CompanyStory /></section>
        <section id="problem" className="section"><Problem /></section>
        <section id="solution" className="section"><Solution /></section>
        <section id="technology" className="section"><Technology /></section>
        <section id="timeline" className="section"><Timeline /></section>
        <section id="market" className="section"><Market /></section>
        <section id="competitive" className="section"><Competitive /></section>
        <section id="funding" className="section"><Funding /></section>
        <section id="vision" className="section"><Vision /></section>
        <section id="final" className="section"><Footer /></section>
      </main>
    </>
  )
}

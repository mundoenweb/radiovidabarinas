// import { Inter } from 'next/font/google'
// import styles from '@/styles/pages/Home.module.css'
import AudioPlayer from '@/components/templates/audioPlayer'
import Header from '@/components/templates/header'


export default function Home() {
  return (
    <>
      <Header />
      <main >
        <br />
        <AudioPlayer />
      </main>
    </>
  )
}

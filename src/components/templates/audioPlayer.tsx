import Image from "next/image"
import styles from '@/styles/templates/Player.module.css'
import { useEffect, useState } from "react"


const AudioPlayer = () => {

  const [audio, setAudio] = useState<HTMLAudioElement>()
  const [viewPlay, serViewPlay] = useState(styles.button_block)
  const [viewPause, serViewPause] = useState(styles.button_none)

  useEffect(() => {
    const stream = new Audio("https://radiointernet.co/8032/stream")
    setAudio(stream)
  }, [])

  const volume = (evt: any) => {
    const vol = evt.target.value / 100
    if (audio) audio.volume = vol
  }
  const play = () => {
    audio?.play()
    serViewPlay(styles.button_none)
    serViewPause(styles.button_block)
  }
  const pause = () => {
    audio?.pause()
    serViewPlay(styles.button_block)
    serViewPause(styles.button_none)
  }

  return (
    <div className={`te-grid ${styles.box_main}`}>

      <div className={styles.box_image}>
        <Image
          src='/images/base_repo.png'
          alt='vida 100.5'
          width={180}
          height={180}
          priority
        />
      </div>

      <div>
        <p className={styles.title_one}>Escucha Vida</p>
        <p className={styles.title_two}>Y todo cambiará</p>
      </div>


      <div className={styles.box_volume}>
        <i className={`material-icons mdl-color-text--primary ${styles.ico_volume}`}>volume_up</i>
        <input
          className={`mdl-slider mdl-js-slider ${styles.slider_volume}`}
          type="range"
          min="0"
          max="100"
          onChange={volume}
        />
      </div>

      <div className={styles.box_button}>
        <button
          type="button"
          className={`material-icons mdl-color-text--primary ${styles.play_buttom} ${viewPlay}`}
          onClick={play} >
          play_circle
        </button>
        <button
          type="button"
          className={`material-icons mdl-color-text--primary ${styles.pause_buttom} ${viewPause}`}
          onClick={pause} >
          pause_circle
        </button>
      </div>

    </div >
  )
}

export default AudioPlayer

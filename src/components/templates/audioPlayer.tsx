import Image from "next/image"
import styles from '@/styles/templates/Player.module.css'
import { useEffect, useState } from "react"


const AudioPlayer = () => {

  const [audio, setAudio] = useState<HTMLAudioElement>()
  const [viewPlay, serViewPlay] = useState(styles.button_block)
  const [viewPause, serViewPause] = useState(styles.button_none)

  useEffect(() => {
    const stream = new Audio("https://app0102.sonicpanelradio.com/8810/stream")
    setAudio(stream)
  }, [])

  useEffect(() => {
    if (!audio) return
    audio.addEventListener('waiting', () => {
      serViewPlay(styles.button_block)
      serViewPause(styles.button_none)
    })
    audio.addEventListener('playing', () => {
      serViewPlay(styles.button_none)
      serViewPause(styles.button_block)
    })
  }, [audio])

  const volume = ({ target }: any) => {
    const vol = target.value / 100
    if (audio) audio.volume = vol
  }

  const play = () => {
    audio?.play()
      .then(() => {
        serViewPlay(styles.button_none)
        serViewPause(styles.button_block)
      })
      .catch(() => alert('favor verifique su conexión a internet'))
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

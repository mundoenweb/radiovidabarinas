import styles from '@/styles/templates/Header.module.css'
import Image from 'next/image'

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <div className={`te-grid ${styles.main_box}`}>
        <Image
          src='/logo_header.png'
          alt='vida 100.5'
          width={88}
          height={40}
        />
        <ul className={styles.box_social_net}>
          <li>
            <Image
              src='/face.svg'
              alt='vida 100.5'
              width={22}
              height={22}
            />
          </li>
          <li>
            <Image
              src='/instagram.svg'
              alt='vida 100.5'
              width={22}
              height={22}
            />
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header

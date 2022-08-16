import type { NextPage } from 'next'
import logo from "@/images/footer/creative_common.svg"
import Image from "next/image"
import styles from '@/styles/Footer.module.scss'


const Footer: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
      <hr ></hr>
      <div className={styles.logo}>
            <Image src={logo} width="150" height="30"></Image>
        </div>   
      </div>  
    </>
  )
}
export default Footer

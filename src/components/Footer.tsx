import type { NextPage } from 'next'
import logo from "@/images/footer/creative_common.svg"
import Image from "next/image"
import styles from '@/styles/Home.module.scss'


const Footer: NextPage = () => {
  return (
    <>
      <hr></hr>
      <div className={styles.logo}>
            <Image src={logo} width="150" height="30"></Image>
      </div>      
    </>
  )
}
export default Footer

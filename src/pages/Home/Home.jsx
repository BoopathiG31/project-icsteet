import React from 'react'
import Header from '../../components/Header/Header'
import Logo from '../../components/Logo/Logo'
import Theme from '../../components/Theme/Theme'
import Highlights from '../../components/Highlights/Highlights'
import Session from '../../components/session/Session'
import WhyJoinUs from '../../components/joinus/WhyJoinUs'
import Deadline from '../../components/deadlines/Deadline'
import Proceeding from '../../components/Proceedings/Proceeding'

const Home = () => {
  return (
    <>
      <Header/>
      <Logo/>
      <Theme/>
      <Highlights/>
      <Session/>
      <Deadline/>
      <WhyJoinUs/>
      <Proceeding/>
    </>
  )
}

export default Home

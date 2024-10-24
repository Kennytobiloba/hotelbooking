import React from 'react'
import Hereo from '../Layouts/Hereo'
import Abouts from '../Layouts/Abouts'
import Grids from '../Layouts/Grids'
import Rooms from '../Layouts/Rooms'
import RoomGrid from '../Layouts/RoomGrid'
import Dinning from '../Layouts/Dinning'
import Amenities from '../Layouts/Amenities'
import Slider from '../Layouts/Slider'
import Heritage from '../Layouts/Heritage'

const Home = () => {
  return (
    <div className=' flex flex-col gap-10 overflow-hidden'>
        <Hereo/>
        <Abouts/>
        <Grids/>
        <Rooms/>
        <RoomGrid/>
        <Dinning/>
        <Amenities/>
        <Slider/>
        <Heritage/>
        
        
      
    </div>
  )
}

export default Home

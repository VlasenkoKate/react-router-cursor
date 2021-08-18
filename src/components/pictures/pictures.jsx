import React from 'react'
import "./pictures.css"
import img1 from "/Users/ekaterinavlasenko/Desktop/vjgv/cursor-homework/CURSOR_ADVANCED/19/19-hw/19/src/assets/1.png"
import img2 from "/Users/ekaterinavlasenko/Desktop/vjgv/cursor-homework/CURSOR_ADVANCED/19/19-hw/19/src/assets/2.png"
import img3 from "/Users/ekaterinavlasenko/Desktop/vjgv/cursor-homework/CURSOR_ADVANCED/19/19-hw/19/src/assets/3.png"
import img4 from "/Users/ekaterinavlasenko/Desktop/vjgv/cursor-homework/CURSOR_ADVANCED/19/19-hw/19/src/assets/4.png"
import img5 from "/Users/ekaterinavlasenko/Desktop/vjgv/cursor-homework/CURSOR_ADVANCED/19/19-hw/19/src/assets/5.png"
import img6 from "/Users/ekaterinavlasenko/Desktop/vjgv/cursor-homework/CURSOR_ADVANCED/19/19-hw/19/src/assets/6.png"
import img7 from "/Users/ekaterinavlasenko/Desktop/vjgv/cursor-homework/CURSOR_ADVANCED/19/19-hw/19/src/assets/7.png"
import img8 from "/Users/ekaterinavlasenko/Desktop/vjgv/cursor-homework/CURSOR_ADVANCED/19/19-hw/19/src/assets/8.png"
import img9 from "/Users/ekaterinavlasenko/Desktop/vjgv/cursor-homework/CURSOR_ADVANCED/19/19-hw/19/src/assets/9.png"

export default function Pictures () {
    return (
        <div className="container_pictures">
            <div><img className="picture" src={img9} alt="img"/></div>
            <div><img className="picture" src={img2} alt="img"/></div>
            <div><img className="picture" src={img7} alt="img"/></div>
            <div><img className="picture" src={img6} alt="img"/></div>
            <div><img className="picture" src={img5} alt="img"/></div>
            <div><img className="picture" src={img4} alt="img"/></div>
            <div><img className="picture" src={img3} alt="img"/></div>
            <div><img className="picture" src={img8} alt="img"/></div>
            <div><img className="picture" src={img1} alt="img"/></div>
            </div>
    )
}
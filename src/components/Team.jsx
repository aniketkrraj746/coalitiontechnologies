import React, { useState } from 'react';
import './Team.css';
import mountain1 from '../assets/mountain1.png'
import mountain2 from '../assets/mountain2.png'

const Team = () => {
    const[style ,setstyle]=useState("style1");
    const[shcedule,setSchedule]=useState([
        {
        id:0,
        date:"25 Nov 2016",
        objective:'Vestibulum viverra',
    },
    {
        id:1,
        date:"28 Nov 2016",
        objective:'Vestibulum viverra',
    },
    {
        id:2,
        date:"18 Dec 2016",
        objective:'Vestibulum viverra',
    },
    {
        id:3,
        date:"07 Jan 2017",
        objective:'Vestibulum viverra',
    },
    
]);
    const showMountain1=()=>{
        
        setstyle("style1");
        setSchedule([
             {
        id:0,
        date:"25 Nov 2016",
        objective:'Vestibulum viverra',
    },
    {
        id:1,
        date:"28 Nov 2016",
        objective:'Vestibulum viverra',
    },
    {
        id:2,
        date:"18 Dec 2016",
        objective:'Vestibulum viverra',
    },
    {
        id:3,
        date:"07 Jan 2017",
        objective:'Vestibulum viverra',
    },
        ])
    }
    const showMountain2=(e)=>{
        setstyle("style2");
        setSchedule([
             {
        id:0,
        date:"17 Nov 2016",
        objective:'Vestibulum viverra',
    },
    {
        id:1,
        date:"13 Dec 2016",
        objective:'Vestibulum viverra',
    },
    {
        id:2,
        date:"28 Dec 2016",
        objective:'Vestibulum viverra',
    },
    {
        id:3,
        date:"09 Feb 2017",
        objective:'Vestibulum viverra',
    },
        ])
    }
    
    const listItems=shcedule.map((date)=><li>{date.date} <span>{date.objective}</span></li>)
  return (
    <div id="Team">
      {/* <p className="team-title">02.<span>climb</span></p> */}
      <h1>02.</h1>
      <h2>CLIMB</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Vestibulum id purus nunc. Sed quis dui at justo pellentesque
        vulputate ac vitae sapien. Nullam tempus vestibulum sem, ac eleifend
        augue. Sed id sem gravida justo iaculis sagittis. Donec sollicitudin
        lectus vulputate, tempus est in, ullamcorper justo. Maecenas feugiat
        pharetra tortor, non tempus dolor egestas sed. Nullam sollicitudin risus
        eget dui posuere, eget vestibulum neque tempus. Pellen
      </p>
      <div className="navigation">
        <div>
          <button type="text" onClick={showMountain1}>
            {" "}
            MOUNTAIN 1
          </button>
          <button type="text" onClick={showMountain2}>
            {" "}
            MOUNTAIN 2
          </button>
        </div>
      </div>
      <div id="backgroundIMage" className={style}>
        <div className="schedule">
          <p className="shceduleHeading">SCHEDULE</p>
          <table>{listItems}</table>
        </div>
      </div>
    </div>
  );
}

export default Team;
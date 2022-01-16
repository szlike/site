import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./team.scss";
// Components
import TeamBox from './teamBox';
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";
// Assets
import Person01 from "../../assets/about/ceo.jpg"
import Person02 from "../../assets/about/p1.jpg"
import Person03 from '../../assets/about/p2.jpg'
import Person04 from '../../assets/about/p3.png'
import Person05 from '../../assets/about/p4.png'
import $ from 'jquery'; 






// arrow function
const abo = function(){  
}

// closure
// find the differences between using function keyword and using arrow function
const abou = ()=>{
  return true
}

const abouu = ()=> true

// xmlhttpRequest
// jquery
// js fetch
// axios


const Team = () => {
  // property deconstruction
  const [cannabisList, setCannabisList] = useState(0);


  const fireGetCannabis = function(){
    $.ajax({
      method : 'GET',
      url : 'https://random-data-api.com/api/cannabis/random_cannabis?size=10',
      dataType : 'json'
    })
    .done(enter)
    .fail(function(e){
      console.log('failed: ', e)
    }) 
  };

  const enter = (data)=>{
    $("#id").text(data.id)
    console.log(data)

    setCannabisList(data)
  }

  return (
    <div id="about">
    <div name='random-cannabis'>
    <ul> https://random-data-api.com/api/cannabis/random_cannabis?size=10</ul>
    <div>Output: <span id="#id">1234</span></div>
    <button onClick={()=>fireGetCannabis()}>get random cannabis</button>
    <input type='text'/> //size=100
    {use react template loop to display {cannabisList} ul-> li}
    <button>get specific number cannabis</button>
    </div>
    </div>
  )
  
}

export default Team;

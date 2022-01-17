import React, { useState, useEffect } from 'react'
import axios from "axios";
import ReactPaginate from 'react-paginate';
import "./team.scss";
import $ from 'jquery'; 

const Team = () => {
  // property deconstruction
  //const [cannabisList, setCannabisList] = useState(0);
    const [postsPerPage] = useState(5);
    const [offset, setOffset] = useState(1);
    const [posts, setPosts] = useState([]);
    const [pageCount, setPageCount] = useState(0)

    const getData = (data) => {
      return (
        data.map(post => <div className="id" key={post.id}>
          <p>Item ID: {post.id}</p>
          <p>Item UID {post.uid}</p>
        </div>)
      )
    
    }
    const getPosts = async () => {
      const res = await axios.get(`https://random-data-api.com/api/cannabis/random_cannabis?size=10`)
      const data = res.data;
      const slice = data.slice(offset - 1 , offset - 1 + postsPerPage)
      const postData = getData(slice)
      setPosts(postData)
      setPageCount(Math.ceil(data.length / postsPerPage))
    }
    
}
  
   
  //const fireGetCannabis = function(){
    //axios.get('https://random-data-api.com/api/cannabis/random_cannabis?size=10')
    //.then((response) => {
    //  console.log(response.data.id);
    //  console.log(response.data.uid);
    
  //const enter = (data)=>{
    //$("#id").text(data.id)
   // console.log(data)

   // setCannabisList(data)
  //}

  //<input type='text'/> //size=100
  //{use react template loop to display {cannabisList} ul-> li}
 // return (
   // <div id="about">
   // <div name='random-cannabis'>
   // <ul> https://random-data-api.com/api/cannabis/random_cannabis?size=10</ul>
   // <div>Output: <span id="#id">1234</span></div>
   // <button onClick={()=>fireGetCannabis()}>get random cannabis</button>

   // <button>get specific number cannabis</button>
   // </div>
   // </div>
  //)
    

export default Team;

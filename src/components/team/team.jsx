import React, { useState, useEffect } from 'react'
import axios from "axios";
import ReactPaginate from 'react-paginate';
import "./team.scss";
import $ from 'jquery'; 

const Team = () => {
  
    const [postsPerPage] = useState(5);
    const [offset, setOffset] = useState(1);
    const [posts, setPosts] = useState([]);
    const [pageCount, setPageCount] = useState(0)
    
    const getSpec = async() =>{
      var input=document.getElementById('userInput').value;
      document.getElementById("link").href = "https://random-data-api.com/api/cannabis/random_cannabis?size="+input;
      document.getElementById("link").innerHTML = "https://random-data-api.com/api/cannabis/random_cannabis?size="+input;
      const res = await axios.get(document.getElementById("link"))
      const data = res.data;
      const slice = data.slice(offset - 1 , offset - 1 + postsPerPage)
      // const postData = getData(slice)
      setPosts(slice)
      setPageCount(Math.ceil(data.length / postsPerPage))
     
    }
    
    const getPosts = async () => {
      const res = await axios.get(`https://random-data-api.com/api/cannabis/random_cannabis?size=100`)
      const data = res.data;
      const slice = data.slice(offset - 1 , offset - 1 + postsPerPage)
      // const postData = getData(slice)
      setPosts(slice)
      setPageCount(Math.ceil(data.length / postsPerPage))
    }

    const handlePageClick = (event) => {
      const selectedPage = event.selected;
      setOffset(selectedPage + 1)
    };
    
    useEffect(() => {
      getPosts()
    }, [offset])

    return (
    <div id="about">
    <div name='random-cannabis'>
    <div>Output: <span id="#id">1234</span></div>
    <button onClick={()=>getPosts()}>get random 100 cannabis</button> 
    

    <a href="https://random-data-api.com/api/cannabis/random_cannabis?size=" id="link">https://random-data-api.com/api/cannabis/random_cannabis?size=</a><br></br>
    <input type="text" id="userInput"></input><br></br>
    <button onClick={()=>getSpec()}>get specific number cannabis</button>
    
    
    
    <ul>
      {posts.map((post)=>{
        return (
          <li>
            <div className="id" key={post.id}>
                  <p>Item ID: {post.id}</p>
                  <p>Item UID {post.uid}</p>
                </div>)
          </li>
        )
      })}

    </ul>
 
     < ReactPaginate
       previousLabel={"<previous>" }
       nextLabel={ "<next>" }
       breakLabel={ "..." }
       pageCount={ pageCount }
       onPageChange={ handlePageClick }
       containerClassName={ "pagination" }
       renderOnZeroPageCount={null} / >

  
    </div>
    </div>
    );
}
export default Team;
   
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
 
    



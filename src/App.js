import React, { useState, useEffect } from 'react';
import { Loader } from './components/Loader';
import { UnsplashImage } from './components/UnsplashImage';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// Style
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }
`;

const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

function App() {
  const [images, setImage] = useState([]);
  const [tag, setTag] = useState("all");
  const [filteredImg,setFilteredImg]=useState([]);
  const [prev,setPrev]=useState([]);

  useEffect(() => {
    document.getElementById("all").style.textDecoration="underline"
    document.getElementById("all").style.color="black"
    fetchImages();
  }, [])

  const fetchImages = (count = 10) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = "hYzEGauIZp599XNu5bphlSSWULc5DZq9xPPVpl5StVY";

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
      .then(res => {
        console.log(res);
        const p=[]
        for(var i=0;i<res.data.length;i++){
          var h=i%4;
          var q=res.data[i];
          switch(h){
            case 0:
              q.cat="web";
              break;
            case 1:
              q.cat="digital";
              break;
            case 2:
              q.cat="rened";
              break;
            case 3:
              q.cat="brand";
              break;
          }
          p.push(q);
        }
        console.log(p)
        
          if(prev.length==0 || p[0].id!=prev[0].id){
            setImage([...images, ...p]);
            const q1=[...images, ...p]
            setPrev(p);
            if(tag=="all"){
              setFilteredImg(q1);
            }else{
              setFilteredImg(q1.filter(image=>image.cat==tag))
            }
          }
      })
  }
 
 const hanslest1=()=>{
    setTag("all");
    pk();
    document.getElementById("all").style.textDecoration="underline"
    document.getElementById("all").style.color="black"
    
    setFilteredImg(images);

 }
 const pk=()=>{
      var coll=document.getElementsByClassName("control")
      for(var i=0;i<coll.length;i++){
        coll[i].style["text-decoration"]="";
        coll[i].style["color"]="";

      }
 }
 const hanslest2=()=>{
   setTag("web");
   pk();
   document.getElementById("web").style.textDecoration="underline"
   document.getElementById("web").style.color="black"
   const p=images
   setFilteredImg(p.filter(image=>(image.cat=="web")))


 }
 const hanslest3=()=>{
   setTag("digital");
   pk();
   document.getElementById("digital").style.textDecoration="underline"
   document.getElementById("digital").style.color="black"
   const p=images
   setFilteredImg(p.filter(image=>(image.cat=="digital")))
 }
 const hanslest4=()=>{
  pk();
   setTag("rened");
   document.getElementById("rened").style.textDecoration="underline"
   document.getElementById("rened").style.color="black"
   const p=images
   setFilteredImg(p.filter(image=>(image.cat=="rened")))
 }
 const hanslest5=()=>{
  pk();
   setTag("brand");
   document.getElementById("brand").style.textDecoration="underline"
   document.getElementById("brand").style.color="black"
   const p=images
   setFilteredImg(p.filter(image=>(image.cat=="brand")))
 }
  return (  
<section class="portfolio-section">
<div class="container">
<ul class="portfolio-filter controls">
<li className="control" id="all" onClick={hanslest1}>All</li>
<li className="control" id="web"  onClick={hanslest2}>Web design</li>
<li className="control" id="digital"  onClick={hanslest3}>Digital design</li>
<li className="control" id="rened"  onClick={hanslest4}>3D Renedering</li>
<li className="control" id="brand"  onClick={hanslest5}>Brand Identity</li>

</ul>
</div>
  <GlobalStyle />
      <InfiniteScroll
        dataLength={filteredImg.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <WrapperImages>
        
          {filteredImg.map(image => (
            <UnsplashImage url={image.urls.thumb} key={image.id} />
          ))}
        </WrapperImages>
      </InfiniteScroll>
    	
    </section>
    
  );
}

export default App;

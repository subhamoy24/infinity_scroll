import React from 'react';
import styled from 'styled-components';
import {Link,NavLink} from 'react-router-dom';
import { UnsplashImage } from './UnsplashImage';
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
//<Img key={key} src={url} alt="" />




export const Pure = ({ data }) => {
  var s=[];

  for(var i=0;i<data.length;i++){
      var h=i%4;
      switch(h){
          case 0:
            s.push(<UnsplashImage url={data[i].urls.thumb} cat={"web"}/>);
            break;
          case 1:
            s.push(<UnsplashImage url={data[i].urls.thumb} cat={"digital"}/>);
            break;
          case 2:
            s.push(<UnsplashImage url={data[i].urls.thumb} cat={"rened"}/>);
            break;
          case 3:
            s.push(<UnsplashImage url={data[i].urls.thumb} cat={"brand"}/>);
            break;
      }
  }
  return (s);
}

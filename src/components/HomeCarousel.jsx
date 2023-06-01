import styled from "styled-components";
import { Carousel } from 'antd';
import { CaretLeftOutlined , CaretRightOutlined } from '@ant-design/icons'
import { useRef } from 'react';
import reclamacoes from "./../assets/reclamacoes.png"
import car3 from "./../assets/car3.png"
import car4 from "./../assets/car4.jpg"

const HomeCarousel = () => {

  const arrowRef = useRef();

  const leftArrowStyle = {
    color: "white",
    cursos: "pointer",
    position: "absolute",
    zIndex: "1",
    top: "50%",
    left: "0px",
    width: "20px",
    fontSize: "1.8em",
    transform: "translatey(-50%)",
  }
  const rightArrowStyle = {
    color: "white",
    cursos: "pointer",
    position: "absolute",
    zIndex: "1",
    top: "50%",
    right: "5px",
    width: "20px",
    fontSize: "1.8em",
    transform: "translatey(-50%)",
  }

  return (
    <StyledHomeCarousel>
    <CaretLeftOutlined style={leftArrowStyle} onClick={()=>arrowRef.current.prev()}/> 
    <Carousel autoplay dots={false} ref={arrowRef}>
      <div>
        <a href="https://docs.google.com/forms/d/1QtK3XIWlPJ5YYyzsmC9T9gpjdOUGVOW5qwE1Dx8dFmI/edit#responses" target="_blank"><img src={reclamacoes}></img></a>
      </div>
      <div>
        <img src={car3}></img>
      </div>
      <div>
        <img src={car4}></img>
      </div>
    </Carousel>
    <CaretRightOutlined style={rightArrowStyle} onClick={()=>arrowRef.current.next()}/>
    </StyledHomeCarousel>
  );
};
 

const StyledHomeCarousel = styled.div`
  width: 100%;
  max-width: 800px;
  height: auto;
  position: relative;
  margin: auto;
  img{
    width: 100%
  }
`
export default HomeCarousel;
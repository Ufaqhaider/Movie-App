import React,{useState} from 'react';
import '../home.scss'
import ContentWrapper from '../../../components/contentWrapper/contentwrapper';
import SwitchTabs from '../../../components/SwitchTabs/SwitchTabs';
import Carousel from '../../../components/carousel/Carousel';

import useFetch from '../../../Hooks/useFetch';
  
const Trending = () => {

  const [endpoint, setEndpoint] = useState("day");

  const {data,loading} =useFetch(`/trending/all/${endpoint}`);


  const onTabChange=(tab)=>{
    setEndpoint(tab === 'Day' ? "day":"week");
  };


  return (
    <div className='carouselSection'>
      <ContentWrapper>
      <span className='carouselTitle'>Trending</span>
      <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading}/>
    </div>

  )
}

export default Trending;
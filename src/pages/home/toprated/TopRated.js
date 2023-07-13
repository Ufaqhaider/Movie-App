import React,{useState} from 'react';
import '../home.scss'
import ContentWrapper from '../../../components/contentWrapper/contentwrapper';
import SwitchTabs from '../../../components/SwitchTabs/SwitchTabs';
import Carousel from '../../../components/carousel/Carousel';

import useFetch from '../../../Hooks/useFetch';
  
const TopRated = () => {

  const [endpoint, setEndpoint] = useState("movie");

  const {data,loading} =useFetch(`/${endpoint}/top_rated`);


  const onTabChange=(tab)=>{
    setEndpoint(tab === 'Movies' ? "movie":"tv");
  };


  return (
    <div className='carouselSection'>
      <ContentWrapper>
      <span className='carouselTitle'>Top Rated</span>
      <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>

  )
}

export default TopRated;
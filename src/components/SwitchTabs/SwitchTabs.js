
import React,{useState} from 'react';
import './switch_tabs.scss';


const SwitchTabs = ({data,onTabChange}) => {
    const [selectedTab,SetselectedTab]=useState(0);
    const [left,Setleft] = useState(0);

    const activeTab = (tab, index) => {
        Setleft(index * 100);
        setTimeout(() => {
            SetselectedTab(index);
        }, 300);
        onTabChange(tab, index);
    };

  return (
    <div className='switchingTabs'>
        <div className='tabItems'>
            {data.map((tab,index)=>(
                <span key={index} className={`tabItem ${selectedTab === index ? 'active' : ''}`} onClick={()=>activeTab(tab,index)}>{tab}</span>
            ))}
            <span className='movingBg' style={{left:left}}></span>
        </div>
    </div>
  )
}

export default SwitchTabs




import React from 'react'
import Categories from '../../components/Categories/Categories';
import Slider from '../../components/Slider/Slider';
import FeatureProducts from '../../components/FeatureProducts/FeatureProducts';
import Contact from '../../components/Contact/Contact';
import "./Home.scss"
const Home = () => {
    return (
        <div className='home'>
            <Slider/>
            <FeatureProducts type="featured"/>
            <Categories/>
            <FeatureProducts type="trending"/>
            <Contact/>
        </div>
    );
};

export default Home;
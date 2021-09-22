import React from 'react'
import PopularItem from '../components/Popular'
import {PopularList} from "../helpers/PopularList";
import Trending from '../components/Trending';
import { TrendingItems } from "../helpers/TrendingList";
import Sellers from '../components/Sellers';
import { SellersList } from '../helpers/SellersList';
import Searches from '../components/Searches';
import { SearchList } from '../helpers/Searches';
import {Link} from 'react-router-dom'
import "../styles/Home.css";


function Home() {
    return (
        <div className="bodyContainer">
            <div className="headerSection">
                <h1>
                    Search for fashion with images and shop the look
                </h1>
                <div className="searchButtonGroup">
                    <button className="sBtn searchWithImageBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                    <span>Search with image</span>
                    </button>
                    <span className="or-bridge">or</span>
                    <button className="sBtn searchWithTextBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <span>Search with text</span>
                    </button>
                </div>
            </div>
            <div className="catSection">
                <h4>Popular Clothing</h4>
                <div className="popCats">
                    {PopularList.map((popitem,key) => {
                        return (
                        <PopularItem
                            key={key} 
                            image= {popitem.image} 
                            title= {popitem.title}
                            />
                         );
                    })}
                </div>
            </div>
            <div className="trendingSection">
                <h3>Trending Products</h3>
                <div className="trendingProducts">
                    {TrendingItems.map((trenditem,key) => {
                        return(
                            <Trending
                                key= {key}
                                image={trenditem.image}
                                title={trenditem.title}
                                vendor={trenditem.vendor}
                                deliveryAv={trenditem.deliveryAv}
                                price={trenditem.price}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="sellersection">
                <h3>Shop by sellers</h3>
                <div className="sellerItems">
                    {SellersList.map((selleritem,key)=>{
                        return (
                            <Sellers
                            key= {key}
                            image= {selleritem.image}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="seachsection">
                <h3>Trending Searches</h3>
                <div className="searchitem">
                    {SearchList.map((searchitem,key)=>{
                        return(
                            <Searches
                            key={key}
                            text = {searchitem.text}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="tell-us">
                <h3>Tell us what you think</h3>
                <div className='small-icon'>
                   
                </div>
                <div>
                    <p>Please click <Link to= "/"><span>here</span></Link>  to drop us a message</p>
                </div>
            </div>
            <div className="socialMedia">
                <h3>Search on social media</h3>
                <div className='small-icon'>
                </div>
                <div>
                    <p>Mention @lykdatApp under a picture and we'll respond to you with a link to shop for similar items</p>
                    <Link to = '/'> <p>Follow us on twitter</p> </Link>
                </div>
            </div>
            <div className="businessContainer">
                    <h3>Lykdat for business</h3>
                    <p>Power your fashion ecommerce business with AI visual discovery</p>
                    <button className="business">Learn more </button>
            </div>

        </div>
    )
}

export default Home

import React, {useState} from 'react';
import MyPage from "./MyPage";
import mag from "../img/magnifyingGlass.png";
import slide1 from "../img/example/slide01.jpg";
import slide2 from "../img/example/slide02.jpg";
import slide3 from "../img/example/slide03.jpg";
import discoverBanner from "../img/DiscoverBanner.png"
import '../css/DiscoverPage.css'
import MenuHeader from "../component/MenuHeader";


function DiscoverPage() {
    return (
        <div>
            <MenuHeader></MenuHeader>


            <div class="section">
                <input type="radio" name="slide" id="slide01"/>
                <input type="radio" name="slide" id="slide02" checked/>
                <input type="radio" name="slide" id="slide03"/>

                <div class="slidewrap">
                    <ul class="slidelist">
                        <li>
                            <a>
                                <label for="slide03" class="left"></label>
                                <img src={slide1}/>
                                <label for="slide02" class="right"></label>
                            </a>
                        </li>
                        <li>
                            <a>
                                <label for="slide01" class="left"></label>
                                <img src={slide2}/>
                                <label for="slide03" class="right"></label>
                            </a>
                        </li>
                        <li>
                            <a>
                                <label for="slide02" class="left"></label>
                                <img src={slide3}/>
                                <label for="slide01" class="right"></label>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>






        </div>
    )
}

export default DiscoverPage;
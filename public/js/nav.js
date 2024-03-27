﻿const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="/img/dark-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">Search</button>
                </div>
                <a>
                <img src="/img/user.png" alt="">
                <div class="login-logout-popup hide">
                <p class="account-info">Logged in as,name</p>
                <button class="btn" id="user-btn">Log Out</button>
                </div>
                </a>
                <a href="#"><img src="/img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">Home</a></li>
            <li class="link-item"><a href="#" class="link">Women</a></li>
            <li class="link-item"><a href="#" class="link">Men</a></li>
            <li class="link-item"><a href="#" class="link">Kids</a></li>
            <li class="link-item"><a href="#" class="link">Accessories</a></li>
        </ul>
    `;
}

createNav();

//nav popup
const userImageButton = document.querySelector('#user-img');
const userPop=document.querySelector('login-logout-popup');

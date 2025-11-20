import React from 'react'

import { CiBaseball } from "react-icons/ci";
import { CiCoins1 } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiFries } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Header = () => {
    return (
        <header id='header' role='banner'>
            <h1 className='header__logo'>
                <a href='/'>
                    <em aria-hidden='true'></em>
                    <span>Capstone<br />Design</span>
                </a>
            </h1>

            <nav className='header__menu'>
                <ul className='menu'>
                    <li>
                        <a href='/website'>
                            <CiBullhorn /> 음...
                        </a>
                    </li>
                    <li>
                        <a href='/home'>
                            <CiBullhorn /> 다른페이지 연결
                        </a>
                    </li>
                </ul>
                <ul className='keyword'>
                    <li>
                        <a href='/search/ssssiballll'>아이</a>
                    </li>
                    <li>
                        <a href='/search/fucku'>존나</a>
                    </li>
                    <li>
                        <a href='/search/jogatda'>어렵네</a>
                    </li>
                    <li>
                        <a href='/search/sibal'>썅...</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
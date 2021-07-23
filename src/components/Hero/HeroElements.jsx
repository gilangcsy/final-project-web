import styled from 'styled-components'
import myImg from '../../assets/img/hero.png'

export const HeroContainer = styled.div`
    height:auto;
    background:#effff3;
    padding: 50px;
    margin-top:60px;

    @media screen and (max-width: 576px) {
        padding:20px;
    }
`

export const HeroTitle = styled.div`
    font-size:2.5rem;
    font-weight:bold;
    line-height: 120%;
    @media screen and (max-width: 768px) {
        font-size:2rem;
    }
`

export const HeroDesc = styled.div`
    font-size:1.2rem;
    margin-top:15px;
    font-weight:medium;
    color: #11772D;
`

export const HeroBg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position:relative;

    @media screen and (max-width: 767px) {
        padding:40px;
    }
`

export const HeroImg = styled.div`
    background-image:url(${myImg});
`

export const HeroButton = styled.button`
    width:170px;
    margin-top:15px;
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    color: #fff;
    background-color: #11772D;
    border-color: #11772D;

    &:hover {
        color: #11772D;
        background-color: #effff3;
        border-color: #11772D;
    }
`
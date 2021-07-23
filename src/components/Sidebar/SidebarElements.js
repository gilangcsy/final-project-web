import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 2;
    width: 100%;
    height: auto;
    margin-top:75px;
    background: white;
    display:grid;
    align-items:center;
    top : 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    
    @media screen and (min-width: 768px) {
    display:none;
}
`

export const SidebarWrapper = styled.div`
    color:#fff;
`

export const SidebarMenu = styled.ul`
    display:grid;
    grid-template-columns: lfr;
    grid-template-rows:repeat(3, 80px);
    text-align: center;

    @media screen and (max-width:480px) {
        grid-template-rows:repeat(3, 55px);
    }
`

export const SidebarLink = styled(LinkS)`
    color: #11772D;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight:500;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.3rem;
    text-decoration:none !important;
    list-style:none;
    transition: 0.2s ease-in-out;
    cursor:pointer;
    margin-left:-40px;

    &:hover {
        color:black;
        transition: 0.2s ease-in-out;
    }
`

    // export const SideBtnWrap = styled.div`
    //     display:flex;
    //     justify-content: center;
    // `

    // export const SidebarRoute = styled(LinkR)`
    //     border-radius: 50px;
    //     background: yellow;
    //     white-space: space nowrap;
    //     padding: 16px 14px;
    //     color: black;
    //     font-size: 16px;
    //     outline:none;
    //     border:none;
    //     cursor:pointer;
    //     transition: all 0.2s ease-in-out;
    //     text-decoration:none;

    //     &:hover {
    //         transition: all 0.2s ease-in-out;
    //         background:#fff;
    //         color:white;
    //     }


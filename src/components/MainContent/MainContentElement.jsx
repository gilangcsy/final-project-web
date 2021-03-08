import styled from 'styled-components'

export const MainBox = styled.div`
    margin-top:20px;
    width:20%;
    height:auto;
    background:#faf5f4;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index:100;
    top:47px;

    @media screen and (max-width: 992px) {
        width:30%;
        top:30px;
    }

    @media screen and (max-width: 767px) {
        width:100%;
        position:static;
    }
`

export const Images = styled.div`
    height:250px;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const DescBox = styled.div`
    margin-top:20px;
    height:auto;
    background:#e5eef2;
    padding:100px;

    @media screen and (max-width: 1200px) {
        padding:80px;
    }

    @media screen and (max-width: 992px) {
        padding:60px;
    }

    @media screen and (max-width: 768px) {
        padding:60px;
    }
    /* position:relative;
    bottom:270px;
    left:90px; */
`

export const DescTitle = styled.div`
    font-size:2.5rem;
    margin:0 auto;
    width:60%;
    font-weight:bold;
    line-height: 120%;
    text-align:center;

    @media screen and (max-width: 992px) {
        margin : auto;
        font-size:2rem;
    }

    @media screen and (max-width: 767px) {
        margin:0;
        width:100%;
    }

    `
export const Description = styled.div`
    font-size:1.2rem;
    width:60%;
    padding-top:20px;
	margin: 0 auto;
    line-height: 120%;
    text-align:left;
    text-align:justify;
    hyphens: auto;

    @media screen and (max-width: 992px) {
        margin-left :0 auto;
        font-size:1rem;
    }

    @media screen and (max-width: 767px) {
        margin:0;
        width:100%;
    }
    `
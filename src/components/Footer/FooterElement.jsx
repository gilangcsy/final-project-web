import styled from 'styled-components'

export const FooterContainer = styled.div`
background:#effff3;
margin-top:120px;
width:100%;
height:auto;
padding:20px;
`

export const FooterContent = styled.div`
width:100%;
height:auto;
background:#effff3;
color:black;
padding-left:60px;
@media screen and (max-width: 768px) {
    margin-left:0;
    padding-top:20px;
    padding-left:20px;
}
`

export const FooterHead = styled.div`
    font-weight: bold;
    padding-left:20px;
    padding-bottom:40px;
    @media screen and (max-width: 768px) {
        padding-left:0px;
    }

    @media screen and (max-width: 576px) {
        padding-bottom:20px;
    }
    
`

export const FooterDesc = styled.div`
    padding-left:20px;
    cursor:pointer;
    @media screen and (max-width: 768px) {
        padding-left:0px;
    }
`

export const AdviceBox = styled.div`
background:#b6e5c2;
padding:20px;
top:-57px;
right:50px;
position: absolute;
width:70%;
height:auto;

@media screen and (max-width: 768px) {
    width:100%;
    right:0;
    top:0;
    position: relative;
}
`

export const AdviceTitle = styled.h5`
    font-weight: bold;
    display:flex;
    justify-content:center;
`

export const AdviceDesc = styled.h6`

`

export const AdviceInput = styled.textarea`
border: none;
    background: white;
    outline: none;
    float: left;
    padding: 0;
    font-size: 1rem;
    transition: 0.4s;
    width:100%;
    height:70px;
    resize:none;
`

export const AdviceButton = styled.button`
    width:100%;
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
    background-color: #212121;
    border-color: #212121;

    &:hover {
        color: #212121;
        background-color: white;
        border-color: #212121;
    }
`
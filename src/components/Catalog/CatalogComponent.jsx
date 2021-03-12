import styled from 'styled-components'
import { IoIosStar } from "react-icons/io";

export const CatalogBox = styled.div`
width:100%;
height:430px;
margin-top:20px;

/* &:hover {
    transform: scale(1.05);
    transition: 0.2s;
} */
`

export const CatalogImage = styled.div`
width:100%;
height:40%;
`
export const CatalogTitle = styled.div`
    font-size:1rem;
    font-weight:bold;
`

export const CatalogDesc = styled.div`
    font-size:1rem;
    font-weight:medium;
`
export const CatalogPrice = styled.div`
    font-size:1rem;
    font-weight:bold;
`

export const Image = styled.div`
    background-image:url('../../assets/img/${props => props.source}');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border:0;
    width: 100%;
    height: 100%;
`

export const StarIcon = styled(IoIosStar)`
    color: #e5989b;
    margin:3px;
`

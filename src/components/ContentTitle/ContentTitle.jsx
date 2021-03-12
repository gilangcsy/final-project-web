import styled from 'styled-components'

export const Title = styled.h4`
    margin-top:40px;
    font-size: 1.5rem;
    font-weight: bold;
    padding-bottom: 20px;
    position: relative;
    color: #131313;

    &:before{
        content: '';
        position: absolute;
        display: block;
        width: 120px;
        height: 1px;
        background: #ddd;
        bottom: 1px;
        left: calc(50% - 60px);
    }

    &:after{
        content: '';
        position: absolute;
        display: block;
        width: 40px;
        height: 3px;
        background: #e5989b;
        bottom: 0;
        left: calc(50% - 20px);
    }
`
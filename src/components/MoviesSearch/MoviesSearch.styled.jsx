import styled from "styled-components";

export const Input = styled('input')`
border: 2px solid blue;
border-radius: 8px;
background: inherit;
`
export const SearchBtn = styled('button')`
    width: 120px;
    text-align: center;
    margin-bottom: 5px;
    border: 2px solid blue;
    border-radius: 8px;
background: #FFEEEE;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #DDEFBB, #FFEEEE);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #DDEFBB, #FFEEEE); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    &.active {
        background: linear-gradient(to right, #1488cc, #2b32b2);
        color: #fff;
    }

    :hover:not(.active),
    :focus-visible:not(.active) {
        color: red;
        background: #FFEEEE;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #DDEFBB, #FFEEEE);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #DDEFBB, #FFEEEE); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        transform: scale(1.02);
    }
`
import styled from "styled-components";

export const Container = styled('ul')`
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 10px;
    border-radius: 8px;
    border-bottom: 2px solid blue;
background: #FFEEEE;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #DDEFBB, #FFEEEE);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #DDEFBB, #FFEEEE); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

` 
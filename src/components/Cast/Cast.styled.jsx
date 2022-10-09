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
    background: #fffc00;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #ffffff, #fffc00);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top right, #ffffff, #fffc00); 
` 
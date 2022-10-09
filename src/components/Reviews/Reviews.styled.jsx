import styled from "styled-components";

export const Title = styled('p')`
    font-size: 24;
    font-weight: bold;
    margin-bottom: 10px;
`
export const Text = styled('p')`
    font-size: 14;
`
export const Item = styled('li')`
    padding: 10px 30px;
    margin-bottom: 20px;
    border-radius: 8px;
    border-bottom: 2px solid blue;
    background: #fffc00;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom right, #ffffff, #fffc00);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom right, #ffffff, #fffc00); 
`
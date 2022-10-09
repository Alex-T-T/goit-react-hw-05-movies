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
` 
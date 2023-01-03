import React from 'react';
import headshot from '../assets/headshot.jpeg'
import styled from 'styled-components'

const Container = styled.div `


`;

function Image(props) {
    return (
        <Container>
        <div className="image-box">
            <img src={headshot} className="headshot"/>
        </div>
        </Container>
    );
}

export default Image;
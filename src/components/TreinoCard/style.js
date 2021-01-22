import styled from 'styled-components';

export const CardWrapper = styled.div`
    position: relative;
    border: solid;
    border-radius: 15px;
    overflow: hidden;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 20px;
    margin: 15px 20px 20px 15px,
    @media (max-width: 800px) {
    display: none;
    }
`;

export const DescriptionLabel = styled.p`
    margin-bottom: .5rem;
    font-family: inherit;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.2;
    color: inherit;
`;

DescriptionLabel.Detail = styled.p`
    font-size: 1rem;
`;
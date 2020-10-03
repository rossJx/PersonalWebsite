import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import { InfoSec, 
    InfoRow, 
    InfoColumn, 
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
} from './InfoSection.elements'; 
const InfoSection = ({
    primary,
    lightBg,
    imgStart,
    lightTopLine,
    lightText,
    lightTextDesc,
    buttonLabel,
    description,
    headline,
    topLine,
    img,
    alt,
    start
    }) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>
                                    {topLine}
                                </TopLine>
                                <Heading lightText={lightText}>
                                    {headline}
                                </Heading>
                                    <Subtitle lightTextDesc={lightTextDesc}>
                                        {description}
                                </Subtitle>
                                <Link to="/register">
                                    <Button big fontBig primary={primary}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    );
};

export default InfoSection;
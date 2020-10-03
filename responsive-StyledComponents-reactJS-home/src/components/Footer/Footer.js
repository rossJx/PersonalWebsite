import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Button } from '../../globalStyles';
import { 
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItem,
    FooterLinksTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcon,
    SocialIconLink,
    SocialIcons
} from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive club :)
                </FooterSubHeading>
                <FooterSubText>
                    You can unsuscribe at any time
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Insert your email" />
                    <Button fontBig>Suscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItem>
                        <FooterLinksTitle>About Us</FooterLinksTitle>
                        <FooterLink to="/login">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Carrers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLinksTitle>Contact Us</FooterLinksTitle>
                        <FooterLink to="/">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Carrers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinksItem>
                </ FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinksItem>
                        <FooterLinksTitle>Videos</FooterLinksTitle>
                        <FooterLink to="/">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Carrers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLinksTitle>Social media</FooterLinksTitle>
                        <FooterLink to="/">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Carrers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinksItem>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo>
                        <SocialIcon>
                            Ross
                        </SocialIcon>
                    </SocialLogo>
                    <WebsiteRights>Ross 2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="https://www.facebook.com/jovany.rossano" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="https://www.instagram.com/jovanyrossano" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="https://www.twitter.com/jovanyrossano" target="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                        <SocialIconLink href="https://www.linkedin.com/in/jovany-rossano-62aa151a8/" target="_blank" aria-label="Twiter">
                            <FaTwitter />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    );
}

export default Footer;
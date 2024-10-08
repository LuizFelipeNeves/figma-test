import byoerrLogo from '../assets/Byoerr-footer-logo.png';
import facebookIcon from '../assets/Facebook.png';
import twitterIcon from '../assets/Twitter.png';
import instagramIcon from '../assets/Instagram.png';
import linkedinIcon from '../assets/Linkedin.png';
import youtubeIcon from '../assets/Youtube.png';

const Footer = () => {
  return (
    <footer className="bg-[#012E4D] py-[120px] px-[80px] text-white">
      <div className="flex flex-col md:flex-row justify-between max-w-[1280px] mx-auto gap-10 md:gap-0">
        <FooterSection>
          <LogoSection />
          <ContactInfo />
          <SocialIcons />
        </FooterSection>
        <FooterSection>
          <FooterLinks title="Quick Links" links={quickLinks} />
        </FooterSection>
        <FooterSection>
          <FooterLinks title="Resources" links={resourcesLinks} />
        </FooterSection>
      </div>
    </footer>
  );
};

const FooterSection = ({ children }) => (
  <div className="flex flex-col items-start gap-[24px]">{children}</div>
);

const LogoSection = () => (
  <div className="flex items-center gap-2">
    <img src={byoerrLogo} alt="Byoerr Logo" className="cursor-pointer" />
    <h2 className="text-[36px] font-semibold leading-[120%]">Byoerr</h2>
  </div>
);

const ContactInfo = () => (
  <p className="font-poppins text-[20px]">
    hello@byoerr.com <br />
    Phone: +01 23456789
  </p>
);

const SocialIcons = () => (
  <div className="flex gap-2">
    <img src={facebookIcon} alt="Facebook" className="cursor-pointer" />
    <img src={twitterIcon} alt="Twitter" className="cursor-pointer" />
    <img src={instagramIcon} alt="Instagram" className="cursor-pointer" />
    <img src={linkedinIcon} alt="LinkedIn" className="cursor-pointer" />
    <img src={youtubeIcon} alt="YouTube" className="cursor-pointer" />
  </div>
);

const FooterLinks = ({ title, links }) => (
  <>
    <h3 className="text-[24px] font-semibold leading-[140%]">{title}</h3>
    <ul>
      {links.map((link, index) => (
        <li key={index} className="mb-[16px]">
          <a href="#" className="text-[16px] font-normal no-underline text-white">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </>
);

const quickLinks = ["Services", "Portfolio", "About us", "Testimonial"];
const resourcesLinks = ["Support", "Privacy Policy", "Terms & Conditions"];

export default Footer;
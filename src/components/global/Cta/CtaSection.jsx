import Button from "../button/Button";
import { ctaData } from "../../../data";
import {
  CtaContainer,
  CtaWrap,
  CtaContent,
  CtaHeader,
  CtaSubHeader,
  CtaButton,
  MobileButton,
} from "./CtaSectionStyles";

const CtaSection = () => {
  return (
    <>
      <CtaContainer id="cta-container">
        <CtaWrap>
          <CtaContent>
            <CtaHeader>{ctaData?.header}</CtaHeader>
            <CtaSubHeader>{ctaData?.subHeader}</CtaSubHeader>
            <MobileButton>
              <Button link={ctaData?.button.link} primary="true">
                {ctaData?.button.title}
              </Button>
            </MobileButton>
          </CtaContent>
          <CtaButton>
            <Button link={ctaData?.button.link} primary="true">
              {ctaData?.button.title}
            </Button>
          </CtaButton>
        </CtaWrap>
      </CtaContainer>
    </>
  );
};

export default CtaSection;

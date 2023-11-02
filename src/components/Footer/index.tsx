import Text from "@components/Text";
import { StyledFooter } from "./styles";
import Image from "next/image";

const Footer = () => {
  return (
    <StyledFooter>
      <Text align="center" type="subtitle" color="white" weight="500">
        SimpliMuv
      </Text>
    </StyledFooter>
  );
};

export default Footer;

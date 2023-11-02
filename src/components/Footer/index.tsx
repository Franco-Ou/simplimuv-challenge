import Text from "@components/Text";
import { StyledFooter } from "./styles";

const Footer = () => {
  return (
    <StyledFooter>
      <Text $align="center" type="subtitle" color="white" $weight="500">
        SimpliMuv
      </Text>
    </StyledFooter>
  );
};

export default Footer;

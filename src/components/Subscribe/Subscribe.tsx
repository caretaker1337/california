import React from "react";

import { Heading } from "~/theme/components";
import {
  StyledWrapper,
  StyledMedia,
  StyledForm,
  StyledInput,
  StyledButton,
} from "./styled";

const Subscribe: React.FC = () => (
  <StyledWrapper>
    <Heading
      title="Never miss a thing"
      text="Sign up for texts to be notified about our best offers on the perfect gifts."
    />

    <StyledMedia>
      <img alt="Subscribe image." src="images/subscribe_img.png" />
    </StyledMedia>

    <StyledForm>
      <StyledInput placeholder="Email" type="text" />
      <StyledButton type="submit">Sign Up</StyledButton>
    </StyledForm>
  </StyledWrapper>
);

export { Subscribe };

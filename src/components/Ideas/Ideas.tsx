import React from "react";

import { Heading } from "~/theme/components";
import { StyledLayout, StyledContent } from "./styled";

const Ideas: React.FC = () => (
  <div>
    <Heading
      title="Ideas have a place here"
      text="Our new Limited Edition Winter Design BESPOKE 4-Door Flex™"
    />

    <StyledLayout>
      <div>
        <img src="images/ideas_img.jpg" alt="ideas_img" />
      </div>

      <StyledContent>
        <p>We Make It Easy To Find The Great Design Talent, Easier...</p>
        <p>Road Design Handbook For The International Road...</p>
        <p>The Best Kept Secrets About Creative People</p>
        <p>We Make It Easy To Find The Great Design Talent, Easier...</p>
      </StyledContent>
    </StyledLayout>
  </div>
);

export { Ideas };

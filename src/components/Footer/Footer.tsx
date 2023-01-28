import React, { useEffect, useState } from "react";

import { Loader } from "~/components";
import { TFooterItem } from "./types";
import {
  StyledWrapper,
  StyledLayout,
  StyledContent,
  StyledLogo,
  StyledLogoMedia,
  StyledLogoText,
  StyledContentLayout,
  StyledContentTitle,
  StyledContentColumn,
  StyledContentMenu,
  StyledContentMenuList,
  StyledContentMenuItem,
  StyledContentMenuLink,
  StyledCopyright,
  StyledCopyrightContent,
  StyledCopyrightColumn,
  StyledCopyrightButton,
} from "./styled";

const Footer: React.FC = () => {
  const [footerItems, setFooterItems] = useState<TFooterItem[]>([]);
  const [categoriesLoading, toggleCategoriesLoading] = useState<boolean>(true);

  const getFooterItems = (): void => {
    fetch("data/footerData.json")
      .then((response: Response): Promise<TFooterItem[]> => response.json())
      .then((data: TFooterItem[]): void => {
        setFooterItems(data);
      })
      .catch((): void => {
        setFooterItems([]);
      })
      .finally((): void => {
        toggleCategoriesLoading(false);
      });
  };

  useEffect((): void => {
    getFooterItems();
  }, []);

  return (
    <StyledWrapper>
      <StyledLayout>
        <StyledContent>
          <StyledLogo>
            <StyledLogoMedia>
              <img src="images/logo_img.png" alt="Footer logo." />
            </StyledLogoMedia>

            <StyledLogoText>
              Sign up for texts to be notified about our best offers on the perfect
              gifts.
            </StyledLogoText>
          </StyledLogo>

          {footerItems && !!footerItems.length && (
            <StyledContentLayout>
              {footerItems.map(
                ({ id, items, title }: TFooterItem): React.ReactElement => (
                  <StyledContentColumn key={id}>
                    <StyledContentTitle>{title}</StyledContentTitle>

                    <StyledContentMenu>
                      <StyledContentMenuList>
                        {items.map(
                          (
                            { title: menuTitle },
                            index: number
                          ): React.ReactElement => (
                            <StyledContentMenuItem key={`${id}-menu-item-${index}`}>
                              <StyledContentMenuLink href="#">
                                {menuTitle}
                              </StyledContentMenuLink>
                            </StyledContentMenuItem>
                          )
                        )}
                      </StyledContentMenuList>
                    </StyledContentMenu>
                  </StyledContentColumn>
                )
              )}
            </StyledContentLayout>
          )}

          {categoriesLoading && <Loader />}
        </StyledContent>

        <StyledCopyright>
          <div>
            <img src="images/divider_footer_img.png" alt="Footer menu." />
          </div>

          <StyledCopyrightContent>
            <StyledCopyrightColumn>
              Made By:<p>Azwedo</p>
              <StyledCopyrightButton type="button">
                <a href="#">
                  <img
                    alt="copyright_arrow_img"
                    src="images/copyright_arrow_img.png"
                  />
                </a>
              </StyledCopyrightButton>
            </StyledCopyrightColumn>

            <StyledCopyrightColumn>
              Powered by:<p>Webflow</p>
              <StyledCopyrightButton type="button">
                <img
                  alt="copyright_arrow_img"
                  src="images/copyright_arrow_img.png"
                />
              </StyledCopyrightButton>
            </StyledCopyrightColumn>
          </StyledCopyrightContent>
        </StyledCopyright>
      </StyledLayout>
    </StyledWrapper>
  );
};

export { Footer };

import React, { useCallback, useEffect, useState } from "react";

import { Loader } from "~/components";
import { Heading } from "~/theme/components";
import { THint } from "./types";
import { SearchSvg } from "~/icons";
import {
  StyledWrapper,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledHints,
  StyledHintsList,
  StyledHintsButton,
  StyledClear,
} from "./styled";

const Search: React.FC = () => {
  const [hints, setHints] = useState<THint[]>([]);
  const [selectedHints, setSelectedHints] = useState<THint[]>([]);
  const [hintsLoading, toggleHintsLoading] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");

  const getHints = (): void => {
    fetch(`data/hints.json`)
      .then((response: Response) => response.json())
      .then((data: THint[]): void => {
        setHints(data);
      })
      .catch((): void => {
        setHints([]);
      })
      .finally((): void => {
        toggleHintsLoading(false);
      });
  };

  const checkActiveHint = (hint: THint): boolean => {
    return selectedHints.some(({ key }) => key === hint.key);
  };

  const handleInputValue = ({ currentTarget }: React.SyntheticEvent<HTMLInputElement>): void => {
    const { value } = currentTarget;

    setInputValue(value);
  };

  const handleSearchClear = (): void => {
    setInputValue("");
    setSelectedHints([]);
  };

  const handleHintToggle = useCallback((hint: THint): void => {
    setSelectedHints((prevHints: THint[]): THint[] => {
      const newHints = [...prevHints];

      if (newHints.find(({ key }: THint): boolean => key === hint.key)) {
        return newHints.filter(({ key }: THint): boolean => key !== hint.key);
      }

      return [...newHints, hint];
    });
  }, []);

  useEffect((): void => {
    setInputValue((): string => {
      const selectedValue: string = selectedHints.map(({ text }: THint): string => text).join(" ");

      return selectedValue;
    });
  }, [selectedHints]);

  useEffect((): void => {
    getHints();
  }, []);

  return (
    <StyledWrapper>
      <Heading title="Looking for anything else?" />

      <StyledForm action="#">
        <StyledInput
          onChange={handleInputValue}
          placeholder="Search keyword"
          type="text"
          value={inputValue}
        />

        <StyledButton type="submit">
          <SearchSvg />
        </StyledButton>

        {inputValue && (
          <StyledClear type="button" onClick={handleSearchClear}>
            X
          </StyledClear>
        )}
      </StyledForm>

      <StyledHints>
        {hints && !!hints.length && (
          <StyledHintsList>
            {hints.map((hint: THint, index: number): React.ReactElement => {
              const { key, text } = hint;

              return (
                <li key={`${key}-${index}`}>
                  <StyledHintsButton
                    isActive={checkActiveHint(hint)}
                    onClick={(): void => handleHintToggle(hint)}
                  >
                    {text}
                  </StyledHintsButton>
                </li>
              );
            })}
          </StyledHintsList>
        )}

        {hintsLoading && <Loader />}
      </StyledHints>
    </StyledWrapper>
  );
};

export { Search };

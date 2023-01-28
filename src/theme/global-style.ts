import { base, reset, swiper } from "./global";
import { createGlobalStyle } from "~/theme";

const GlobalStyle = createGlobalStyle`
	${reset}
	${base}
	${swiper}
`;

export { GlobalStyle };

import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
// import { ButtonContainer as Button } from "./components/Button";

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Button variant="primary" />
			<Button variant="secundary" />
			<Button variant="danger" />
			<Button variant="sucess" />

			<GlobalStyle />
		</ThemeProvider>
	);
}
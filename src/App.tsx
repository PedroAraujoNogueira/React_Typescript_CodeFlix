import { Box, ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material';
import { Header } from './components/Header';
import { Layout } from './components/Layout';

const theme = createTheme();

export default function App() {
  return (
  <ThemeProvider theme={theme}>
    <Box component="main"
          sx={{
            height: "100vh",
            // backgroundColor: "#000"
          }}
    >
      <Header/>
      <Layout>
        <h1>Olá Meu Deus</h1>
      </Layout>
    </Box>
  </ThemeProvider>      
  );
}

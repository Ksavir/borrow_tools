import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { MainLayout } from '@/layouts/main-layout';
import { HomePage } from '@/pages/home';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <MainLayout>
        <HomePage />
      </MainLayout>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
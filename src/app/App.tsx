import '@shared/lib/i18n';
import { ErrorBoundary } from '@shared/ui';
import { AppRouter } from '@app/router';
import { AppThemeProvider, LanguageProvider, StoreProvider, UserProvider } from '@app/providers';

export function App() {
  return (
    <ErrorBoundary>
      <StoreProvider>
        <LanguageProvider>
          <AppThemeProvider>
            <UserProvider>
              <AppRouter />
            </UserProvider>
          </AppThemeProvider>
        </LanguageProvider>
      </StoreProvider>
    </ErrorBoundary>
  );
}

import { startTransition, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@app/providers';
import { APP_ROUTES } from '@shared/lib/constants';
import { AuthPageShell, AuthTextField } from './AuthPageShell';
import type { FormEvent } from 'react';

export function LoginPage() {
  const { t } = useTranslation('auth');
  const { login } = useUser();
  const navigate = useNavigate();
  const [busy, setBusy] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBusy(true);

    await login({ email, password });

    startTransition(() => {
      navigate(APP_ROUTES.home);
    });

    setBusy(false);
  };

  return (
    <AuthPageShell
      eyebrow={t('shell.eyebrow')}
      title={t('login.title')}
      body={t('login.body')}
      submitLabel={t('login.submit')}
      alternateLabel={t('login.alternate')}
      alternateTo={APP_ROUTES.register}
      busy={busy}
      onSubmit={handleSubmit}
      fields={
        <>
          <AuthTextField
            label={t('fields.email')}
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <AuthTextField
            label={t('fields.password')}
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </>
      }
    />
  );
}

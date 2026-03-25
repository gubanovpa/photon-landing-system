import { startTransition, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@app/providers';
import { APP_ROUTES } from '@shared/lib/constants';
import { AuthPageShell, AuthTextField } from './AuthPageShell';
import type { FormEvent } from 'react';

export function RegisterPage() {
  const { t } = useTranslation('auth');
  const { register } = useUser();
  const navigate = useNavigate();
  const [busy, setBusy] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBusy(true);

    await register({ name, email, password });

    startTransition(() => {
      navigate(APP_ROUTES.home);
    });

    setBusy(false);
  };

  return (
    <AuthPageShell
      eyebrow={t('shell.eyebrow')}
      title={t('register.title')}
      body={t('register.body')}
      submitLabel={t('register.submit')}
      alternateLabel={t('register.alternate')}
      alternateTo={APP_ROUTES.login}
      busy={busy}
      onSubmit={handleSubmit}
      fields={
        <>
          <AuthTextField
            label={t('fields.name')}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
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

import type { LeadSubmission } from '@entities/lead';

export async function submitLeadEmail(email: string): Promise<LeadSubmission> {
  await new Promise((resolve) => {
    window.setTimeout(resolve, 800);
  });

  if (!email.includes('@')) {
    throw new Error('Please provide a valid email address.');
  }

  return {
    email,
    submittedAt: new Date().toISOString(),
  };
}

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'toudisoua@gmail.com',

    subject: body.subject,

    html: `
      <h3>${body.name}</h3>
      <p>${body.email}</p>
      <p>${body.message}</p>
    `,
  });

  return Response.json({
    success: true,
  });
}

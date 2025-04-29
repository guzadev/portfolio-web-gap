import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Validar que la API key existe
const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  console.error('RESEND_API_KEY no está configurada en las variables de entorno');
}

const resend = new Resend(apiKey);

export async function POST(request: Request) {
  if (!apiKey) {
    return new Response('Error: API key no configurada. Por favor, configura RESEND_API_KEY en .env.local', 
      { status: 500 }
    );
  }

  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return new Response('Error: Faltan campos requeridos', { status: 400 });
    }

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'pazgustavoadrian@gmail.com',
      subject: `Nuevo mensaje de ${name}`,
      text: `
        Nombre: ${name}
        Email: ${email}
        Mensaje: ${message}
      `,
    });

    return new Response('OK', { status: 200 });
  } catch (error: any) {
    console.error('Error:', error);
    return new Response(
      `Error al enviar el mensaje: ${error.message}`,
      { status: 500 }
    );
  }
}
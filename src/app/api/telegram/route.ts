import {NextRequest, NextResponse} from "next/server";

const baseUrl = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/`
const chatId = process.env.CHAT_ID;

export async function POST(req: NextRequest) {
  try {
    const data: { name: string, email: string, message: string } = await req.json();

    const message = `
    🔔 Новое сообщение с сайта!
     👤 Имя: ${data.name}
     📧 Email: ${data.email}
     💬 Сообщение: ${data.message}
     📅 Дата: ${new Date().toLocaleString('ru-RU')}
     `;

    const response = await fetch(`${baseUrl}sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      })
    });

    if (!response.ok) {
      const errorText: Response & { description: string } = await response.json();
      return NextResponse.json(
          {success: false, message: errorText.description},
          {status: 500}
      );
    }
    return NextResponse.json({success: true, message: 'Сообщение успешно отправлено'}, {status: 200});

  } catch (error) {
    console.error('Error processing form data:', error);
    return NextResponse.json(
        {success: false, message: 'Внутренняя ошибка сервера'},
        {status: 500}
    );
  }
}
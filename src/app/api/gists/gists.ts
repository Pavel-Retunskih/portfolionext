import {NextResponse} from "next/server";

export async function GET(request: Request) {
  try {
    // 1. Получаем URL из query-параметров
    const {searchParams} = new URL(request.url);
    const gistUrl = searchParams.get('url');

    if (!gistUrl) {
      return NextResponse.json(
          {error: 'Missing URL parameter'},
          {status: 400}
      );
    }

    // 2. Проверяем, что URL принадлежит GitHub
    if (!gistUrl.startsWith('https://gist.githubusercontent.com/')) {
      return NextResponse.json(
          {error: 'Invalid GitHub Gist URL'},
          {status: 400}
      );
    }

    // 3. Делаем запрос к GitHub API
    const response = await fetch(gistUrl, {
      headers: {
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28'
      },
      cache: 'no-store' // Отключаем кэширование
    });

    // 4. Обрабатываем ответ
    if (!response.ok) {
      const errorData = await response.text();
      console.error('GitHub API Error:', errorData);
      return NextResponse.json(
          {error: `GitHub API error: ${response.statusText}`},
          {status: response.status}
      );
    }

    // 5. Возвращаем сырой текст
    const text = await response.text();
    return new NextResponse(text, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    });

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
        {error: 'Internal server error'},
        {status: 500}
    );
  }
}
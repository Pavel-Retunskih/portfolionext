import {NextRequest, NextResponse} from 'next/server';

export async function GET(request: NextRequest) {
  const {searchParams} = new URL(request.url);
  const rawUrl = searchParams.get('url');

  if (!rawUrl) {
    return NextResponse.json({error: 'URL parameter is required'}, {status: 400});
  }

  let urlObj: URL;
  try {
    urlObj = new URL(rawUrl);
  } catch {
    return NextResponse.json({error: 'Invalid URL'}, {status: 400});
  }

  const allowedHosts = new Set([
    'api.github.com',
    'gist.githubusercontent.com',
    'raw.githubusercontent.com'
  ])

  if (urlObj.protocol !== 'https:' || !allowedHosts.has(urlObj.hostname)) {
    return NextResponse.json({error: 'Invalid URL or unsupported protocol'}, {status: 400});
  }

  if (!process.env.GITHUB_GISTS_TOKEN) {
    return NextResponse.json({error: 'GitHub token not found'}, {status: 500});
  }

  try {
    const response = await fetch(rawUrl, {
      headers: {
        'Authorization': `Bearer ${process.env.GITHUB_GISTS_TOKEN}`,
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28'
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const content = await response.text();
    return new NextResponse(content, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  } catch (error) {
    console.error('Error fetching gist content:', error);
    return new NextResponse('// Ошибка загрузки содержимого', {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
}
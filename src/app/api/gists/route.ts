import { NextResponse } from 'next/server';

export async function GET() {
  if (!process.env.GITHUB_GISTS_TOKEN) {
    return NextResponse.json({ error: 'GitHub token not found' }, { status: 500 });
  }

  if (!process.env.GITHUB_GISTS_URL) {
    return NextResponse.json({ error: 'GitHub gists URL not found' }, { status: 500 });
  }

  try {
    const response = await fetch(process.env.GITHUB_GISTS_URL, {
      headers: {
        'Authorization': `Bearer ${process.env.GITHUB_GISTS_TOKEN}`,
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch gists: ${response.status}`);
    }

    const gists = await response.json();
    return NextResponse.json(gists);
  } catch (error) {
    console.error('Error fetching gists:', error);
    return NextResponse.json({ error: 'Failed to fetch gists' }, { status: 500 });
  }
}
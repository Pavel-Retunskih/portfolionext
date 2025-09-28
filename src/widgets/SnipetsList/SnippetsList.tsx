'use client'

import {SnippetCard} from "@/components/SnippetCard/SnippetCard";
import {Gist} from "@/widgets/SnipetsList/model/type";
import {Carousel} from "@/components/Carusel/Carusel";
import {useEffect, useState} from "react";

async function fetchGistContent(rawUrl: string): Promise<string> {
  try {
    // Используем API route для получения данных
    const response = await fetch(`/api/gist-content?url=${encodeURIComponent(rawUrl)}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.error('Error fetching gist content:', error);
    return '// Ошибка загрузки содержимого';
  }
}

function SnippetCardSkeleton() {
  return (
      <div className="w-[664px] h-full flex flex-col space-y-3">
        <div className="w-full flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <div className="h-9 w-9 rounded-full bg-lines/60 animate-pulse" />
            <div className="flex gap-1.5 flex-col">
              <div className="h-4 w-32 bg-lines/60 animate-pulse rounded" />
              <div className="h-3 w-20 bg-lines/50 animate-pulse rounded" />
            </div>
          </div>
          <div className="h-3 w-16 bg-lines/50 animate-pulse rounded" />
        </div>

        <div className="border border-lines rounded-lg overflow-hidden bg-primary-dark_blue flex-1 min-h-0 flex flex-col">
          <div className="flex items-center justify-between px-4 py-2 border-b border-lines/60 shrink-0">
            <div className="h-3 w-24 bg-lines/50 animate-pulse rounded" />
            <div className="h-3 w-14 bg-lines/50 animate-pulse rounded" />
          </div>
          <div className="p-5 flex-1 min-h-0 overflow-hidden">
            <div className="h-full w-full bg-lines/40 animate-pulse rounded" />
          </div>
        </div>

        <div className="border-t border-t-lines pt-3 shrink-0 max-h-[48px] overflow-hidden">
          <div className="h-4 w-3/4 bg-lines/50 animate-pulse rounded" />
        </div>
      </div>
  )
}

export function SnippetsList() {
  const [gistsWithContent, setGistsWithContent] = useState<{ gist: Gist, content: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadGists() {
      try {
        // Используем API route для получения gists
        const response = await fetch('/api/gists');

        if (!response.ok) {
          throw new Error(`Failed to fetch gists: ${response.status}`);
        }

        const gists: Gist[] = await response.json();

        // Загружаем контент для каждого gist
        const gistsWithContentData = await Promise.all(
            gists.map(async (gist) => {
              const filesData = Object.values(gist.files);
              const content = filesData.length > 0
                  ? await fetchGistContent(filesData[0].raw_url)
                  : '// Файлы не найдены';

              return {gist, content};
            })
        );

        setGistsWithContent(gistsWithContentData);
      } catch (error) {
        console.error('Error in SnippetsList:', error);
        setError('Ошибка при загрузке данных');
      } finally {
        setLoading(false);
      }
    }

    loadGists();
  }, []);

  if (loading) {
    return (
        <div className="p-10 flex flex-col h-full">
          <span className="mb-7">{'// Code snippet showcase:'}</span>
          <Carousel slides={Array.from({length: 6})}>
            {() => (<SnippetCardSkeleton />)}
          </Carousel>
        </div>
    );
  }

  if (error) {
    return <div className="p-10">{error}</div>;
  }

  return (
      <div className="p-10 flex flex-col h-full">
        <span className="mb-7">{'// Code snippet showcase:'}</span>
        <Carousel slides={gistsWithContent} options={{align: 'center', startIndex: 3}}>
          {(slide) => (
              <SnippetCard gist={slide.gist} content={slide.content}/>
          )}
        </Carousel>
      </div>
  );
}

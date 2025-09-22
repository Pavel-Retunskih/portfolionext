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
    return <div className="p-10">Загрузка...</div>;
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
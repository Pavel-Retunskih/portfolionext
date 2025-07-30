'use client'
import Image from "next/image";
import {FC, memo, useEffect, useMemo, useState} from "react";
import {Gist} from "@/widgets/SnipetsList/model/type";
import SyntaxHighlighter from "react-syntax-highlighter";
import {gruvboxDark} from "react-syntax-highlighter/dist/esm/styles/hljs";

type Props = {
  gist: Gist;
}


export const SnippetCard: FC<Props> = memo(({gist}: Props) => {
  const {files, created_at, description, forks_url, owner: {login, avatar_url}} = gist
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [forkCount, setForkCount] = useState<string>('');
  const [openDetails, setOpenDetails] = useState<boolean>(false);

  const filesData = useMemo(() => Object.values(files), [files])

  useEffect(() => {
    const fetchGist = async () => {
      try {
        const forkCountResponse = await fetch(forks_url);
        const forks = await forkCountResponse.json();
        const fileResponse = await fetch(filesData[0].raw_url);
        const fileContent = await fileResponse.text();
        setForkCount(forks.length);
        setContent(fileContent);
      } catch (err) {
        setError(err as string);
      } finally {
        setLoading(false);
      }
    };

    fetchGist();
  }, [forks_url, filesData]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return <div className={'w-[664px]'}>
    <div className={'w-full flex items-center justify-between mb-3'}>
      <div className={'flex gap-2'}>
        <div>
          <Image src={avatar_url} alt={'User Avatar'} className={'rounded-full'} width={36} height={36}/>
        </div>
        <div className={'flex gap-2 flex-col'}>
          <span className={'text-secondary-purple text-sm'}>{login}</span>
          <span className={'text-xs'}>{new Date(created_at).toLocaleDateString()}</span>
        </div>
      </div>
      <div className={'flex gap-2'}>
        <button onClick={() => setOpenDetails(prev => !prev)}>details</button>
        <span> {forkCount} forks</span>
      </div>
    </div>

    <div className={'bg-primary-dark_blue border border-lines p-5 rounded'}>
      <SyntaxHighlighter language="javascript" customStyle={{
        background: 'transparent',
      }} style={gruvboxDark} wrapLongLines
                         showLineNumbers>
        {content}
      </SyntaxHighlighter>

    </div>
    {openDetails && <div className={'mt-5 border-t border-t-lines'}>
      <p className={'pt-4'}>{description}</p>
    </div>
    }
  </div>
})
SnippetCard.displayName = 'SnippetCard'
'use client'
import Image from "next/image";
import {FC} from "react";
import {Gist} from "@/widgets/SnipetsList/model/type";
import SyntaxHighlighter from "react-syntax-highlighter";
import {gruvboxDark} from "react-syntax-highlighter/dist/cjs/styles/hljs";


type Props = {
  gist: Gist;
  content: string;
  forkCount?: number;
}

export const SnippetCard: FC<Props> = ({gist, content, forkCount = 0}) => {
  const {files, created_at, description, owner: {login, avatar_url}} = gist;
  const filesData = Object.values(files);
  const fileName = filesData[0]?.filename || 'unknown';
  const ext = fileName.includes('.') ? fileName.split('.').pop()!.toLowerCase() : '';
  const langMap: Record<string, string> = {
    js: 'javascript',
    jsx: 'javascript',
    ts: 'typescript',
    tsx: 'typescript',
    json: 'json',
    css: 'css',
    scss: 'scss',
    html: 'xml',
    md: 'markdown',
    sh: 'bash',
    yml: 'yaml',
    yaml: 'yaml'
  };
  const language = langMap[ext] || (ext || 'text');

  return (
      <div className="w-[664px]">
        <div className="w-full flex items-center justify-between mb-3">
          <div className="flex gap-2">
            <Image
                src={avatar_url}
                alt={`${login} avatar`}
                className="rounded-full"
                width={36}
                height={36}
            />
            <div className="flex gap-2 flex-col">
              <span className="text-secondary-purple text-sm">{login}</span>
              <span className="text-xs">{new Date(created_at).toLocaleDateString()}</span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-xs">{forkCount} forks</span>
          </div>
        </div>

        <div className="bg-primary-dark_blue border border-lines p-5 rounded">
          <SyntaxHighlighter
              language={language}
              customStyle={{background: 'transparent'}}
              style={gruvboxDark}
              wrapLongLines
              showLineNumbers
          >
            {content}
          </SyntaxHighlighter>
        </div>

        {description && (
            <div className="mt-5 border-t border-t-lines pt-4">
              <p>{description}</p>
            </div>
        )}
      </div>
  );
};
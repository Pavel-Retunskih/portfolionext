'use client'
import Image from "next/image";
import Link from "next/link";
import {FC} from "react";
import {Gist} from "@/widgets/SnipetsList/model/type";
import SyntaxHighlighter from "react-syntax-highlighter";
import {gruvboxDark} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import GithubIcon from "@/assets/svg/GithubIcon";


type Props = {
  gist: Gist;
  content: string;
  forkCount?: number;
}

export const SnippetCard: FC<Props> = ({gist, content, forkCount = 0}) => {
  const {files, created_at, description, owner: {login, avatar_url}, html_url} = gist;
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
      <div className="w-[664px] flex flex-col space-y-3">
        <div className="w-full flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <Image
                src={avatar_url}
                alt={`${login} avatar`}
                className="rounded-full"
                width={36}
                height={36}
            />
            <div className="flex gap-1.5 flex-col">
              <span className="text-secondary-purple text-sm">{login}</span>
              <span className="text-xs text-secondary-grey">{new Date(created_at).toLocaleDateString()}</span>
            </div>
          </div>
          <div className="flex gap-2 items-center text-xs text-secondary-grey">
            <span>{forkCount} forks</span>
          </div>
        </div>

        <div className="border border-lines rounded-lg overflow-hidden bg-primary-dark_blue">
          <div className="flex items-center justify-between px-4 py-2 border-b border-lines/60">
            <span className="text-xs md:text-sm text-secondary-grey">{fileName}</span>
            <Link href={html_url} target="_blank" rel="noreferrer" aria-label="View gist on GitHub"
                  className="flex items-center gap-2 text-secondary-grey hover:text-secondary-white transition-colors">
              <GithubIcon className="h-4 w-4"/>
              <span className="hidden sm:inline text-xs">View</span>
            </Link>
          </div>
          <div className="p-5">
            <SyntaxHighlighter
                language={language}
                customStyle={{background: 'transparent', margin: 0}}
                style={gruvboxDark}
                wrapLongLines
                showLineNumbers
            >
              {content}
            </SyntaxHighlighter>
          </div>
        </div>

        {description && (
            <div className="border-t border-t-lines pt-3">
              <p className="text-sm leading-relaxed">{description}</p>
            </div>
        )}
      </div>
  );
};

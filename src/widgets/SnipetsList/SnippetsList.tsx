import {SnippetCard} from "@/components/SnippetCard/SnippetCard";
import {Gist} from "@/widgets/SnipetsList/model/type";

export async function SnippetsList() {
  console.log("SnippetsList");
  
  if (!process.env.GITHUB_TOKEN) {
    console.error('GitHub token not found');
    return <div>Ошибка: токен GitHub не найден</div>;
  }

  const response = await fetch('https://api.github.com/users/Pavel-Retunskih/gists', {
    headers: {
      'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  
  if (!response.ok) {
    console.error('Failed to fetch gists:', response.status);
    return <div>Ошибка загрузки данных</div>;
  }

  const data: Gist[] = await response.json()
  return <div className={'p-10 gap-7 flex flex-col'}>
    {data && data.map((gist) => <SnippetCard key={gist.id} gist={gist}/>)}
  </div>
}
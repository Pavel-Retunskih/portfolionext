export async function generateStaticParams() {

  const res = await fetch(`https://re-tune.xyz/api`, {method: 'GET'})
  const data = await res.json()
  return data.pages.map((page: { title: string }) => ({slug: page.title}))
}

export default async function AboutPage({params}: { params: Promise<{ slug: string }> }) {
  const {slug} = await params
  const res = await fetch(`https://re-tune.xyz/api/${slug}`, {method: 'GET'})
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const data = await res.json()

  return (<div className={'max-w-[624px] border-r border-r-lines'}>
    <div>
      <span className={'border-r inline-block pl-4 pr-12 border-r-lines p-2'}>{slug}</span>
    </div>

    <div
        className="scrollbar-h-2.5 scrollbar border-t pl-6 border-t-lines scrollbar-thumb-secondary-grey  h-[794px] overflow-y-scroll">
      {data.pageData.description}
    </div>
  </div>)
}

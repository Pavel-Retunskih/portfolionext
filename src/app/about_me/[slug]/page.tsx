const URL = process.env["NEXT_PUBLIC_API_URL"]

// async function getPageContent({title}: { title: string }) {
//   if (!URL) {
//     throw new Error('NEXT_PUBLIC_API_URL is not defined')
//   }
//   const res = await fetch(URL, {method: 'GET', body: JSON.stringify({title: title})})
//   return await res.json()
// }

export async function generateStaticParams() {
  if (!URL) {
    throw new Error('NEXT_PUBLIC_API_URL is not defined')
  }
  const res = await fetch(`https://re-tune.xyz/api`, {method: 'GET'})
  const data = await res.json()
  return data.pages.map((page: { title: string }) => ({slug: page.title}))
}

export default async function AboutPage({params}: { params: Promise<{ slug: string }> }) {
  const {slug} = await params
  if (!URL) {
    throw new Error('NEXT_PUBLIC_API_URL is not defined')
  }
  const res = await fetch(`https://re-tune.xyz/api/${slug}`, {method: 'GET'})
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const data = await res.json()

  return (<div className={'w-full max-w-[624px] border-r-2 pl-6 border-r-lines'}>
    {data.pageData.description}
  </div>)
}

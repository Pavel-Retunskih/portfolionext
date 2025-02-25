export default async function AboutPage({params}: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  let data
  try {
    const res = await fetch('https://re-tune.xyz/api', {method: 'POST', body: JSON.stringify({title: slug})})
    data = await res.json()
    console.log(data.body.page.description)
  } catch (error) {
    console.log(error);
  }


  return (<div className={'w-full max-w-[624px] border-r-2 pl-6 border-r-lines'}>
    {data.body.page.description}
  </div>)
}
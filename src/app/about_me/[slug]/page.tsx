const URL = process.env["NEXT_PUBLIC_API_URL"]

async function getPageContent({title}:{title: string}) {
    if(!URL){
        throw new Error('NEXT_PUBLIC_API_URL is not defined')
    }
    const res = await fetch(URL,{method: 'POST', body: JSON.stringify({title: title})})
    return await res.json()
}

export async function generateStaticParams(){
    if(!URL){
        throw new Error('NEXT_PUBLIC_API_URL is not defined')
    }
    const res = await fetch(URL,{method: 'POST',body:JSON.stringify({})})
    const data = await res.json()
    return data.body.pages.map((page: { title: string }) => ({slug: page.title}))
}

export default async function AboutPage({params}: { params: Promise<{ slug: string }>}) {
    const {slug} =  await params

    const resp = await getPageContent({title:slug})
    console.log(resp.body.page.description)
    return (<div className={'w-full max-w-[624px] border-r-2 pl-6 border-r-lines'}>
        {resp.body.page.description}
    </div>)
}

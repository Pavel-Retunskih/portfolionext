'use client'
export default function HelloPage(){
  return (
      <div className={'flex-col gap-8 lg:flex-row max-w-[1160px] w-full flex items-center  lg:my-[180px]' +
          ' mx-auto justify-between'}>
    <div className={'md:mt-14'}>
      <p className={'text-[18px] text-white'}>Hi all. I am</p>
      <h1 className={'text-[62px] text-secondary-white'}>Pavel Retunskih</h1>
      <p className={'text-[32px] text-secondary-purple'}> &gt; Front-end developer</p>
      <p className={'text-base text-secondary-grey'}>{'//'} complete the game to continue</p>
      <p className={'text-base text-secondary-grey'}>{'//'} you can also see it on my Github page</p>
      <p className={'text-base'}><span className={'text-secondary-purple'}>const</span> <span
          className={'text-accent-aqua'}>githubLink</span> = <span
          className={'text-accent-pink'}>“https://github.com/example/url”</span></p>
    </div>
    <div className={'w-[510px] h-[475px] border-[1px] border-[#0C1616] bg-gradient-to-br' +
        ' from-[#175553] to-[#43D9AD] backdrop-blur-xl opacity-60 shadow-inner shadow-white px-[30px] py-[35px]'+' ' +
        'hidden sm:block'}>
  <div className={'bg-black opacity-75 w-[240px] h-[405px]'}>
  </div>
    </div>

  </div>)
}
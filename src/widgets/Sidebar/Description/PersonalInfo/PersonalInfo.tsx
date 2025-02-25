'use client'

import {Accordion} from "radix-ui";
import FolderIcon from "@/assets/svg/FolderIcon";
import ArrowIcon from "@/assets/svg/ArrowIcon";
import {memo, useState} from "react";
import Link from "next/link";

export const PersonalInfo = memo(() => {
  const [value, setValue] = useState<string>('bio')
  return (
      <Accordion.Root type={'single'} collapsible className={'p-3'} onValueChange={setValue} defaultValue={value}>
        <Accordion.Item value={'bio'}>
          <Accordion.Trigger className={'flex gap-2 items-center'}>
            <ArrowIcon
                className={`transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] ${value === 'bio' ? 'rotate-90' : 'rotate-0'}`}/>
            <FolderIcon
                className={'text-accent-pink'}/>bio</Accordion.Trigger>
          <Accordion.Content
              className={'overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown'}>
            <ul>
              <li>
                <Link href={'/about_me/who_i_am/'}>who am I</Link>
              </li>
              <li>
                <Link href={'/about_me/where_am_I_from/'}>where am I from</Link>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value={'interests'}>
          <Accordion.Trigger className={'flex gap-2 items-center'}>
            <ArrowIcon
                className={`transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] ${value === 'interests' ? 'rotate-90' : 'rotate-0'}`}/>
            <FolderIcon
                className={'text-accent-aqua'}/>
            interests</Accordion.Trigger>
          <Accordion.Content
              className={'overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown'}>
            <ul>
              <li>
                <Link href={'/about_me/what_interests_me_most/'}>what interests me most</Link>
              </li>
              <li>
                <Link href={'/about_me/where_am_I_going/'}>where am I going</Link>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value={'education'}>
          <Accordion.Trigger className={'flex gap-2 items-center'}>
            <ArrowIcon
                className={`transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] ${value === 'education' ? 'rotate-90' : 'rotate-0'}`}/>
            <FolderIcon
                className={'text-accent-orange'}/>education</Accordion.Trigger>
          <Accordion.Content
              className={'overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown'}>
            <ul>
              <li>
                <Link href={'/about_me/what_can_I_do/'}>what can I do</Link>
              </li>
              <li>
                <Link href={'/about_me/what_else_to_learn/'}>
                  what else to learn
                </Link>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
  )
})
PersonalInfo.displayName = 'PersonalInfo'


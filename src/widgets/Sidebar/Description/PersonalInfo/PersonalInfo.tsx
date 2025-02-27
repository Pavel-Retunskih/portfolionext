'use client'

import FolderIcon from "@/assets/svg/FolderIcon";
import ArrowIcon from "@/assets/svg/ArrowIcon";
import {memo} from "react";
import {AccordionContent, AccordionItem, AccordionRoot, AccordionTrigger} from "@/components/Accordion/Accordion";
import {LinkItem, List, ListItem, NavMenuRoot} from "@/components/NavMenu/NavMenu";


export const PersonalInfo = memo(() => {

  return (
      <AccordionRoot type={'single'} collapsible className={'p-3'} defaultValue={'bio'}>
        <AccordionItem value={'bio'}>
          <AccordionTrigger icon={<ArrowIcon
              className={`transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-90`}/>}
                            className={'flex gap-2 items-center group'}>
            <FolderIcon
                className={'text-accent-pink'}/>bio</AccordionTrigger>
          <AccordionContent
              className={'overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown'}>
            <NavMenuRoot>
              <List>
                <ListItem>
                  <LinkItem href={'/about_me/who_i_am'}>who am I</LinkItem>
                </ListItem>
                <ListItem>
                  <LinkItem href={'/about_me/where_am_I_from'}>where am I from</LinkItem>
                </ListItem>
              </List>
            </NavMenuRoot>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={'interests'}>
          <AccordionTrigger icon={<ArrowIcon
              className={`transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-90`}/>}
                            className={'flex gap-2 items-center group'}>

            <FolderIcon
                className={'text-accent-aqua'}/>
            interests</AccordionTrigger>
          <AccordionContent
              className={'overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown'}>
            <NavMenuRoot>
              <List>
                <ListItem>
                  <LinkItem href={'/about_me/what_interests_me_most'}>what interests me most</LinkItem>
                </ListItem>
                <ListItem>
                  <LinkItem href={'/about_me/where_am_I_going'}>where am I going</LinkItem>
                </ListItem>
              </List>
            </NavMenuRoot>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={'education'}>
          <AccordionTrigger icon={<ArrowIcon
              className={`transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-90`}/>}
                            className={'flex gap-2 items-center group'}>

            <FolderIcon
                className={'text-accent-orange'}/>education</AccordionTrigger>
          <AccordionContent
              className={'overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown'}>
            <NavMenuRoot>
              <List>
                <ListItem>
                  <LinkItem href={'/about_me/what_can_I_do'}>what can I do</LinkItem>
                </ListItem>
                <ListItem>
                  <LinkItem href={'/about_me/what_else_to_learn'}>
                    what else to learn
                  </LinkItem>
                </ListItem>
              </List>
            </NavMenuRoot>
          </AccordionContent>
        </AccordionItem>
      </AccordionRoot>
  )
})
PersonalInfo.displayName = 'PersonalInfo'


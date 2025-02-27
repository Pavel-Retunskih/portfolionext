'use client'

import {Accordion} from "radix-ui";
import {memo} from "react";
import {AccordionItem, AccordionRoot} from "@/components/Accordion/Accordion";
import {AccordionContent, AccordionTrigger} from "@radix-ui/react-accordion";
import {LinkItem, List, ListItem, NavMenuRoot} from "@/components/NavMenu/NavMenu";

export const ProfessionalInfo = memo(() => {
  return (
      <AccordionRoot type={'single'} collapsible>
        <AccordionItem value={'experience'}>
          <AccordionTrigger>experience</AccordionTrigger>
          <AccordionContent>
            <NavMenuRoot>
              <List>
                <ListItem>
                  <LinkItem href={'/about_me/who_i_am/'}>who am I</LinkItem>
                </ListItem>
              </List>
            </NavMenuRoot>
            <ul>
              <li>
                <button>who am I</button>
              </li>
              <li>
                <button>where am I from</button>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <Accordion.Item value={'hard-skills'}>
          <Accordion.Trigger>hard-skills</Accordion.Trigger>
          <Accordion.Content>
            <ul>
              <li>
                <button>what interests me most</button>
              </li>
              <li>
                <button>where am I going</button>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value={'soft-skills'}>
          <Accordion.Trigger>soft-skills</Accordion.Trigger>
          <Accordion.Content>
            <ul>
              <li>
                <button>what can I do</button>
              </li>
              <li>
                <button>
                  what else to learn
                </button>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>
      </AccordionRoot>
  )
})
ProfessionalInfo.displayName = 'ProfessionalInfo'
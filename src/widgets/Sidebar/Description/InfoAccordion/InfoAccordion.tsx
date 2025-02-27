"use client";

import FolderIcon from "@/assets/svg/FolderIcon";
import ArrowIcon from "@/assets/svg/ArrowIcon";
import {memo} from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger
} from "@/components/Accordion/Accordion";
import {
  LinkItem,
  List,
  ListItem,
  NavMenuRoot
} from "@/components/NavMenu/NavMenu";

type InfoSection = {
  title: string;
  items: { title: string; href: string }[];
};

type InfoAccordionProps = {
  sections: InfoSection[];
  defaultOpen?: string;
  iconColors?: Record<string, string>;
};

export const InfoAccordion = memo(({sections, defaultOpen, iconColors}: InfoAccordionProps) => {
  return (
      <AccordionRoot type={"single"} collapsible className={"p-3"} defaultValue={defaultOpen}>
        {sections.map((section) => (
            <AccordionItem key={section.title} value={section.title}>
              <AccordionTrigger
                  icon={
                    <ArrowIcon
                        className={"transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-90"}/>
                  }
                  className={"flex gap-2 items-center group"}
              >
                <FolderIcon className={iconColors?.[section.title] || "text-accent-pink"}/>
                {section.title}
              </AccordionTrigger>
              <AccordionContent
                  className={"overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown"}>
                <NavMenuRoot>
                  <List>
                    {section.items.map((item) => (
                        <ListItem key={item.href}>
                          <LinkItem href={item.href}>{item.title}</LinkItem>
                        </ListItem>
                    ))}
                  </List>
                </NavMenuRoot>
              </AccordionContent>
            </AccordionItem>
        ))}
      </AccordionRoot>
  );
});

InfoAccordion.displayName = "InfoAccordion";

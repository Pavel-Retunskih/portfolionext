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
import {clsx} from "clsx";

type InfoSection = {
  title: string;
  items: { title: string; href: string }[];
};

type InfoAccordionProps = {
  sections: InfoSection[];
  defaultOpen?: string;
};

export const InfoAccordion = memo(({sections, defaultOpen}: InfoAccordionProps) => {
  const iconColors: Record<string, string> = {
    bio: "text-accent-pink",
    interests: "text-accent-aqua",
    skills: "text-accent-orange",
    careerGoals: 'text-accent-violet',
    activities: 'text-secondary-purple'
  };

  return (
      <AccordionRoot type={"single"} collapsible defaultValue={defaultOpen}>
        {sections.map((section) => (
            <AccordionItem key={section.title} value={section.title}>
              <AccordionTrigger
                  icon={
                    <ArrowIcon
                        className={"transition-transform mr-3 duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)]" +
                            " group-data-[state=open]:rotate-90 "}/>
                  }
                  className={clsx(
                      "flex gap-2 items-center group"
                  )}
              >
                <FolderIcon className={iconColors[section.title] || "text-accent-pink" + ' ml-2'}/>
                <span className={clsx({
                  "hover:text-accent-pink": section.title === "bio",
                  "hover:text-accent-aqua": section.title === "interests",
                  "hover:text-accent-orange": section.title === "skills",
                  "hover:text-accent-violet": section.title === "careerGoals",
                  "hover:text-secondary-purple": section.title === "activities",
                })}>{section.title}</span>
              </AccordionTrigger>
              <AccordionContent
                  className={"overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown"}>
                <NavMenuRoot>
                  <List className={'pl-4'}>
                    {section.items.map((item) => (
                        <ListItem key={item.href}>
                          <LinkItem href={item.href}
                                    color={iconColors?.[section.title] || "text-accent-aqua"}>{item.title}</LinkItem>
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

'use client'

import {InfoNames} from "@/widgets/Sidebar/Sidebar";

import {memo} from "react";
import {InfoAccordion} from "@/widgets/Sidebar/Description/InfoAccordion/InfoAccordion";

export const Description = memo(({value}: {
  value: InfoNames
}) => {
  console.log('Description render')

  const INFO_DATA = {
    ['personalInfo']: [
      {
        title: "bio",
        items: [
          {title: "who am I", href: "/about_me/who_i_am"},
          {title: "where am I from", href: "/about_me/where_am_I_from"},
        ],
      },
      {
        title: "interests",
        items: [
          {title: "what interests me most", href: "/about_me/what_interests_me_most"},
          {title: "where am I going", href: "/about_me/where_am_I_going"},
        ],
      },
    ],
    ['professionalInfo']: [
      {
        title: "skills",
        items: [
          {title: "my technical skills", href: "/work/technical_skills"},
          {title: "what I'm learning", href: "/work/learning"},
        ],
      },
      {
        title: "careerGoals",
        items: [
          {title: "my aspirations", href: "/work/aspirations"},
          {title: "first job plans", href: "/work/first_job"},
        ],
      },
    ],
    ['hobbiesInfo']: [
      {
        title: "activities",
        items: [
          {title: "things I enjoy", href: "/hobby/things_I_enjoy"},
          {title: "new things to try", href: "/hobby/new_experiences"},
        ],
      },
    ],
  };

  console.log(value)
  const iconColors = {
    bio: "text-accent-pink",
    interests: "text-accent-aqua",
    skills: "text-accent-orange",
    careerGoals: 'text-accent-violet'
  };
  return <InfoAccordion iconColors={iconColors} sections={INFO_DATA[value]} defaultOpen={'bio'}/>
})
Description.displayName = 'Description'
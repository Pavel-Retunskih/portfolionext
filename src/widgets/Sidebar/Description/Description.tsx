'use client'

import {InfoNames} from "@/widgets/Sidebar/Sidebar";

import {memo} from "react";
import {InfoAccordion} from "@/widgets/Sidebar/Description/InfoAccordion/InfoAccordion";

export const Description = memo(({value}: {
  value: InfoNames
}) => {
  const INFO_DATA = {
    ['personalInfo']: [
      {
        title: "bio",
        items: [
          {title: "who_am_I", href: "/about_me/who_i_am"},
          {title: "where_am_I_from", href: "/about_me/where_am_I_from"},
        ],
      },
      {
        title: "interests",
        items: [
          {title: "what_interests_me_most", href: "/about_me/what_interests_me_most"},
          {title: "where_am_I_going", href: "/about_me/where_am_I_going"},
        ],
      },
    ],
    ['professionalInfo']: [
      {
        title: "skills",
        items: [
          {title: "my_technical_skills", href: "/about_me/technical_skills"},
          {title: "project_impact", href: "/about_me/project_impact"},
        ],
      },
      {
        title: "careerGoals",
        items: [
          {title: "my_aspirations", href: "/about_me/aspirations"},
          {title: "first_job_plans", href: "/about_me/first_job"},
        ],
      },
    ],
    ['hobbiesInfo']: [
      {
        title: "activities",
        items: [
          {title: "things_I_enjoy", href: "/about_me/things_I_enjoy"},
          {title: "new_things_to_try", href: "/about_me/new_experiences"},
        ],
      },
    ],
  };

  const iconColors = {
    bio: "text-accent-pink",
    interests: "text-accent-aqua",
    skills: "text-accent-orange",
    careerGoals: 'text-accent-violet'
  };
  return <InfoAccordion iconColors={iconColors} sections={INFO_DATA[value]} defaultOpen={'bio'}/>
})
Description.displayName = 'Description'
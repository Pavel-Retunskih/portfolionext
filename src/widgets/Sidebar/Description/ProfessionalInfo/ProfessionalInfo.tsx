'use client'

import {Accordion} from "radix-ui";

export function ProfessionalInfo() {
  return (
      <Accordion.Root type={'single'} collapsible>
        <Accordion.Item value={'experience'}>
          <Accordion.Trigger>experience</Accordion.Trigger>
          <Accordion.Content>
            <ul>
              <li>
                <button>who am I</button>
              </li>
              <li>
                <button>where am I from</button>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>
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
      </Accordion.Root>
  )
}
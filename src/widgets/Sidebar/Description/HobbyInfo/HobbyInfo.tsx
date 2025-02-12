'use client'

import {Accordion} from "radix-ui";

export function HobbyInfo() {

  return (
      <Accordion.Root type={'single'} collapsible>
        <Accordion.Item value={'sport'}>
          <Accordion.Trigger>sport</Accordion.Trigger>
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
        <Accordion.Item value={'reading'}>
          <Accordion.Trigger>reading</Accordion.Trigger>
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
      </Accordion.Root>
  )

}
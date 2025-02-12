'use client'

import {Accordion} from "radix-ui";

export function PersonalInfo({onItemChangeAction}: { onItemChangeAction: (value: string) => void }) {
  return (
      <Accordion.Root type={'single'} collapsible onValueChange={onItemChangeAction}>
        <Accordion.Item value={'bio'}>
          <Accordion.Trigger>bio</Accordion.Trigger>
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
        <Accordion.Item value={'interests'}>
          <Accordion.Trigger>interests</Accordion.Trigger>
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
        <Accordion.Item value={'education'}>
          <Accordion.Trigger>education</Accordion.Trigger>
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


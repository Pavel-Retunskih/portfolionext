import {Accordion} from 'radix-ui'
import {forwardRef, ReactNode} from "react";
import {
  AccordionContentProps,
  AccordionItemProps,
  AccordionSingleProps,
  AccordionMultipleProps,
  AccordionTriggerProps
} from "@radix-ui/react-accordion";


export const AccordionRoot = forwardRef<HTMLDivElement, AccordionSingleProps | AccordionMultipleProps>(({
                                                                                                          children,
                                                                                                          ...props
                                                                                                        }, ref) => {
  return <Accordion.Root {...props} ref={ref}>{children}</Accordion.Root>
})
AccordionRoot.displayName = 'AccordionRoot'

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(({children, ...props}, ref) => {
  return <Accordion.Item{...props} ref={ref}>
    {children}
  </Accordion.Item>
})
AccordionItem.displayName = 'AccordionItem'

type Props = AccordionTriggerProps & { icon?: ReactNode }

export const AccordionTrigger = forwardRef<HTMLButtonElement, Props>(
    ({children, icon, ...props}, ref) => (
        <Accordion.Header className="AccordionHeader">
          <Accordion.Trigger
              {...props}
              ref={ref}
          >
            {icon}
            {children}
          </Accordion.Trigger>
        </Accordion.Header>
    ),
);
AccordionTrigger.displayName = 'AccordionTrigger'

export const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
    ({children, ...props}, ref) => (
        <Accordion.Content
            {...props}
            ref={ref}
        >
          <div className="AccordionContentText">{children}</div>
        </Accordion.Content>
    ),
);

AccordionContent.displayName = 'AccordionContent'
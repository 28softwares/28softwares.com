import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/UI/shadcn/ui/accordion'
import { faqs } from '@/constants/faqs'

export function Faq() {
  return (
    <div className="p-8  pt-36 container">
      <div>
        <h1 className="text-5xl font-bold  pb-8">
          Frequently Asked Questions<span className="text-primary">.</span>
        </h1>
      </div>
      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => {
          return (
            <AccordionItem
              key={index}
              value={faq.question}
              className="lg:text-xl"
            >
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="lg:text-xl">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}

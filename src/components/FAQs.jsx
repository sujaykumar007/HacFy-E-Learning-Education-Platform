import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FAQS } from "../constants";
import { SectionWrapper } from "@/hoc";
import { message, roundarrow } from '@/assets'


const FAQs = () => {
  return (
    <div className="flex relative flex-col lg:flex-row justify-between items-start gap-8 p-4 bg- text-white">
      <div className="lg:w-1/2">
        <h2 className="text-lg font-bold text-red-400">FAQs</h2>
        <h1 className="text-4xl font-bold mt-4">
          A Dedication to Supporting All Aspects of Your Life.
        </h1>
        <p className="text-lg mt-4">
          Can’t find what you are looking for?
        </p>
        <p className="text-lg font-semibold mt-2">
          Let's Talk: Engage with Us in a Conversation Tailored Just for You.
        </p>
        <div className=" relative p-3">
          <span className=" absolute  bottom-8 left-14 -rotate-12">
            <img src={roundarrow} alt="Engage" />
          </span>
          <div className="mt-16 ">
            <img src={message} alt="Engage" />
          </div>
        </div>

      </div>
      <div className="lg:w-1/2 w-full">
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((faq, index) => (
            <AccordionItem key={faq.id || index} value={`item-${index}`
            }>
              <AccordionTrigger className="py-4 border-b text-xs sm:text-sm  font-bold border-gray-600">
                {faq.Question}
              </AccordionTrigger>
              <AccordionContent className="py-2 text-sm ">
                {faq.Answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default SectionWrapper(FAQs, "");

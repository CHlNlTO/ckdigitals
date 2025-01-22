import { Check, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqData = [
  {
    question: "How do I get started?",
    answer:
      "Contact us today (email or phone) to get a free consultation and discuss your website needs. Our team will work with you to create a custom website that aligns with your business goals and brand identity.",
  },
  {
    question: "Is there a monthly recurring fee?",
    answer:
      "Yes! It's like renting a spot in a mall – you pay a monthly fee for hosting and a yearly fee for your domain. A sales agent would manage your store and assist customers. I can also handle your website's maintenance, keeping it updated, fixing issues, and optimizing performance, so it's always ready for business while you focus on growth.",
  },
  {
    question: "What's included in the website hosting and domain costs?",
    answer:
      "Our hosting service costs ₱1,500 per month and includes reliable website hosting with regular backups and security updates. The domain registration costs ₱2,000 per year and gives you a custom domain name for your business. Both services are essential for keeping your website accessible and professional.",
  },
  {
    question: "How long does it take to build a business website?",
    answer:
      "The timeline varies depending on the package and complexity. Standard business websites typically take 2-3 weeks, including the revision cycles. Premium packages may take 3-4 weeks due to additional features like AI chatbot integration and advanced animations. We always work closely with clients to meet their timeline requirements.",
  },
  {
    question: "Do you provide ongoing support after the website is launched?",
    answer:
      "Yes! We offer two support options: A Monthly Retainer (₱2,999) that includes regular updates, security patches, daily backups, and 24/7 monitoring, or Ad-Hoc Support (₱1,000) for on-demand assistance with specific issues. Standard packages include 30 days of technical assistance, while Premium packages include 90 days.",
  },
  {
    question: "Do you provide analytics and tracking capabilities?",
    answer:
      "Yes! The Premium Business Profile package includes visitor tracking and web analytics. For e-commerce sites, our Premium package includes standard analytics for tracking sales, inventory, and customer behavior. Enterprise applications feature advanced reporting and custom dashboards.",
  },
  {
    question:
      "What's the difference between Standard and Premium e-commerce packages?",
    answer:
      "The Premium e-commerce package (₱74,998) includes everything in the Standard package plus custom theme design, API integrations, POS setup, email marketing capabilities, and advanced inventory management. The Standard package (₱59,998) covers essential features like product catalog, shopping cart, and basic payment gateway integration.",
  },
  {
    question: "Can you integrate my website with other business systems?",
    answer:
      "Yes! Our Premium and Enterprise packages include various integration capabilities. For e-commerce, we can integrate with POS systems and payment gateways. For internal systems, we offer custom integrations with ERPs, CRMs, and other business tools, especially in our Enterprise package (₱206,499).",
  },
  {
    question: "What security features do you implement?",
    answer:
      "All our websites include essential security features. Premium packages include extra layers of protection. For internal systems, we implement secure authentication, role-based access control, and advanced security measures, particularly in our Enterprise applications which feature advanced security protocols.",
  },
  {
    question: "How many revision rounds are included in the website packages?",
    answer:
      "The Standard Package includes 2 comprehensive revision cycles, while the Premium Package includes 5 rounds of content and design adjustments. This ensures your website meets your exact requirements and brand standards.",
  },
];

export const FAQs = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge variant="outline">FAQs</Badge>
          <div className="flex gap-2 flex-col">
            <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Frequently Asked Questions
            </h4>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Get answers to common questions about our web development
              services, pricing, and support options. We&apos;re here to help
              make your digital journey smooth and successful.
            </p>
          </div>
          <div>
            <Link href="#contact">
              <Button className="gap-4" variant="outline">
                Have more questions? Reach out <PhoneCall className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="max-w-3xl w-full mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={"index-" + index}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </div>
);

export default FAQs;

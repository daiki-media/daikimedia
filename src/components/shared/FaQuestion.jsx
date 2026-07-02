'use client'
import FaqList from '@/data/faqData'
import { useState } from 'react'
import FaqItem from './FaqItem'
import FAQSchema from '@/components/schema/FAQSchema'
const FaQuestion = () => {
  const { FAQData } = FaqList
  const [activeIndex, setActiveIndex] = useState(null)
  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }
  const generalFaq = FAQData.filter((faq) => faq.type.includes('general'))
  return (
    <>
      <FAQSchema faqs={generalFaq} />
      <div className="[&>*:not(:last-child)]:mb-5">
        {generalFaq.map((faq) => (
          <FaqItem
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            isOpen={activeIndex === faq.id}
            onClick={() => handleItemClick(faq.id)}
          />
        ))}
      </div>
    </>
  )
}

export default FaQuestion

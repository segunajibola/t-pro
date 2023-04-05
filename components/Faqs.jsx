import { useState } from "react";
import { faqHome } from "../data/faq.json";

const Faqs = () => {
  // In order to turn off linting rule for a particular line in JSHint
  // eslint-disable-next-line
  const [faqs, setFaqs] = useState(faqHome);

  return (
    <div className="faq">
      <div className="p-10 mx-auto bg-white rounded shadow-lg">
        <h3 className="px-8 py-2 font-bold text-center bg-grey-lightest ">
          Frequently Asked Questions
        </h3>
        <div className="flex justify-center mx-auto mt-2">
          <span className="inline-block w-40 h-1 rounded-full bg-pure-black"></span>
          <span className="inline-block w-3 h-1 mx-1 rounded-full bg-pure-grey"></span>
          <span className="inline-block w-1 h-1 rounded-full bg-pure-black"></span>
        </div>
        <div className="mx-4 mt-2 question-wrap">
          {faqs.map((faq) => (
            <details className="py-4 border-b question border-grey-lighter">
              <summary className="flex items-center font-bold text-left">
                <h2>{faq.question}</h2>

                <button className="ml-auto">
                  <svg
                    className="w-4 h-4 -mr-1 opacity-75 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                  </svg>
                </button>
              </summary>
              <div className="mt-4 leading-normal text-left text-md">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;

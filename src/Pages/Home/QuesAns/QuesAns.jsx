import React, { useState } from 'react';
import MainLayout from '../../../Layouts/MainLayout';
import { useAuthContext } from '../../../Hooks/useAuthContext';

const QuesAns = () => {
  const [currTitle, setCurrTitle] = useState(0);
  const { darkTheme } = useAuthContext();

  return (
    <div className="bg-goldBg pt-16 pb-8">
      <MainLayout>
        <section className="grid grid-cols-1 lg:grid-cols-[2fr,_3fr] items-center gap-16 md:gap-8 lg:gap-12 xl:gap-20">
          {/* Cards */}
          <div>
            <h1
              className={`text-4xl leading-[44px] font-semibold mb-4 ${
                darkTheme ? 'text-light2' : 'text-dark'
              }`}
            >
              Frequently Asked Questions
            </h1>
            <p
              className={`text-lg mb-10 ${
                darkTheme ? 'text-gray-200' : 'text-[#32443f]'
              }`}
            >
              Ask any question what in your mind. Ask about anything about our
              marathons, upcoming marathons, adding marathon, editing marathon
              or anything else.
            </p>
          </div>

          {/* Frequent Ques */}
          <div>
            <div
              onClick={() => setCurrTitle(1)}
              className={`collapse collapse-arrow border mb-4 border-green rounded-xl ${
                currTitle !== 1 ? 'bg-greenBg' : ''
              }`}
            >
              <input type="radio" name="my-accordion-2" />
              <div
                className={`collapse-title ${
                  currTitle === 1 && 'text-dark-green'
                } text-xl font-medium`}
              >
                <p>How do I register for a marathon?</p>
              </div>
              <div className="collapse-content">
                <p>
                  To register for a marathon, browse the list of upcoming events
                  on our website, select your desired marathon, and click the
                  Register button. Complete the registration form and payment
                  process to confirm your participation.
                </p>
              </div>
            </div>

            <div
              onClick={() => setCurrTitle(2)}
              className={`collapse collapse-arrow border mb-4 border-green rounded-xl ${
                currTitle !== 2 ? 'bg-greenBg' : ''
              }`}
            >
              <input type="radio" name="my-accordion-2" />
              <div
                className={`collapse-title ${
                  currTitle === 2 && 'text-dark-green'
                } text-xl font-medium`}
              >
                <p>Can I update my marathon details?</p>
              </div>
              <div className="collapse-content">
                <p>
                  Yes, you can update your marathon details by logging into your
                  account, navigating to your dashboard, and selecting the Edit
                  Registration option for the respective marathon. Please note
                  that changes may not be allowed after the registration
                  deadline.
                </p>
              </div>
            </div>

            <div
              onClick={() => setCurrTitle(3)}
              className={`collapse collapse-arrow border mb-4 border-green rounded-xl ${
                currTitle !== 3 ? 'bg-greenBg' : ''
              }`}
            >
              <input type="radio" name="my-accordion-2" />
              <div
                className={`collapse-title ${
                  currTitle === 3 && 'text-dark-green'
                } text-xl font-medium`}
              >
                <p>
                  What is the refund policy if I cannot attend a marathon after
                  registering?
                </p>
              </div>
              <div className="collapse-content">
                <p>
                  Refund policies vary by event and are determined by the event
                  organizer. Please check the event-specific details on the
                  marathons page. Some events may offer partial refunds if
                  requested before a certain date.
                </p>
              </div>
            </div>

            <div
              onClick={() => setCurrTitle(4)}
              className={`collapse collapse-arrow border mb-4 border-green rounded-xl ${
                currTitle !== 4 ? 'bg-greenBg' : ''
              }`}
            >
              <input type="radio" name="my-accordion-2" />
              <div
                className={`collapse-title ${
                  currTitle === 4 && 'text-dark-green'
                } text-xl font-medium`}
              >
                <p>
                  Are there any special requirements for participating in
                  marathons?
                </p>
              </div>
              <div className="collapse-content">
                <p>
                  Each marathon may have specific requirements, such as a
                  minimum age, fitness level, or medical clearance. These
                  details are provided on the event page. Ensure you meet the
                  criteria before registering to avoid disqualification.
                </p>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </div>
  );
};

export default QuesAns;

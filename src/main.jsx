import React, { StrictMode, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowLeft, ArrowRight, Check, ChevronLeft, MapPin, Search, Sparkles } from 'lucide-react';
import './styles.css';
import logoAsset from '../img/logo.svg';
import mentorMaya from './assets/figma/mentor-maya.png';
import mentorDavid from './assets/figma/mentor-david.png';
import mentorElena from './assets/figma/mentor-elena.png';
import illustrationBackground from './assets/figma/illustration-background.svg';
import illustrationCharacter1 from './assets/figma/illustration-character-1.svg';
import illustrationCharacter2 from './assets/figma/illustration-character-2.svg';
import illustrationPlant from './assets/figma/illustration-plant.svg';
import ctaCircleLeft from './assets/figma/cta-circle-left.svg';
import ctaCircleRight from './assets/figma/cta-circle-right.svg';
import checkAsset from './assets/figma/check.svg';
import arrowRightAsset from './assets/figma/arrow-right.svg';
import radioDefault from './assets/figma/radio-default.svg';
import radioSelected from './assets/figma/radio-selected.svg';
import surveyReturningIcon from './assets/figma/survey-returning.svg';
import surveyMentorIcon from './assets/figma/survey-mentor.svg';
import progressActive from './assets/figma/progress-active.svg';
import progressInactive from './assets/figma/progress-inactive.svg';
import resultMaya from './assets/figma/result-maya.png';
import resultAlex from './assets/figma/result-alex.png';
import resultSophia from './assets/figma/result-sophia.png';
import howWorksBackground from './assets/figma/how-it-works/background.svg';
import howWorksPlants from './assets/figma/how-it-works/plants.svg';
import howWorksClouds from './assets/figma/how-it-works/clouds.svg';
import howWorksRocks from './assets/figma/how-it-works/rocks.svg';
import howWorksCharacter from './assets/figma/how-it-works/character.svg';
import howWorksLine from './assets/figma/how-it-works/line.svg';
import storySofia from './assets/figma/stories/story-1.png';
import storyNaya from './assets/figma/stories/story-2.png';
import storyElena from './assets/figma/stories/story-3.png';
import storyTiffany from './assets/figma/stories/story-4.png';
import storyMarcus from './assets/figma/stories/story-5.png';
import storyPriya from './assets/figma/stories/story-6.png';
import faqAddIcon from './assets/figma/faq/add.svg';

const questions = [
  {
    id: 'stage',
    title: 'What brings you to Trellis?',
    options: ['I’m returning to work', 'I’d like to mentor'],
    icons: [surveyReturningIcon, surveyMentorIcon],
  },
  {
    id: 'goal',
    title: 'Which field feels like your next chapter?',
    options: ['Technology & Engineering', 'Marketing & Creative', 'Finance & Business', 'Education', 'Healthcare', 'Still exploring'],
  },
  {
    id: 'format',
    title: 'How long was your career break?',
    options: ['Under 2 years', '2 - 5 years', '5 - 10 years', '10+ years', 'I haven’t taken a break'],
  },
  {
    id: 'readiness',
    title: 'How far along are you right now?',
    options: ['Just exploring', 'Preparing materials', 'Actively applying', 'Interviewing', 'Have an offer/negotiating', 'Not sure'],
  },
  {
    id: 'support',
    title: 'What would you like support with?',
    options: ['Building confidence', 'Updating resumé', 'Interview preparation', 'Exploring a new direction', 'Balancing work & family', 'Growing my network'],
  },
  {
    id: 'timing',
    title: 'When are you hoping to return?',
    options: ['As soon as possible', 'In the next 3 months', 'In 3-6 months', 'Just exploring for now'],
  },
];

const mentors = [
  { id: 1, name: 'Maya Chen', role: 'Product design leader', company: 'Independent', location: 'New York, NY', tags: ['Career clarity', 'Leadership'], stages: [0, 2, 3], goals: [0, 1, 3], format: [0, 3], initials: 'MC', color: 'coral', bio: 'Maya helps designers find their voice, navigate career transitions, and lead with more confidence.' },
  { id: 2, name: 'Jordan Ellis', role: 'Staff software engineer', company: 'Northstar', location: 'Austin, TX', tags: ['Career growth', 'Engineering'], stages: [1, 2], goals: [0, 2], format: [1, 2, 3], initials: 'JE', color: 'sage', bio: 'Jordan loves helping early-career engineers turn big goals into a clear, practical next step.' },
  { id: 3, name: 'Avery Williams', role: 'VP of people & culture', company: 'Common Ground', location: 'Chicago, IL', tags: ['Leadership', 'Confidence'], stages: [2, 3], goals: [1, 3], format: [0, 2, 3], initials: 'AW', color: 'lavender', bio: 'Avery brings 15 years of people leadership experience and a warm, honest approach to mentoring.' },
  { id: 4, name: 'Priya Shah', role: 'Founder & strategist', company: 'Brightside Studio', location: 'San Francisco, CA', tags: ['Networking', 'Direction'], stages: [0, 1, 2], goals: [0, 2], format: [1, 3], initials: 'PS', color: 'yellow', bio: 'Priya is a strategist and founder who helps ambitious people make their next move feel possible.' },
];

const resultMentors = [
  { id: 11, name: 'Maya Vance', role: 'Senior Product Designer', company: 'Adobe', location: 'Remote', tags: ['Design', 'Career clarity'], stages: [0], goals: [1], format: [0], initials: 'MV', color: 'coral', bio: 'Maya helps parents return to design with clarity and confidence.', photo: resultMaya, breakText: 'Returned after a 4-year career break', reason: 'Also returned to design after a long break', date: 'Wed, 18 Nov', time: '10:30 AM · Eastern Time' },
  { id: 12, name: 'Alex Chen', role: 'Associate Product Designer', company: 'WHOOP', location: 'Remote', tags: ['Product design', 'Portfolio'], stages: [0], goals: [0], format: [1], initials: 'AC', color: 'sage', bio: 'Alex supports parents rebuilding momentum through practical portfolio feedback.', photo: resultAlex, breakText: 'Returned after a 3-year career break', reason: 'Helps with portfolio feedback', date: 'Thu, 12 Nov', time: '11:00 AM · Eastern Time' },
  { id: 13, name: 'Sophia Gonzales', role: 'Product Design Lead', company: 'Spotify', location: 'Remote', tags: ['Interviews', 'Confidence'], stages: [0], goals: [1], format: [2], initials: 'SG', color: 'yellow', bio: 'Sophia helps returning parents prepare for interviews and their next chapter.', photo: resultSophia, breakText: 'Returned after a 5-year career break', reason: 'Helps with interview preparation', date: 'Fri, 13 Nov', time: '2:00 PM · Eastern Time' },
];

const stories = [
  { name: 'Sofia R.', role: 'Senior Product Manager', quote: '“Your gap is a chapter, not a hole.”', gap: '6-year gap', industry: 'Tech', image: storySofia },
  { name: 'Elena G.', role: 'Staff Accountant, CPA', quote: '“I re-certified at 41. You can too.”', gap: '8-year gap', industry: 'Finance', image: storyElena },
  { name: 'Marcus T.', role: 'High School Principal', quote: '“Stay-at-home dad to principal. Ask me how.”', gap: '3-year gap', industry: 'Education', image: storyMarcus },
  { name: 'Naya K.', role: 'Registered Nurse', quote: '“Returnships are real and work; let’s find yours.”', gap: '4-year gap', industry: 'Healthcare', image: storyNaya },
  { name: 'Tiffany L', role: 'Marketing Director', quote: '“I want to help parents feel sure of themselves.”', gap: '5-year gap', industry: 'Marketing', image: storyTiffany },
  { name: 'Priya M.', role: 'Software Engineer', quote: '“I went from bootcamp, part-time, then full-time.”', gap: '3-year gap', industry: 'Tech', image: storyPriya },
];

function Logo() {
  return <button className="logo" onClick={() => window.location.reload()} aria-label="Trellis home"><img src={logoAsset} alt="Trellis" /></button>;
}

function FigmaLogo({ onClick = () => window.location.reload() }) {
  return <button className="figma-logo" onClick={onClick} aria-label="Trellis home"><img src={logoAsset} alt="Trellis" /></button>;
}

function AccountBenefits() {
  return <ul className="account-benefits">
    {['A few questions about your story', 'Mentors who have been where you are', 'A space to take your next step'].map((benefit) => <li key={benefit}><img src={checkAsset} alt="" />{benefit}</li>)}
  </ul>;
}

function HomePage({ onStart, onHowItWorks, onStories, onResources, onFaq }) {
  return <main className="figma-home">
    <header className="figma-header">
      <FigmaLogo />
      <nav><a href="#how-it-works" onClick={(event) => { event.preventDefault(); onHowItWorks(); }}>How it works</a><a href="#stories" onClick={(event) => { event.preventDefault(); onStories(); }}>Stories</a><a href="#resources" onClick={(event) => { event.preventDefault(); onResources(); }}>Resources</a><a href="#faq" onClick={(event) => { event.preventDefault(); onFaq(); }}>FAQ</a></nav>
      <div className="figma-header-actions"><button className="figma-login" onClick={onStart}>Log in</button><button className="figma-small-cta" onClick={onStart}>Get started</button></div>
    </header>
    <section className="figma-hero">
      <h1>Your career didn’t stop<br /><span>It&apos;s ready for you</span></h1>
      <p>Step-by-step guidance, meaningful conversations, and a community of parents in workforce that understands the gap on your resumé because they’ve been there too.</p>
      <div className="figma-hero-actions"><button className="figma-primary" onClick={onStart}>Find my mentor <ArrowRight size={16} /></button><button className="figma-outline" onClick={onStart}>How it works</button></div>
    </section>
    <section className="figma-process" id="how-it-works">
      <h2>Connect with someone who gets it</h2>
      <div className="figma-cards">
        <article><strong>01</strong><h3>Tell us your story</h3><p>Your field, your gap, what&apos;s worrying you. Five minutes, no résumé needed.</p></article>
        <article><strong>02</strong><h3>Meet your match</h3><p>We pair you with a parent who returned to work after a similar life-altering break.</p></article>
        <article><strong>03</strong><h3>Ask anything</h3><p>Call or ask about anything: The process, the return, childcare, confidence, etc.</p></article>
      </div>
    </section>
    <section className="figma-story" id="stories">
      <div className="figma-story-art"><div className="figma-illustration"><img src={illustrationBackground} alt="" /><img src={illustrationCharacter2} alt="" /><img src={illustrationCharacter1} alt="" /><img src={illustrationPlant} alt="" /></div></div>
      <div className="figma-story-copy"><div className="figma-eyebrow">Real mentors, real gaps</div><h2>Talk to someone who<br />was once in your shoes</h2><p>Every mentor once paused their own career to care for their family. Hear their stories, ask your questions, and find the support that fits where you are.</p><button className="figma-outline" onClick={onStart}>Meet the mentors <ArrowRight size={16} /></button></div>
    </section>
    <section className="figma-testimonial"><blockquote>“I&apos;d been out of office for seven years. Sofia told me to stop apologizing for the gap. I got the offer two months later.”</blockquote><cite>— Dana, VP of Product at U.S. workspace</cite></section>
    <section className="figma-mentors">
      {[['Maya Vance', 'Senior Product Designer', 'Adobe', '4.9 (84 reviews · 214 sessions)', mentorMaya], ['David Miller', 'Staff Accountant', 'Deloitte', '4.8 (90 reviews · 160 sessions)', mentorDavid], ['Elena Rostova', 'Global Product Creator', 'L’Oréal', '4.9 (87 reviews · 180 sessions)', mentorElena]].map(([name, role, company, review, image]) => <article key={name}><img src={image} alt={name} /><h3>{name}</h3><p>{role}<br />{company}<br /><br />★ {review}</p></article>)}
    </section>
    <section className="figma-ready">
      <img className="cta-circle-left" src={ctaCircleLeft} alt="" /><img className="cta-circle-right" src={ctaCircleRight} alt="" /><h2>Ready when you are</h2><p>Free for returning parents. Matches usually take under a week.</p><div><button className="figma-white-cta" onClick={onStart}>Get matched</button><button className="figma-light-cta" onClick={onStart}>Become a mentor</button></div>
    </section>
    <footer className="figma-footer"><div><FigmaLogo /><p>Mentorship for parents returning to work, woven together<br />with parents who already made the leap.</p></div><div><h3>Explore</h3><a href="#how-it-works">How it works</a><a href="#stories">Stories</a><a href="#resources">Resources</a><a href="#faq">FAQs</a></div><div><h3>Get involved</h3><a href="#how-it-works">Find a mentor</a><a href="#how-it-works">Become a mentor</a><a href="#how-it-works">Contact us</a></div></footer>
  </main>;
}

function HowItWorksPage({ onStart, onHome, onStories, onResources, onFaq }) {
  const steps = [
    ['01', 'Share where you are', 'Share your field, how long you’ve been away, and what hours work for you and your family.', 'how-step-lavender'],
    ['02', 'We match by lived experience', 'Similar field, gap length, and family setup. Not just a job title, but someone whose path aligns with yours.', 'how-step-mint'],
    ['03', 'Work the plan together', 'Rewrite your story, practice interviews, and rebuild your network, one small goal at a time.', 'how-step-yellow'],
  ];
  const faqs = [
    ['Is it free?', 'Yes! It’s free for returning parents. Mentors volunteer their time.'],
    ['How long is my gap allowed to be?', 'Any length is welcomed. Our mentors’ gaps range from six months to twelve years.'],
    ['Can dads join?', 'Absolutely! Any parent or caregiver returning to work is welcome.'],
  ];
  return <main className="how-page">
    <header className="figma-header how-header">
      <FigmaLogo onClick={onHome} />
      <nav><a className="active" href="#how-it-works">How it works</a><a href="#stories" onClick={(event) => { event.preventDefault(); onStories(); }}>Stories</a><a href="#resources" onClick={(event) => { event.preventDefault(); onResources(); }}>Resources</a><a href="#faq" onClick={(event) => { event.preventDefault(); onFaq(); }}>FAQ</a></nav>
      <div className="figma-header-actions"><button className="figma-login" onClick={onStart}>Log in</button><button className="figma-small-cta" onClick={onStart}>Get started</button></div>
    </header>
    <section className="how-hero">
      <span className="how-eyebrow">How it works</span>
      <h1>A path back, together</h1>
      <p className="how-subtitle">One conversation at a time</p>
    </section>
    <section className="how-steps-layout">
      <div className="how-illustration" aria-label="A parent finding their way forward">
        <img className="how-art-background" src={howWorksBackground} alt="" />
        <img className="how-art-clouds" src={howWorksClouds} alt="" />
        <img className="how-art-rocks" src={howWorksRocks} alt="" />
        <img className="how-art-plants" src={howWorksPlants} alt="" />
        <img className="how-art-character" src={howWorksCharacter} alt="" />
      </div>
      <div className="how-steps">
        {steps.map(([number, title, copy, className]) => <article className={`how-step ${className}`} key={number}><span>{number}</span><h2>{title}</h2><p>{copy}</p></article>)}
      </div>
    </section>
    <section className="how-faq" id="faq">
      <h2>Common questions</h2>
      <div className="how-faq-list">{faqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p><img src={howWorksLine} alt="" /></article>)}</div>
      <button className="how-start" onClick={onStart}>Start my match</button>
    </section>
    <footer className="figma-footer how-footer"><div><FigmaLogo /><p>Mentorship for parents returning to work, woven together<br />with parents who already made the leap.</p></div><div><h3>Explore</h3><a href="#how-it-works">How it works</a><a href="#stories">Stories</a><a href="#resources">Resources</a><a href="#faq">FAQs</a></div><div><h3>Get involved</h3><a href="#how-it-works" onClick={(event) => { event.preventDefault(); onStart(); }}>Find a mentor</a><a href="#how-it-works" onClick={(event) => { event.preventDefault(); onStart(); }}>Become a mentor</a><a href="#how-it-works">Contact us</a></div></footer>
  </main>;
}

function ResourcesPage({ onStart, onHome, onHowItWorks, onStories, onFaq }) {
  const resources = [
    ['DIRECTORY', 'Returnship programs hiring now', 'Updated monthly →', 'resource-lavender'],
    ['GUIDE', 'How to find childcare support', 'View here →', 'resource-mint'],
    ['WORKSHOP', 'Rebuilding confidence after time away', '45 min video →', 'resource-yellow'],
    ['GUIDE', 'Writing the gap on your résumé', '8 min read →', 'resource-pink'],
    ['TEMPLATE', 'Interview answer: “Tell me about your break”', 'Fill-in document →', 'resource-lavender'],
    ['GUIDE', 'Asking for flexible hours, and getting them', '6 min read →', 'resource-mint'],
  ];
  return <main className="resources-page">
    <header className="figma-header resources-header">
      <FigmaLogo onClick={onHome} />
      <nav><a href="#how-it-works" onClick={(event) => { event.preventDefault(); onHowItWorks(); }}>How it works</a><a href="#stories" onClick={(event) => { event.preventDefault(); onStories(); }}>Stories</a><a className="active" href="#resources">Resources</a><a href="#faq" onClick={(event) => { event.preventDefault(); onFaq(); }}>FAQ</a></nav>
      <div className="figma-header-actions"><button className="figma-login" onClick={onStart}>Log in</button><button className="figma-small-cta" onClick={onStart}>Get started</button></div>
    </header>
    <section className="resources-hero">
      <span className="resources-eyebrow">Resources</span>
      <h1>Tools for the way back</h1>
      <p>Made by parents who know what helps</p>
    </section>
    <section className="resources-grid">
      {resources.map(([category, title, action, color]) => <button className={`resource-card ${color}`} key={title} onClick={() => {}}>
        <span>{category}</span><h2>{title}</h2><p>{action}</p>
      </button>)}
    </section>
    <p className="resources-contact">Can&apos;t find what you need? <button onClick={() => {}}>Contact us</button></p>
    <footer className="figma-footer resources-footer"><div><FigmaLogo onClick={onHome} /><p>Mentorship for parents returning to work, woven together<br />with parents who already made the leap.</p></div><div><h3>Explore</h3><a href="#how-it-works" onClick={(event) => { event.preventDefault(); onHowItWorks(); }}>How it works</a><a href="#stories" onClick={(event) => { event.preventDefault(); onStories(); }}>Stories</a><a href="#resources">Resources</a><a href="#faq">FAQs</a></div><div><h3>Get involved</h3><a href="#how-it-works" onClick={(event) => { event.preventDefault(); onStart(); }}>Find a mentor</a><a href="#how-it-works" onClick={(event) => { event.preventDefault(); onStart(); }}>Become a mentor</a><a href="#how-it-works">Contact us</a></div></footer>
  </main>;
}

function FaqPage({ onStart, onHome, onHowItWorks, onStories, onResources }) {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    ['Is it free?', 'Trellis offers free mentorship for parents returning to work.'],
    ['How long is my gap allowed to be?', 'There is no strict limit on your career break. Our community welcomes parents with many different paths.'],
    ['Can dads and other caregivers join?', 'Absolutely. Mothers, fathers, and other caregivers are welcome to find support and connection here.'],
    ['How are matches made?', 'Matches consider your career interests, career-break experience, and the goals you share with us.'],
    ['How much time does it take?', 'You can participate flexibly around your schedule, from a short conversation to ongoing support.'],
    ['Can I become a mentor later?', 'Yes. You can explore becoming a mentor later, after finding the kind of support that feels right for you.'],
  ];
  return <main className="faq-page">
    <header className="figma-header faq-header">
      <FigmaLogo onClick={onHome} />
      <nav><a href="#how-it-works" onClick={(event) => { event.preventDefault(); onHowItWorks(); }}>How it works</a><a href="#stories" onClick={(event) => { event.preventDefault(); onStories(); }}>Stories</a><a href="#resources" onClick={(event) => { event.preventDefault(); onResources(); }}>Resources</a><a className="active" href="#faq">FAQ</a></nav>
      <div className="figma-header-actions"><button className="figma-login" onClick={onStart}>Log in</button><button className="figma-small-cta" onClick={onStart}>Get started</button></div>
    </header>
    <section className="faq-hero">
      <span className="faq-eyebrow">FAQ</span>
      <h1>Questions parents ask us</h1>
      <p>Questions &amp; answers</p>
    </section>
    <section className="faq-list" aria-label="Frequently asked questions">
      {faqs.map(([question, answer], index) => {
        const isOpen = openIndex === index;
        return <article className={`faq-item ${isOpen ? 'open' : ''}`} key={question}>
          <button type="button" aria-expanded={isOpen} onClick={() => setOpenIndex(isOpen ? null : index)}>
            <span>{question}</span><img src={faqAddIcon} alt="" aria-hidden="true" />
          </button>
          <div className="faq-answer"><p>{answer}</p></div>
        </article>;
      })}
    </section>
    <button className="faq-start" onClick={onStart}>Start my match</button>
    <footer className="figma-footer faq-footer"><div><FigmaLogo onClick={onHome} /><p>Mentorship for parents returning to work, woven together<br />with parents who already made the leap.</p></div><div><h3>Explore</h3><a href="#how-it-works" onClick={(event) => { event.preventDefault(); onHowItWorks(); }}>How it works</a><a href="#stories" onClick={(event) => { event.preventDefault(); onStories(); }}>Stories</a><a href="#resources" onClick={(event) => { event.preventDefault(); onResources(); }}>Resources</a><a href="#faq">FAQs</a></div><div><h3>Get involved</h3><a href="#how-it-works" onClick={(event) => { event.preventDefault(); onStart(); }}>Find a mentor</a><a href="#how-it-works" onClick={(event) => { event.preventDefault(); onStart(); }}>Become a mentor</a><a href="#how-it-works">Contact us</a></div></footer>
  </main>;
}

function StoriesPage({ onStart, onHome, onHowItWorks, onResources, onFaq }) {
  const [category, setCategory] = useState('All');
  const categories = ['All', 'Tech', 'Education', 'Finance', 'Healthcare', 'Marketing'];
  const filteredStories = category === 'All' ? stories : stories.filter((story) => story.industry === category);
  return <main className="stories-page">
    <header className="figma-header stories-header">
      <FigmaLogo onClick={onHome} />
      <nav><a href="#how-it-works" onClick={(event) => { event.preventDefault(); onHowItWorks(); }}>How it works</a><a className="active" href="#stories">Stories</a><a href="#resources" onClick={(event) => { event.preventDefault(); onResources(); }}>Resources</a><a href="#faq" onClick={(event) => { event.preventDefault(); onFaq(); }}>FAQ</a></nav>
      <div className="figma-header-actions"><button className="figma-login" onClick={onStart}>Log in</button><button className="figma-small-cta" onClick={onStart}>Get started</button></div>
    </header>
    <section className="stories-hero">
      <span className="stories-eyebrow">Stories</span>
      <h1>They&apos;ve been there</h1>
      <p>Now they&apos;re here for you</p>
    </section>
    <div className="stories-filters" role="group" aria-label="Story categories">
      {categories.map((item) => <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}
    </div>
    <section className="stories-grid">
      {filteredStories.map((story) => <article className="story-card" key={story.name}>
        <div className="story-person"><img src={story.image} alt="" /><div><h2>{story.name}</h2><p>{story.role}</p></div></div>
        <blockquote>{story.quote}</blockquote>
        <div className="story-tags"><span>{story.gap}</span><span>{story.industry}</span></div>
      </article>)}
    </section>
    <button className="stories-cta" onClick={onStart}>Start my match</button>
    <footer className="figma-footer stories-footer"><div><FigmaLogo onClick={onHome} /><p>Mentorship for parents returning to work, woven together<br />with parents who already made the leap.</p></div><div><h3>Explore</h3><a href="#how-it-works">How it works</a><a href="#stories">Stories</a><a href="#resources">Resources</a><a href="#faq">FAQs</a></div><div><h3>Get involved</h3><a href="#how-it-works" onClick={(event) => { event.preventDefault(); onStart(); }}>Find a mentor</a><a href="#how-it-works" onClick={(event) => { event.preventDefault(); onStart(); }}>Become a mentor</a><a href="#how-it-works">Contact us</a></div></footer>
  </main>;
}

function ResultsHeader({ firstName, onHome }) {
  return <header className="results-header">
    <FigmaLogo onClick={onHome} />
    <nav><a className="active" href="#results">Home</a><a href="#mentors">Find a mentor</a><a href="#sessions">My sessions</a><a href="#messages">Messages</a></nav>
    <div className="results-user"><button className="notification-button" aria-label="Notifications">♧</button><span className="results-avatar">{firstName.charAt(0).toUpperCase()}</span><span>{firstName}</span></div>
  </header>;
}

function ResultsPage({ account, answers, onEdit, onProfile, onHome }) {
  const firstName = account.name || 'Guest';
  const tags = [
    questions[1].options[answers.goal] || 'Marketing & Creative',
    questions[2].options[answers.format] || '2-5 year break',
    questions[4].options[answers.support] || 'Updating resumé',
  ];
  return <main className="results-page">
    <ResultsHeader firstName={firstName} onHome={onHome} />
    <div className="results-container">
      <section className="results-welcome">
        <h1>Welcome, {firstName}</h1>
        <h2>Your matches are ready</h2>
        <p>Based on your answers, here are three parents who returned to work after<br className="desktop-only" /> a career break, just like you.</p>
        <div className="results-tags"><span>Matched on</span>{tags.map((tag) => <span className="results-tag" key={tag}>{tag}</span>)}<button onClick={onEdit}>✎&nbsp; Edit answers</button></div>
      </section>
      <div className="results-grid">
        <section className="results-main">
          <div className="results-section-heading"><h3>Your top matches</h3><button onClick={() => document.getElementById('mentors')?.scrollIntoView()}>See all mentors&nbsp; →</button></div>
          <div className="result-mentor-list">
            {resultMentors.map((mentor, index) => <article className="result-mentor-card" key={mentor.id}>
              <img className="result-mentor-photo" src={mentor.photo} alt={mentor.name} />
              <div className="result-mentor-info">
                {index === 0 && <span className="best-match">Best match</span>}
                <h4>{mentor.name}</h4>
                <p>▣ &nbsp;{mentor.role} · {mentor.company}</p>
                <p>◌ &nbsp;{mentor.breakText}</p>
                <span className="matching-reason">✓ &nbsp;{mentor.reason}</span>
              </div>
              <div className="result-availability"><small>Next available</small><strong>{mentor.date}</strong><span>{mentor.time}</span><button className="view-profile" onClick={() => onProfile(mentor)}>View profile</button><button className="send-message" onClick={() => {}}>◯ &nbsp; Send message</button></div>
            </article>)}
          </div>
        </section>
        <aside className="results-sidebar">
          <section className="results-widget next-steps"><h3>Your next steps</h3><ol><li className="done">Create your account</li><li className="done">Tell us your story</li><li className="current">Book your first conversation</li><li>Meet your mentor</li></ol></section>
          <section className="results-widget upcoming"><h3>▦ &nbsp; Upcoming sessions</h3><p>Nothing booked yet. Your first conversation will show up here.</p></section>
        </aside>
      </div>
    </div>
  </main>;
}

function Progress({ step, total = 3 }) {
  return <div className="survey-progress" aria-label={`Step ${step} of ${total}`}><span>Let’s match a mentor for you</span><div className="survey-progress-segments">{Array.from({ length: 6 }, (_, index) => <img key={index} src={index < step ? progressActive : progressInactive} alt="" />)}</div></div>;
}

function App() {
  const [screen, setScreen] = useState('welcome');
  const [account, setAccount] = useState(() => ({ name: sessionStorage.getItem('trellis-first-name') || '', email: '' }));
  const [form, setForm] = useState({ name: '', email: '' });
  const [answers, setAnswers] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [error, setError] = useState('');

  const recommendations = useMemo(() => mentors.map((mentor) => {
    let score = 0;
    if (answers.stage !== undefined && mentor.stages.includes(answers.stage)) score += 3;
    if (answers.goal !== undefined && mentor.goals.includes(answers.goal)) score += 3;
    if (answers.format !== undefined && mentor.format.includes(answers.format)) score += 2;
    return { ...mentor, score };
  }).sort((a, b) => b.score - a.score), [answers]);

  const createAccount = (event) => {
    event.preventDefault();
    const submitted = new FormData(event.currentTarget);
    const name = String(submitted.get('name') || '');
    const email = String(submitted.get('email') || '');
    const password = String(submitted.get('password') || '');
    if (!name.trim() || !email.includes('@') || password.length < 8) {
      setError('Enter your name, a valid email, and a password with at least 8 characters.');
      return;
    }
    setAccount({ name: name.trim(), email: email.trim() });
    sessionStorage.setItem('trellis-first-name', name.trim());
    setError('');
    setScreen('survey');
  };

  const choose = (value) => {
    setAnswers({ ...answers, [questions[questionIndex].id]: value });
    setError('');
  };

  const nextQuestion = () => {
    if (answers[questions[questionIndex].id] === undefined) {
      setError('Choose an answer to continue.');
      return;
    }
    if (questionIndex === questions.length - 1) setScreen('recommendations');
    else { setQuestionIndex(questionIndex + 1); setError(''); }
  };

  if (screen === 'welcome') return <HomePage onStart={() => setScreen('create')} onHowItWorks={() => setScreen('how-it-works')} onStories={() => setScreen('stories')} onResources={() => setScreen('resources')} onFaq={() => setScreen('faq')} />;
  if (screen === 'how-it-works') return <HowItWorksPage onStart={() => setScreen('create')} onHome={() => setScreen('welcome')} onStories={() => setScreen('stories')} onResources={() => setScreen('resources')} onFaq={() => setScreen('faq')} />;
  if (screen === 'stories') return <StoriesPage onStart={() => setScreen('create')} onHome={() => setScreen('welcome')} onHowItWorks={() => setScreen('how-it-works')} onResources={() => setScreen('resources')} onFaq={() => setScreen('faq')} />;
  if (screen === 'resources') return <ResourcesPage onStart={() => setScreen('create')} onHome={() => setScreen('welcome')} onHowItWorks={() => setScreen('how-it-works')} onStories={() => setScreen('stories')} onFaq={() => setScreen('faq')} />;
  if (screen === 'faq') return <FaqPage onStart={() => setScreen('create')} onHome={() => setScreen('welcome')} onHowItWorks={() => setScreen('how-it-works')} onStories={() => setScreen('stories')} onResources={() => setScreen('resources')} />;

  if (screen === 'create') return <main className="account-page">
    <header className="figma-header account-header"><FigmaLogo /><nav><a href="#how-it-works">How it works</a><a href="#stories">Stories</a><a href="#resources">Resources</a><a href="#faq">FAQ</a></nav><div className="figma-header-actions"><button className="figma-login">Log in</button><button className="figma-small-cta" onClick={() => setScreen('create')}>Get started</button></div></header>
    <div className="account-layout">
      <section className="account-intro"><div className="account-eyebrow">Get started</div><h1>Your next chapter<br />starts here</h1><p>Meet with a parent who understands the doubts and possibility of starting again.</p><AccountBenefits /></section>
      <section className="account-form-panel"><h2>Create your account</h2><form onSubmit={createAccount}><label>First name<input name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your first name" /></label><label>Email address<input name="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" /></label><label>Password<input name="password" type="password" placeholder="Choose a password" /></label>{error && <p className="error">{error}</p>}<button className="account-submit" type="submit">Create account <img src={arrowRightAsset} alt="" /></button></form><p className="account-login">Already have an account? <button type="button">Log in</button></p></section>
    </div>
  </main>;

  if (screen === 'survey') {
    const question = questions[questionIndex];
    const selectedOption = answers[question.id];
    return <main className="survey-page">
      <header className="survey-header"><Logo /></header>
      <section className="survey-content">
        <Progress step={questionIndex + 1} total={questions.length} />
        <h1>{question.title}</h1>
        <div className={`survey-options ${question.options.length > 2 ? 'survey-options-grid' : ''}`} role="radiogroup" aria-label={question.title}>
          {question.options.map((option, index) => {
            const selected = selectedOption === index;
            return <button key={option} type="button" className={`survey-option ${selected ? 'selected' : ''}`} role="radio" aria-checked={selected} onClick={() => choose(index)}>
              <span className="survey-option-copy">{question.icons?.[index] && <img src={question.icons[index]} alt="" />}{option}</span>
              <img className="survey-radio" src={selected ? radioSelected : radioDefault} alt={selected ? 'Selected' : 'Not selected'} />
            </button>;
          })}
        </div>
        {error && <p className="error survey-error">{error}</p>}
        <div className="survey-actions">
          <button className="survey-continue" type="button" onClick={nextQuestion} disabled={selectedOption === undefined}>Continue</button>
        </div>
      </section>
    </main>;
  }

  if (screen === 'profile') return <main className="profile-page results-page"><ResultsHeader firstName={account.name || 'Guest'} onHome={() => setScreen('welcome')} /><div className="profile-container"><button className="profile-back" onClick={() => setScreen('recommendations')}><ChevronLeft size={17} /> Back to matches</button><section className="profile-grid"><img className="profile-hero-photo" src={selectedMentor.photo} alt={selectedMentor.name} /><div><p className="profile-eyebrow">Your mentor match</p><h1>{selectedMentor.name}</h1><p className="profile-role">{selectedMentor.role} · {selectedMentor.company}</p><p className="profile-location"><MapPin size={16} /> {selectedMentor.location}</p><div className="tag-row">{selectedMentor.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div><p className="profile-bio">{selectedMentor.bio}</p><button className="primary-button">Request an introduction <ArrowRight size={17} /></button></div></section><div className="profile-details"><div><p className="profile-eyebrow">A note from {selectedMentor.name.split(' ')[0]}</p><blockquote>“The best career advice I’ve received is to stay curious, ask for help, and remember that you’re never starting from zero.”</blockquote></div><div className="detail-aside"><strong>What to expect</strong><p>A relaxed 30-minute first conversation, with no pressure and plenty of room to see if we’re a fit.</p></div></div></div></main>;
  if (screen === 'recommendations') return <ResultsPage account={account} answers={answers} onEdit={() => { setQuestionIndex(0); setScreen('survey'); }} onProfile={(mentor) => { setSelectedMentor(mentor); setScreen('profile'); }} onHome={() => setScreen('welcome')} />;

  return <main className="app-shell"><header className="app-header"><Logo /><div className="header-user"><span>{account.name}</span><span className="user-avatar">{account.name.slice(0, 1).toUpperCase()}</span></div></header><section className="matches"><div className="matches-heading"><div><p className="eyebrow">Made for you</p><h1>Your people<br /><em>are here.</em></h1></div><p className="muted matches-note">Based on what you shared, these mentors could help you take your next step.</p></div><div className="matches-toolbar"><span>{recommendations.length} thoughtful matches</span><button className="filter-button"><Search size={16} /> Refine matches</button></div><div className="mentor-grid">{recommendations.map((mentor, index) => <button className="mentor-card" key={mentor.id} onClick={() => { setSelectedMentor(mentor); setScreen('profile'); }}><div className={`profile-avatar ${mentor.color}`}>{mentor.initials}</div><div className="mentor-card-content"><span className="match-label">{index === 0 ? 'Best match for you' : `${Math.max(72, 92 - index * 6)}% match`}</span><h2>{mentor.name}</h2><p>{mentor.role}</p><p className="card-location"><MapPin size={14} /> {mentor.location}</p><div className="tag-row">{mentor.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div><ArrowRight className="card-arrow" size={19} /></button>)}</div></section></main>;
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);

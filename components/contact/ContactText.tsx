'use client';
// import useShuffle from '@/helpers/useShuffle';

const contactText =
  "I'm open to any new opportunities. Leave me a message in my inbox and I will get back to you. Whether it's a position, project, collaborations or just wanna say Hi, I'll be happy to hear from you!";

const ContactText = () => {
  // const { ref, text } = useShuffle({
  //   shuffleText: contactText,
  // });

  return <p className='contact-text text'>{contactText}</p>;
};

export default ContactText;

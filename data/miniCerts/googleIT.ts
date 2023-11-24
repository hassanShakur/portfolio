import ITMaster from '@/images/certificates/IT/master.jpg';
import IT_1 from '@/images/certificates/IT/it-1.jpg';
import IT_2 from '@/images/certificates/IT/it-2.jpg';
import IT_3 from '@/images/certificates/IT/it-3.jpg';
import IT_4 from '@/images/certificates/IT/it-4.jpg';
import IT_5 from '@/images/certificates/IT/it-5.jpg';

const googleITCerts = {
  origin: 'Google & Coursera',
  mainCert: ITMaster,
  summary:
    "This course offers skills required to succeed in an entry-level IT job, performing day-to-day IT support tasks including computer assembly, wireless networking, installing programs, and customer service, provide end-to-end customer support, ranging from identifying problems to troubleshooting and debugging & using systems including Linux, Domain Name Systems, Command-Line Interface, and Binary Code",
  minis: [
    {
      id: 0,
      course: 'Technical Support Fundamentals',
      description:
        "This course is the first of a series that prepared me for a role as an entry-level IT Support Specialist. In this course, I was introduced to the world of Information Technology, or IT. I learnt about the different facets of Information Technology, like computer hardware, the Internet, computer software, troubleshooting, and customer service. This course covers a wide variety of topics in IT that are designed to offer an overview of what's to come in this certificate program.",
      certificate: IT_1,
    },
    {
      id: 1,
      course: 'Bits & Bytes of Computer Networking',
      description:
        'This course is designed to provide a full overview of computer networking. I cover everything from the fundamentals of modern networking technologies and protocols to an overview of the cloud to practical applications and network troubleshooting. It is also a deep dive into both the TCP/IP and OSI network models and protocols, DNS, and DHCP. I also cover IPv4 and IPv6 addressing and subnetting. Finally, I cover the basics of configuring security, automation, and network management.',
      certificate: IT_2,
    },
    {
      id: 2,
      course: 'Operating Systems & You: Becoming a Power User',
      description:
        'In this course -- through a combination of video lectures, demonstrations, and hands-on practice -- I learnt about the main components of an operating system and how to perform critical tasks like managing software and users, and configuring hardware. I learnt about Windows & Linux navigations, setting up users and groups, file permissions, disk partitioning, working with system logs and so much more!',
      certificate: IT_3,
    },
    {
      id: 3,
      course: 'System Administration & IT Infrastructure Services',
      description:
        "This course transitioned me from working on a single computer to an entire fleet. Systems administration is the field of IT that's responsible for maintaining reliable computers systems in a multi-user environment. Here I learnt about the infrastructure services that keep all organizations, big and small, up and running. Had a deep dive on cloud to understand everything from typical cloud infrastructure setups to how to manage cloud resources. I also learn how to manage and configure servers and how to use industry tools to manage computers, user information, and user productivity. Finally, I explored how to recover an organization's IT infrastructure in the event of a disaster.",
      certificate: IT_4,
    },
    {
      id: 4,
      course: 'IT Securuty: Defence Against the Digital Dark arts',
      description:
        "This course covers a wide variety of IT security concepts, tools, and best practices. It introduces threats and attacks and the many ways they can show up. I got familiar with some background of encryption algorithms and how they're used to safeguard data. Then, dived into the three As of information security: authentication, authorization, and accounting. I also covered network security solutions, ranging from firewalls to Wifi encryption options. The course is rounded out by putting all these elements together into a multi-layered, in-depth security architecture, followed by recommendations on how to integrate a culture of security into an organization or team.",
      certificate: IT_5,
    },
  ],
};

export default googleITCerts;

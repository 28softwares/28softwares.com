import {
  CalendarDays,
  GraduationCap,
  MonitorIcon,
  PaintbrushVertical,
  SmartphoneIcon,
} from 'lucide-react'

export const services = {
  webDevelopement: {
    name: 'Web Development',
    description: 'Custom Protocols, booking systems, and ERP solutions.',
    icon: <MonitorIcon />,
  },
  uiuxDesign: {
    name: 'UI/UX Design',
    description:
      'User-friendly, visually appealing interfaces for better engagement.',
    icon: <PaintbrushVertical />,
  },

  mobileApplicationDevelopement: {
    name: 'Mobile Application Development',
    description: 'Tailored mobile apps for seamless user experiences.',
    icon: <SmartphoneIcon />,
  },

  techConsulting: {
    name: 'Tech Consulting',
    description:
      'Consulting services to individuals seeking their careers in IT, as well as to businesses looking to leverage technology for growth and innovation.',
    icon: <GraduationCap />,
  },
  itEventsAndTrainings: {
    name: 'IT Events and Trainings',
    description:
      'Conduct events and trainings to enhance individuals skill and help businesses leverage the latest technologies for competitive growth.',
    icon: <CalendarDays />,
  },
}

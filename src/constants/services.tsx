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
    description:
      'Designing and developing web-based applications for various purposes, such as customer portals, booking systems, ERP, and interactive tools.',
    icon: <MonitorIcon />,
  },
  uiuxDesign: {
    name: 'UI/UX Design',
    description:
      'Focusing on user interface (UI) and user experience (UX) design to enhance usability and user satisfaction.',
    icon: <PaintbrushVertical />,
  },

  mobileApplicationDevelopement: {
    name: 'Mobile Application Development',
    description:
      'We specialize in creating mobile applications tailored to your specific business needs, allowing customers to manage their profiles, track orders, and access services directly from their smartphones.',
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

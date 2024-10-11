import {
  MonitorIcon,
  PaintbrushVertical,
  SmartphoneIcon,
  WrenchIcon,
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
    name: 'Mobile Application Developement',
    description:
      'We specialize in creating mobile applications tailored to your specific business needs, allowing customers to manage their profiles, track orders, and access services directly from their smartphones.',
    icon: <SmartphoneIcon />,
  },

  maintenanceSupport: {
    name: 'Maintenance & Support',
    description:
      'Providing ongoing support, updates, and maintenance services to ensure website performance and security.',
    icon: <WrenchIcon />,
  },
}

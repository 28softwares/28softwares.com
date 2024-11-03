import {
  ECOMMERCE_BASIC_PACKAGE_FEATURES,
  ECOMMERCE_ENTERPRISE_PACKAGE_FEATURES,
  ECOMMERCE_PROFESSIONAL_PACKAGE_FEATURES,
} from './productFeatureData'

export enum productNames {
  ECOMMERCE = 'Ecommerce',
  DOMAIN_HOST_MIS = 'Domain Hosting MIS',
}

export const productsData = [
  {
    title: 'Ecommerce',
    packages: {
      basic: {
        name: 'Basic',
        features: [...ECOMMERCE_BASIC_PACKAGE_FEATURES],
      },

      professional: {
        name: 'Professional',
        features: [...ECOMMERCE_PROFESSIONAL_PACKAGE_FEATURES],
      },

      enterprise: {
        name: 'Enterprise',
        features: [...ECOMMERCE_ENTERPRISE_PACKAGE_FEATURES],
      },
    },
    features: [
      ...ECOMMERCE_BASIC_PACKAGE_FEATURES,
      ...ECOMMERCE_PROFESSIONAL_PACKAGE_FEATURES.splice(
        1,
        ECOMMERCE_PROFESSIONAL_PACKAGE_FEATURES.length
      ),
      ...ECOMMERCE_ENTERPRISE_PACKAGE_FEATURES.splice(
        1,
        ECOMMERCE_ENTERPRISE_PACKAGE_FEATURES.length
      ),
    ],
    image:
      'https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_1280.png',
  },
]

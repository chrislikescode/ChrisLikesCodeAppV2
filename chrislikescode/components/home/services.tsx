import { PresentationChartBarIcon, GlobeAltIcon, CurrencyDollarIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline"


const features = [
  {
    name: 'Web Development & Hosting',
    description:
      'We can design and develop a custom website tailored to your specific needs. Our team of skilled developers will work with you to create a website that reflects your brand, engages your audience, and drives conversions.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Automation Solutions',
    description:
      'We can help automate your workflow and increase efficiency through custom software development. Our team of experts can develop solutions that streamline your business processes, saving you time and money.',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Search Engine Optimization (SEO)',
    description:
      "We can help improve your website's search engine rankings through SEO. Our team of SEO experts can optimize your website for relevant keywords, build quality backlinks, and improve the user experience to help drive traffic to your site.",
    icon: PresentationChartBarIcon,
  },
  {
    name: 'Lead Generation',
    description:
      'We can help you generate high-quality leads for your business through targeted digital marketing strategies. Our team of experts can create custom lead generation campaigns that drive traffic to your website, capture leads through landing pages, and nurture leads through email marketing and other tactics.',
    icon: CurrencyDollarIcon,
  },
]

export default function Services() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-white">Digital Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Effective Solutions to Power Your Business
          </p>
          <p className="mt-6 text-lg leading-8 text-white">
          We offer a range of digital solutions to help your business succeed online.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

import { useEffect, useState } from 'react';
import Head from 'next/head';
import {
  Card,
  CardBody,
  CardHeader,
  Button,
  Typography,
} from '@material-tailwind/react';
import {
  DevicePhoneMobileIcon,
  ShoppingBagIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  BoltIcon,
  ShieldCheckIcon,
  BriefcaseIcon,
  BookOpenIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export default function Home() {
  const [lowestPrice, setLowestPrice] = useState(null);
  const [highestPrice, setHighestPrice] = useState(null);

  // Fetch the price range from our API on mount
  useEffect(() => {
    async function fetchPrices() {
      try {
        const res = await fetch('/api/rates');
        const data = await res.json();
        setLowestPrice(data.lowestPrice);
        setHighestPrice(data.highestPrice);
      } catch (error) {
        console.error('Unable to fetch price data', error);
      }
    }
    fetchPrices();
  }, []);

  // Helper to format price strings with currency symbol and lakh unit
  const formatPrice = (price) => {
    if (!price) return '';
    // ensure string with two decimals if needed
    return `₹${parseFloat(price).toFixed(2)}L`;
  };

  return (
    <>
      <Head>
        <title>Volt Exchange – Premium EV Resale Marketplace</title>
        <meta
          name="description"
          content="Volt Exchange is India's first curated marketplace for pre-owned Tata Xpres‑T EV sedans from ride‑hailing fleets. Buy premium electric vehicles at a fraction of the new car price."
        />
      </Head>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight mb-4">
            Volt Exchange
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl font-light mb-6">
            India’s first curated marketplace for premium fleet EVs
          </p>
          <div className="flex justify-center items-center space-x-6 mb-6">
            <div className="text-5xl font-bold">
              {lowestPrice && highestPrice ? `${formatPrice(lowestPrice)}–${formatPrice(highestPrice)}` : '₹3.45–3.95L'}
            </div>
            <div className="text-base sm:text-lg font-medium text-white/80">
              Typical buyer price range
            </div>
          </div>
          <div className="text-sm sm:text-base mb-8">
            Save ₹3–4L versus buying new
          </div>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="https://wa.me/918800000000?text=Hi%2C%20I%20saw%20Volt%20Exchange%20EVs%20for%20sale%20and%20I%E2%80%99m%20interested."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button color="white" className="text-indigo-600" size="lg">
                Get quote on WhatsApp
              </Button>
            </a>
            <a href="mailto:sales@volt.exchange">
              <Button variant="outlined" color="white" size="lg">
                Book physical inspection
              </Button>
            </a>
          </div>
          <div className="mt-10 flex justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <BoltIcon className="w-5 h-5 text-white" />
              <span>100% EVs</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheckIcon className="w-5 h-5 text-white" />
              <span>Zero petrol</span>
            </div>
            <div className="flex items-center space-x-2">
              <BookOpenIcon className="w-5 h-5 text-white" />
              <span>Open book transparency</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-12">
            Why Volt Exchange?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-md">
              <CardHeader variant="filled" color="blue" className="p-4 flex items-center justify-center">
                <ShoppingBagIcon className="h-8 w-8 text-white" />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" className="mb-2">
                  Curated premium EVs
                </Typography>
                <Typography className="text-gray-700">
                  We handpick top‑quality Tata Xpres‑T EVs with clean service records, high state of health and low running costs. Own a premium electric sedan for a fraction of the new price.
                </Typography>
              </CardBody>
            </Card>
            <Card className="shadow-md">
              <CardHeader variant="filled" color="blue" className="p-4 flex items-center justify-center">
                <BoltIcon className="h-8 w-8 text-white" />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" className="mb-2">
                  Peace‑of‑mind testing & charging
                </Typography>
                <Typography className="text-gray-700">
                  Each vehicle undergoes multi‑point mechanical testing and battery diagnostics. We provide a comprehensive state‑of‑health report and assist with DC fast‑charging solutions.
                </Typography>
              </CardBody>
            </Card>
            <Card className="shadow-md">
              <CardHeader variant="filled" color="blue" className="p-4 flex items-center justify-center">
                <BriefcaseIcon className="h-8 w-8 text-white" />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" className="mb-2">
                  Leaders in fleet EV resale
                </Typography>
                <Typography className="text-gray-700">
                  Volt Exchange specialises exclusively in the resale of ride‑hailing EVs. Our expertise means you get insider access to the best maintained fleet vehicles in the country.
                </Typography>
              </CardBody>
            </Card>
            <Card className="shadow-md">
              <CardHeader variant="filled" color="blue" className="p-4 flex items-center justify-center">
                <BookOpenIcon className="h-8 w-8 text-white" />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" className="mb-2">
                  Open book transparency
                </Typography>
                <Typography className="text-gray-700">
                  We share complete service history, ownership details and test results for every EV. No hidden surprises — just transparent, data‑backed decisions you can trust.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Pricing & tiers
          </h2>
          <p className="text-lg text-gray-600">
            We offer three condition‑based pricing tiers. Every tier includes multi‑point testing, battery health certificate and basic warranty support.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
          {/* Budget Tier */}
          <Card className="border border-blue-500 shadow-xl">
            <CardHeader variant="gradient" color="blue" className="p-6 flex flex-col items-center">
              <Typography variant="h6" className="mb-2 text-white">
                74–78% State of Health
              </Typography>
              <Typography variant="h3" className="font-bold text-white">
                {formatPrice(lowestPrice || '3.45')}
              </Typography>
            </CardHeader>
            <CardBody className="p-6">
              <Typography variant="lead" className="mb-4 font-semibold">
                Budget: quick turnover
              </Typography>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1" />
                  <span>Affordable entry point for fleet operators</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1" />
                  <span>Tyres & brakes checked — may need replacement soon</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1" />
                  <span>Ideal for shorter duty cycles or rental use</span>
                </li>
              </ul>
            </CardBody>
          </Card>
          {/* Core Tier */}
          <Card className="border border-blue-500 shadow-xl">
            <CardHeader variant="gradient" color="blue" className="p-6 flex flex-col items-center">
              <Typography variant="h6" className="mb-2 text-white">
                78–82% State of Health
              </Typography>
              <Typography variant="h3" className="font-bold text-white">
                {formatPrice('3.65')}
              </Typography>
            </CardHeader>
            <CardBody className="p-6">
              <Typography variant="lead" className="mb-4 font-semibold">
                Core: dependable daily duty
              </Typography>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1" />
                  <span>Good state of health & well maintained</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1" />
                  <span>Ready for full‑time ride‑hail or fleet service</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1" />
                  <span>Lower running costs over 3+ years</span>
                </li>
              </ul>
            </CardBody>
          </Card>
          {/* Prime Tier */}
          <Card className="border border-blue-500 shadow-xl">
            <CardHeader variant="gradient" color="blue" className="p-6 flex flex-col items-center">
              <Typography variant="h6" className="mb-2 text-white">
                82–85% State of Health
              </Typography>
              <Typography variant="h3" className="font-bold text-white">
                {formatPrice(highestPrice || '3.95')}
              </Typography>
            </CardHeader>
            <CardBody className="p-6">
              <Typography variant="lead" className="mb-4 font-semibold">
                Prime: highest SOH & uptime
              </Typography>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1" />
                  <span>Top‑tier state of health with minimal degradation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1" />
                  <span>Near‑new interior and exterior condition</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1" />
                  <span>Maximum uptime & lowest downtime costs</span>
                </li>
              </ul>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Talk to our EV specialists
          </h2>
          <p className="text-lg text-gray-600">
            We’re here to help you select the right EV for your fleet. Drop us a message or give us a call and we’ll get back to you within 24 hours.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3">
          {/* Phone */}
          <Card className="shadow-md">
            <CardHeader
              variant="gradient"
              color="blue"
              className="p-4 flex items-center justify-center"
            >
              <DevicePhoneMobileIcon className="h-8 w-8 text-white" />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                Call us
              </Typography>
              <Typography className="text-gray-700 mb-4">
                Reach us Monday–Saturday 9am–6pm
              </Typography>
              <a href="tel:+919898119197" className="text-blue-600 font-semibold">
                +91&nbsp;98981&nbsp;9197
              </a>
            </CardBody>
          </Card>
          {/* WhatsApp */}
          <Card className="shadow-md">
            <CardHeader
              variant="gradient"
              color="blue"
              className="p-4 flex items-center justify-center"
            >
              <ChatBubbleLeftRightIcon className="h-8 w-8 text-white" />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                WhatsApp
              </Typography>
              <Typography className="text-gray-700 mb-4">
                Chat with our EV advisors for quick answers
              </Typography>
              <a
                href="https://wa.me/918800000000?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Volt%20Exchange%20EV%20offers."
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold"
              >
                Message us on WhatsApp
              </a>
            </CardBody>
          </Card>
          {/* Email */}
          <Card className="shadow-md">
            <CardHeader
              variant="gradient"
              color="blue"
              className="p-4 flex items-center justify-center"
            >
              <EnvelopeIcon className="h-8 w-8 text-white" />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                Email
              </Typography>
              <Typography className="text-gray-700 mb-4">
                Send us your questions & we’ll respond fast
              </Typography>
              <a href="mailto:sales@volt.exchange" className="text-blue-600 font-semibold">
                sales@volt.exchange
              </a>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Supercharge your EV operations
          </h2>
          <p className="text-lg sm:text-xl mb-8">
            Join the revolution of sustainable transportation. Start building your premium EV fleet today with Volt Exchange.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="https://wa.me/918800000000?text=I%20want%20to%20buy%20an%20EV%20from%20Volt%20Exchange"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button color="white" className="text-indigo-600" size="lg">
                Get Started
              </Button>
            </a>
            <a href="mailto:sales@volt.exchange">
              <Button variant="outlined" color="white" size="lg">
                Contact Sales
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
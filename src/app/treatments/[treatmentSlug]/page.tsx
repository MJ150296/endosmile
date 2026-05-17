import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTreatmentBySlug, treatments } from '@/app/data/treatments';
import HeadingPointer from '@/app/components/HeadingPointer';

type Props = {
  params: Promise<{ treatmentSlug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const treatment = getTreatmentBySlug(resolvedParams.treatmentSlug);
  
  if (!treatment) {
    return {
      title: 'Treatment Not Found',
    }
  }

  return {
    title: treatment.metaTitle,
    description: treatment.metaDescription,
    keywords: treatment.keywords,
    openGraph: {
      title: treatment.metaTitle,
      description: treatment.metaDescription,
      type: 'website',
    },
  }
}

export function generateStaticParams() {
  return treatments.map((treatment) => ({
    treatmentSlug: treatment.slug,
  }))
}

export default async function TreatmentPage({ params }: Props) {
  const resolvedParams = await params;
  const treatment = getTreatmentBySlug(resolvedParams.treatmentSlug);

  if (!treatment) {
    notFound();
  }

  return (
    <div className="pt-32 pb-20 px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <div className="flex gap-x-3 items-center mb-4">
            <HeadingPointer />
            <h3 className="font-semibold text-blue-600">OUR TREATMENTS</h3>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-semibold mb-6">{treatment.title}</h1>
          <p className="text-lg text-gray-600 mb-8">{treatment.shortDescription}</p>
          
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">About This Treatment</h2>
            <p className="text-gray-700 leading-relaxed">{treatment.description}</p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {treatment.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Procedure Steps</h2>
            <div className="space-y-4">
              {treatment.procedureSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold shrink-0">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-[400px]">
          <div className="sticky top-40">
            <div className="rounded-2xl overflow-hidden shadow-xl mb-6">
              <Image
                src={treatment.imageURL}
                alt={treatment.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <h3 className="font-semibold text-xl mb-4">Treatment Details</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium">{treatment.duration}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">Price Range</span>
                  <span className="font-medium">{treatment.priceRange}</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="text-gray-600">Recovery Time</span>
                  <span className="font-medium">{treatment.recoveryTime}</span>
                </div>
              </div>
            </div>

            <Link
              href="/bookAppointment"
              className="block text-center w-full py-4 bg-blue-600 text-white rounded-full font-medium text-lg hover:bg-blue-700 transition shadow-lg"
            >
              Book Appointment
            </Link>

            <Link
              href="/treatments"
              className="block text-center w-full mt-4 py-3 border border-gray-300 rounded-full font-medium hover:bg-white transition"
            >
              ← View All Treatments
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
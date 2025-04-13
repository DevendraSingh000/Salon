import React, { useState } from 'react';
import { MdDone } from "react-icons/md";
import ContectForm from '../pages/ContectForm';

const ServiceCard = ({ service }) => (
  <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
    <div className="mb-4 group">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <h2 className="text-xl font-bold text-black group-hover:text-[#FF8442]">
          {service.title}
        </h2>
        <span className="text-lg font-semibold text-black group-hover:text-[#FF8442]">
          {service.price}
        </span>
      </div>
      <div className="hidden sm:block h-0.5 bg-black my-2 group-hover:bg-[#FF8442]"></div>
    </div>
    <ul className="space-y-2 text-black">
      {service.features.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <MdDone className="text-[#FF8442] mt-1" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

// ✅ Fixed array structure
const itemslist = [
  [
    { name: "Beard Trim and Sculpt", price: "827" },
    { name: "Tailored Haircuts", price: "827" },
    { name: "Luxury Shave", price: "927" },
    { name: "Classic Haircut", price: "727" },
    { name: "Beard Styling", price: "627" },
    { name: "Hair Wash & Massage", price: "527" },
  ],
  [
    { name: "Deluxe Beard Trim", price: "750" },
    { name: "Grooming Facial", price: "950" },
    { name: "Luxury Haircut", price: "875" },
    { name: "Scalp Treatment", price: "600" },
  ],
  [
    { name: "Anti-aging Facial", price: "999" },
    { name: "Color Treatment", price: "1100" },
    { name: "Exfoliating Peel", price: "850" },
    { name: "Hydrating Mask", price: "720" },
  ],
];

const DetailBlock = ({ data, index, setIndex }) => {
  const handleDownClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % data.img.length);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row gap-10 mt-20 relative">
      <div className="h-[530px] w-full lg:w-1/3 overflow-hidden rounded-2xl relative">
        <div
          className="transition-transform duration-700"
          style={{
            transform: `translateY(-${index * 430}px)`,
          }}
        >
          {data.img.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-[530px] object-cover"
            />
          ))}
        </div>
        <button
          onClick={handleDownClick}
          className="absolute bottom-4 right-4 bg-black text-white px-4 py-1 rounded"
        >
          Down
        </button>
      </div>

      <div className="w-full lg:w-[40rem]">
        <div className="bg-black border-l-4 border-[#ff8442] py-4 px-4 mb-4 text-xl sm:text-3xl text-white">
          <h1>{data.title}</h1>
        </div>
        <div className="text-black text-base sm:text-lg leading-relaxed">
          <p>{data.detail}</p>
        </div>

        <div className='price grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6'>
          {data.items.map((item, i) => (
            <div
              key={i}
              className='hover:bg-[#0f0f0f] group hover:px-3 p-2 rounded-md transition-all duration-300 text-white/70 hover:text-white'
            >
              <div className='flex justify-between items-center'>
                <h1 className='text-base sm:text-sm font-semibold text-black group-hover:text-[#FF8442]'>
                  {item.name}
                </h1>
                <span className='text-sm sm:text-base text-black group-hover:text-[#FF8442]'>
                  ₹{item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function Services() {
  const [index0, setIndex0] = useState(0);
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);

  const servicess = [
    {
      title: "VIP STYLE AND PAMPER",
      price: "$120",
      features: [
        "Bespoke haircut",
        "Premium beard grooming",
        "Soothing steam facial",
        "Rejuvenating neck and shoulder massage",
      ],
    },
    {
      title: "GENTLEMAN'S REVIVAL",
      price: "$105",
      features: [
        "Classic haircut",
        "Detailed beard sculpting",
        "Invigorating mini facial",
        "Tension-relieving hand massage",
      ],
    },
    {
      title: "EXECUTIVE RETREAT HAIRCUT",
      price: "$120",
      features: [
        "Executive haircut",
        "Deep-cleansing facial",
        "Meticulous beard grooming",
        "Soothing full-back massage",
      ],
    },
  ];

  const details = [
    {
      title: "PREMIUM PACKAGES & DEALS",
      detail:
        "Discover a world of personalized style at TrimHub. Our experienced barbers specialize in classic cuts and modern trends. We cater to all ages with services from beard trims to kids' cuts, ensuring every haircut complements your unique features.",
      img: [
        "https://framerusercontent.com/images/95Hi86MlHfT3lEkPUsrfE0t8GSY.jpg?scale-down-to=1024",
        "https://framerusercontent.com/images/p5mr7oqmC8IOkjO1RADUCQgnmIs.jpg?scale-down-to=1024",
        "https://framerusercontent.com/images/nnh8EtfMZHyqiviDYNvurHZ4s.jpg?scale-down-to=1024",
      ],
      items: itemslist[0],
    },
    {
      title: "GROOMING AND SKINCARE",
      detail:
        "Our beard grooming services blend artistry with precision. From sharp line-ups to nourishing treatments, we cater to your unique style. Achieve a refined and confident look that reflects your personality.",
      img: [
        "https://framerusercontent.com/images/8htUQ4i2B66ktaaAV2n2MSf0s44.jpg?scale-down-to=1024",
        "https://framerusercontent.com/images/mLWNqKdLvqS8DAPqxwylmM08.jpg?scale-down-to=1024",
        "https://framerusercontent.com/images/tZbFan7v99Vek2KcvCb0nZHupY.jpg?scale-down-to=1024",
      ],
      items: itemslist[1],
    },
    {
      title: "COLOR & TREATMENT",
      detail:
        "Our services go beyond hair. Indulge in exfoliating treatments, hydrating facials, and targeted anti-aging solutions. Your skin deserves the best—smooth, glowing, and rejuvenated.",
      img: [
        "https://framerusercontent.com/images/fQqvJuLT09Er9NhG2DhOWH0jSs.jpg?scale-down-to=1024",
        "https://framerusercontent.com/images/NusgC5KfLN2ZqJLaxE33RWmKTE.jpg?scale-down-to=1024",
        "https://framerusercontent.com/images/nVKUZQnkzqhQ83oZn5q9VhNkbw.jpg?scale-down-to=1024",
      ],
      items: itemslist[2],
    },
  ];

  return (
    <section>
      <div className="relative w-full h-28">
        <div className="absolute inset-0 -z-10 bg-[url('https://framerusercontent.com/images/MqHEokHdo8zTQVDxypZEntmHgQ.jpg?scale-down-to=2048')] bg-cover bg-center w-full h-full" />
        <div className="absolute inset-0 z-0 bg-black opacity-50" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tighter">OUR SERVICES</h1>
        </div>
      </div>

      <div className="px-4 py-12 sm:px-10 lg:px-20">
        <div className="bg-black border-l-4 border-[#ff8442] py-4 px-4 mb-8 text-2xl sm:text-4xl text-white">
          <h1>PREMIUM PACKAGES & DEALS</h1>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicess.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>

        {/* Detail Blocks */}
        <DetailBlock data={details[0]} index={index0} setIndex={setIndex0} />
        <DetailBlock data={details[1]} index={index1} setIndex={setIndex1} />
        <DetailBlock data={details[2]} index={index2} setIndex={setIndex2} />
      </div>

      <ContectForm />
    </section>
  );
}

export default Services;

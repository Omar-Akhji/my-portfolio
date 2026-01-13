"use client";

import { useState } from "react";
import Image from "next/image";
import TestimonialsModal, {
  TestimonialData,
} from "@/components/TestimonialsModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<TestimonialData | null>(null);

  const testimonials: TestimonialData[] = [
    {
      name: "Daniel lewis",
      avatar: "/assets/images/avatar-1.png",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
      date: "14 June, 2021",
    },
    {
      name: "Jessica miller",
      avatar: "/assets/images/avatar-2.png",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
      date: "14 June, 2021",
    },
    {
      name: "Emily evans",
      avatar: "/assets/images/avatar-3.png",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
      date: "14 June, 2021",
    },
    {
      name: "Henry william",
      avatar: "/assets/images/avatar-4.png",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
      date: "14 June, 2021",
    },
  ];

  const handleTestimonialClick = (item: TestimonialData) => {
    setSelectedTestimonial(item);
    setModalOpen(true);
  };

  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I&#39;m Creative Director and UI/UX Designer from Sydney, Australia,
          working in web development and print media. I enjoy turning complex
          problems into simple, beautiful and intuitive designs.
        </p>

        <p>
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way. I created web design for many famous brand
          companies.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i&#39;m doing</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <Image
                src="/assets/images/icon-design.svg"
                alt="design icon"
                width={40}
                height={40}
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web design</h4>

              <p className="service-item-text">
                The most modern and high-quality design made at a professional
                level.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <Image
                src="/assets/images/icon-dev.svg"
                alt="Web development icon"
                width={40}
                height={40}
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web development</h4>

              <p className="service-item-text">
                High-quality development of sites at the professional level.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <Image
                src="/assets/images/icon-app.svg"
                alt="mobile app icon"
                width={40}
                height={40}
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Mobile apps</h4>

              <p className="service-item-text">
                Professional development of applications for iOS and Android.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <Image
                src="/assets/images/icon-photo.svg"
                alt="camera icon"
                width={40}
                height={40}
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Photography</h4>

              <p className="service-item-text">
                I make high-quality photos of any category at a professional
                level.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((item, index) => (
            <li className="testimonials-item" key={index}>
              <div
                className="content-card"
                data-testimonials-item
                onClick={() => handleTestimonialClick(item)}>
                <figure className="testimonials-avatar-box">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={60}
                    height={60}
                    data-testimonials-avatar
                    unoptimized
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title>
                  {item.name}
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>{item.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <TestimonialsModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        testimonial={selectedTestimonial}
      />

      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="#">
              <Image
                src="/assets/images/logo-1-color.png"
                alt="client logo"
                width={100}
                height={50}
                style={{ width: "100%", height: "auto" }}
                unoptimized
              />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <Image
                src="/assets/images/logo-2-color.png"
                alt="client logo"
                width={100}
                height={50}
                style={{ width: "100%", height: "auto" }}
                unoptimized
              />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <Image
                src="/assets/images/logo-3-color.png"
                alt="client logo"
                width={100}
                height={50}
                style={{ width: "100%", height: "auto" }}
                unoptimized
              />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <Image
                src="/assets/images/logo-4-color.png"
                alt="client logo"
                width={100}
                height={50}
                style={{ width: "100%", height: "auto" }}
                unoptimized
              />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <Image
                src="/assets/images/logo-5-color.png"
                alt="client logo"
                width={100}
                height={50}
                style={{ width: "100%", height: "auto" }}
                unoptimized
              />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <Image
                src="/assets/images/logo-6-color.png"
                alt="client logo"
                width={100}
                height={50}
                style={{ width: "100%", height: "auto" }}
                unoptimized
              />
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
}

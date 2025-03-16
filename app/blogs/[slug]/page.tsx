"use client";

import { useParams } from "next/navigation";
import React from "react";
// import{slug} from "app/sitemap"
const Page = () => {
  const { slug } = useParams();
  return (
    <div>
      {" "}
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img
                    className="mr-4 w-16 h-16 rounded-full object-fill "
                    src="/Assets/logo.jpg"
                    alt="Vijay Jain"
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="text-xl font-bold text-gray-900 dark:text-white"
                    >
                      Vijay Jain
                    </a>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      Professoional Photographer,Videographer
                    </p>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      <time dateTime="2025-02-28" title="February 28th, 2025">
                        Feb. 28, 2025
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                {typeof slug === "string"
                  ? slug.replace(/-/g, " ")
                  : "Loading..."}
              </h1>
            </header>
            <h1>Essential Photography Tips & Techniques</h1>
            <p>
              Photography is more than just capturing moments; it’s about
              telling a story, evoking emotions, and creating memories that last
              a lifetime. Whether you’re a beginner or a seasoned photographer,
              mastering the art of photography requires practice, patience, and
              a keen eye for detail.
            </p>
            <p>
              In this blog, we’ll explore essential photography tips and
              techniques to help you take stunning shots.
            </p>

            <h2>1. Understand Your Camera</h2>
            <p>
              Before you start shooting, familiarize yourself with your camera’s
              settings, modes, and functions. Learn about ISO, shutter speed,
              and aperture—these three elements make up the exposure triangle
              and play a crucial role in capturing well-exposed images.
            </p>

            <h2>2. Focus on Composition</h2>
            <p>
              Composition is key to creating visually appealing photographs. Use
              the rule of thirds, leading lines, symmetry, and framing to add
              depth and interest to your images. Experiment with different
              angles and perspectives to bring out the best in your subjects.
            </p>

            <h2>3. Utilize Natural Light</h2>
            <p>
              Lighting can make or break a photograph. The golden hour—shortly
              after sunrise and before sunset—provides soft, warm light that
              enhances your images. Avoid harsh midday sunlight and experiment
              with shadows and reflections for creative effects.
            </p>

            <h2>4. Master Post-Processing</h2>
            <p>
              Editing can elevate your photography to the next level. Use
              software like Adobe Lightroom or Photoshop to adjust exposure,
              contrast, and colors. However, avoid over-editing—strive for a
              natural and polished look that enhances, rather than distorts, the
              original image.
            </p>

            <h2>5. Experiment and Practice</h2>
            <p>
              Great photography comes with experience. Challenge yourself by
              trying new genres, such as portrait, landscape, macro, or street
              photography. Participate in photo challenges, join online
              photography communities, and never stop learning.
            </p>

            <p>
              Photography is a journey of continuous learning and creativity.
              With the right techniques and passion, you can turn ordinary
              moments into extraordinary memories. Grab your camera, get out
              there, and start capturing the world through your lens!
            </p>
          </article>
        </div>
      </main>
      <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://viraj-art-photos.vercel.app/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="/Assets/Viraj Logo.png"
                className="h-20 w-20"
                alt="Viraj Art Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Viraj Art Photos
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a
                  href="https://viraj-art-photos.vercel.app/#about"
                  className="hover:underline me-4 md:me-6"
                >
                  About
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="https://viraj-art-photos.vercel.app/#contact"
                  className="hover:underline me-4 md:me-6"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://viraj-art-photos.vercel.app"
                  className="hover:underline "
                >
                  Back to home
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a
              href="https://viraj-art-photos.vercel.app/"
              className="hover:underline"
            >
              Viraj Art Photos™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Page;

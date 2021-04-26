import { Testimonials } from '@/components/Testimonials'
import { DarkMode } from '@/components/home/DarkMode'
import { ConstraintBased } from '@/components/home/ConstraintBased'
import { BuildAnything } from '@/components/home/BuildAnything'
import { Performance } from '@/components/home/Performance'
import { MobileFirst } from '@/components/home/MobileFirst'
import { StateVariants } from '@/components/home/StateVariants'
import { ComponentDriven } from '@/components/home/ComponentDriven'
import { Customization } from '@/components/home/Customization'
import { ModernFeatures } from '@/components/home/ModernFeatures'
import { EditorTools } from '@/components/home/EditorTools'
import { ReadyMadeComponents } from '@/components/home/ReadyMadeComponents'
import { Search } from '@/components/Search'
import { Hero } from '@/components/home/Hero'
import { BigText, InlineCode, Link, Paragraph, Widont } from '@/components/home/common'
import { useEffect, useState } from 'react'
import { Logo } from '@/components/Logo'
import { Footer } from '@/components/home/Footer'
import NextLink from 'next/link'
import Head from 'next/head'

function NpmInstallButton() {
  const [state, setState] = useState('idle')

  useEffect(() => {
    let current = true
    if (state === 'copying') {
      navigator.clipboard
        .writeText('npm install tailwindcss')
        .then(() => {
          if (current) {
            setState('copied')
          }
        })
        .catch(() => {
          if (current) {
            setState('error')
          }
        })
    } else if (state === 'copied' || state === 'error') {
      window.setTimeout(() => {
        if (current) {
          setState('idle')
        }
      }, 2000)
    }
    return () => (current = false)
  }, [state])

  return (
    <button
      type="button"
      className="w-full sm:w-auto flex-none bg-gray-50 text-gray-400 hover:text-gray-900 font-mono leading-6 py-3 sm:px-6 border border-gray-200 rounded-xl flex items-center justify-center space-x-2 sm:space-x-4 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 focus:outline-none transition-colors duration-200"
      onClick={() => setState('copying')}
    >
      <span className="text-gray-900">
        <span className="hidden sm:inline text-gray-500" aria-hidden="true">
          ${' '}
        </span>
        npm install tailwindcss
      </span>
      <span className="sr-only">(click to copy to clipboard)</span>
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M8 16c0 1.886 0 2.828.586 3.414C9.172 20 10.114 20 12 20h4c1.886 0 2.828 0 3.414-.586C20 18.828 20 17.886 20 16v-4c0-1.886 0-2.828-.586-3.414C18.828 8 17.886 8 16 8m-8 8h4c1.886 0 2.828 0 3.414-.586C16 14.828 16 13.886 16 12V8m-8 8c-1.886 0-2.828 0-3.414-.586C4 14.828 4 13.886 4 12V8c0-1.886 0-2.828.586-3.414C5.172 4 6.114 4 8 4h4c1.886 0 2.828 0 3.414.586C16 5.172 16 6.114 16 8" />
      </svg>
    </button>
  )
}

export default function Home() {
  return (
    <div className="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden">
      <Head>
        <meta
          key="twitter:title"
          name="twitter:title"
          content="Tailwind CSS - Rapidly build modern websites without ever leaving your HTML."
        />
        <meta
          key="og:title"
          property="og:title"
          content="Tailwind CSS - Rapidly build modern websites without ever leaving your HTML."
        />
        <title>Tailwind CSS - Rapidly build modern websites without ever leaving your HTML.</title>
      </Head>
      <header className="relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <div className="px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8">
          <div className="border-b border-gray-200 py-4 flex items-center justify-between mb-16 sm:mb-20 -mx-4 px-4 sm:mx-0 sm:px-0">
            <Search />
            <div className="flex items-center space-x-6 sm:space-x-10 ml-6 sm:ml-10">
              <NextLink href="/docs">
                <a className="text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200 py-2">
                  <span className="sm:hidden">Docs</span>
                  <span className="hidden sm:inline">Documentation</span>
                </a>
              </NextLink>
              <a
                href="https://github.com/tailwindlabs/tailwindcss"
                className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
              >
                <span className="sr-only">Roberto Rodríguez Artavia</span>
              </a>
            </div>
          </div>
          <Logo className="w-auto h-7 sm:h-8" />
          <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10">
            The key to digital transformation is not technology, it's an organization that knows how
            to use it as a tool
          </h1>
          <p className="max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11">
            I help <InlineCode>transform</InlineCode> organizations by creating remote + face2face
            courses, coaching, consulting, and developing software.
          </p>
          <div className="flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 text-center">
            <NextLink href="/docs">
              <a className="w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200">
                Get
              </a>
            </NextLink>
            <NpmInstallButton />
          </div>
        </div>
        <Hero />
      </header>

      <section className="relative z-10 text-center max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <div className="px-4 sm:px-6 md:px-8">
          <BigText as="h2" className="mb-8">
            <Widont>Think about this for a moment</Widont>
          </BigText>
          <figure>
            <blockquote>
              <Paragraph className="max-w-4xl mx-auto mb-6">
                <Widont>
                  Last night I noticed the chain on my motorcycle was loose. It's normal for them to
                  stretch. In the morning I used my tools to adjust it. Your organization should be
                  constantly improving the operation by making technological adjustments.
                </Widont>
                <br />
              </Paragraph>
            </blockquote>
            <figcaption className="sm:text-xl font-medium flex flex-col items-center">
              <div className="p-1 border-2 border-light-blue-400 rounded-full mb-3">
                <img
                  src={require('@/img/roberto-rodriguez.jpeg').default}
                  alt=""
                  className="w-10 h-10 rounded-full bg-light-blue-100"
                  loading="lazy"
                />
              </div>
              <div className="text-light-blue-600">
                That's what digital trasformation it's all about.
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <Testimonials />
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
        <StateVariants />
        <ConstraintBased />
        <BuildAnything />
        <Performance />
        <MobileFirst />

        <ComponentDriven />
        <DarkMode />
        <Customization />
        <ModernFeatures />
        <EditorTools />
        <ReadyMadeComponents />
      </div>
      <Footer />
    </div>
  )
}

import "@/styles/globals.css"

import { Bebas_Neue, Montserrat } from "@next/font/google"

import type { AppProps } from "next/app"

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-montserrat",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={`${bebas.variable} ${montserrat.variable}`}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

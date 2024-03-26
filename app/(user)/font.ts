import {Suwannaphum, Inter} from "next/font/google"
import localFont from "next/font/local"
export const localCustomFont = localFont({
    src: "./font/osaka-re.ttf",
    display: "swap",
    variable: "--font-bold-sans-serif-7",
})

export const inter = Inter({
	weight: ["400", "500", "600", "700"],
	subsets : ["latin"], 
	display: "swap", 
    variable: "--font-inter", 
});

export const suwannaphum = Suwannaphum({
	weight: ["400", "700"],
	subsets : ["khmer"], 
	display: "swap", 
    variable: "--font-suwannaphum", 
});
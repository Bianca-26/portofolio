import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050B14] text-white relative overflow-hidden flex flex-col justify-between font-sans">
      
      {/* 1. LINII DE FUNDAL */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden">
        {/* Linia subțire */}
        <div className="absolute top-[34%] sm:top-[20%] md:top-[35%] lg:top-[8%] -left-[0%] w-[100%] h-[20vh] sm:h-[25vh] lg:h-[30vh] opacity-70">
          <Image
            src="/linie_subtire.svg"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Linia groasă */}
        <div className="absolute top-[32%] sm:top-[30%] md:top-[33%] lg:top-[6%] -left-[0%] w-[100%] h-[22vh] sm:h-[28vh] lg:h-[35vh] opacity-90 z-30">
          <Image
            src="/linie_groasa.svg"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* 2. HEADER-UL */}
      <Header />

      {/* 3. HERO CONTENT */}
      <main className="w-full max-w-[1300px] mx-auto px-6 sm:px-12 lg:px-16 pt-[130px] lg:pt-[2vh] pb-24 lg:pb-[28vh] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-center relative my-auto z-10">
        
        {/* COLOANA STÂNGA */}
        <div className="lg:col-span-6 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start z-40 lg:mt-35">
          <h1 className="text-[2.2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[3.5vw] xl:text-[3.6rem] font-extrabold leading-[1.15] maven-pro lg:whitespace-nowrap">
            Simplicity by design. <br className="hidden sm:inline" />
            Functionality by default.
          </h1>

          {/* PASTILE (Structură hibridă: 2 rânduri pe Mobil, 1 singur rând pe Laptop) */}
          <div className="flex flex-col lg:flex-row items-center lg:justify-start gap-3 lg:gap-7 py-[1vh] w-full">
            
            {/* Pastila 1 (Apare sus de tot pe mobil) */}
            <span className="whitespace-nowrap px-8 lg:px-12 py-3 lg:py-3.5 rounded-full backdrop-blur-md border border-white/30 bg-[#6395C0]/30 text-white text-sm sm:text-base font-normal lato cursor-pointer transition-all duration-300 hover:bg-[#A7D6FF] hover:text-[#0E1B2B] hover:font-semibold hover:border-white">
              Responsive Designs
            </span>

            {/* Rândul 2 pe mobil (UI/UX + Mobile UI una lângă alta) */}
            <div className="flex items-center justify-center gap-3 lg:gap-7">
              <span className="whitespace-nowrap px-8 lg:px-12 py-3 lg:py-3.5 rounded-full backdrop-blur-md border border-white/30 bg-[#6395C0]/30 text-white text-sm sm:text-base font-normal lato cursor-pointer transition-all duration-300 hover:bg-[#A7D6FF] hover:text-[#0E1B2B] hover:font-semibold hover:border-white">
                UI/UX Design
              </span>
              
              <span className="whitespace-nowrap px-8 lg:px-12 py-3 lg:py-3.5 rounded-full backdrop-blur-md border border-white/30 bg-[#6395C0]/30 text-white text-sm sm:text-base font-normal lato cursor-pointer transition-all duration-300 hover:bg-[#A7D6FF] hover:text-[#0E1B2B] hover:font-semibold hover:border-white">
                Mobile UI
              </span>
            </div>

          </div>

         <div className="lg:hidden absolute top-[45%] left-1/2 -translate-x-1/2 w-[140%] h-[120px] pointer-events-none opacity-70 z-0">
          <Image src="/linie_subtire.svg" alt="" fill className="object-contain" />
        </div>

        <p className="text-base sm:text-lg lg:text-[1.2vw] xl:text-[1.2rem] text-gray-300 max-w-[90%] font-normal leading-relaxed lato relative z-20">
          Hi, I’m a UI/UX Designer passionate about creating intuitive interfaces that people love to use.
        </p>
        </div>

        {/* COLOANA DREAPTA (POZA) */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end items-center relative">
          
          <div className="lg:hidden absolute -top-[3%] left-1/2 -translate-x-1/2 w-[140%] h-[160px] pointer-events-none opacity-90 z-30">
            <Image src="/linie_groasa.svg" alt="" fill className="object-contain" />
          </div>
          <div 
            className="relative aspect-square transition-all w-[90%] sm:w-[75%] lg:w-[85%] lg:min-w-[800px] lg:translate-x-[25%] lg:translate-y-[16%] z-20"
          >
            <Image
              src="/poza.svg"
              alt="Bianca Sandovici"
              fill
              className="object-contain"
              priority
            />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
import ButtonCopy from "@/components/ButtonCopy";
import Footer from "@/components/Footer";
import Social from "@/components/Social";
import Datas from "@/data/dataJson.json";

export default function About() {
    const configData = Datas[0];
    return (
        <>
            <div className="px-7 py-7">
                <h1 className="flex items-center gap-x-2 text-lg font-medium">
                    <div className="w-4 h-2 bg-gray-400 rounded-full"></div>
                    About
                </h1>
            </div>
            <div className="px-7 py-7 flex flex-col flex-col-reverse md:flex md:flex-row md:items-center md:justify-between pt-3">
                <div className="flex flex-col gap-y-4">
                    <h1 className="text-4xl md:text-4xl font-semibold text-center md:text-justify tracking-tighter">
                        It's me {configData.name}
                    </h1>
                    <p className="text-lg text-gray-500 text-center md:text-justify font-normal tracking-tigh">
                        {configData.aboutDesc}
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-semibold">Let's work together..</h1>
                <p className="text-md font-normal text-gray-500 text-center px-3">
                    My curiosity and eagerness to learn drive me to take on new challenges and deliver innovative solutions
                </p>
            </div>
            <div className="flex flex-col flex-col-reverse md:flex md:flex-row md:items-center justify-center py-8">
                <div className="flex flex-col gap-y-2">

                    <div className="flex items-center text-center md:text-justify justify-center md:justify-normal">
                        <a href="/assets/CV_MuhamadRizki_ENG.pdf" download>
                            <button
                                type="button"
                                className="gap-x-1 before:ease relative overflow-hidden border border-[#000000] bg-[#050708] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center mr-2 mb-2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path d="M14.707 2.293A1 1 0 0014 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8a1 1 0 00-.293-.707l-5-5zM13 3.414L17.586 8H14a1 1 0 01-1-1V3.414zM19 20H6V4h7v4a3 3 0 003 3h3v9z" />
                                    <path d="M8 12h8v2H8v-2zm0 4h8v2H8v-2z" />
                                </svg>
                                My Resume ENG
                            </button>
                        </a>
                        <a href="/assets/CV_MuhamadRizki_ID.pdf" download>
                            <button
                                type="button"
                                className="gap-x-1 before:ease relative overflow-hidden border border-[#000000] bg-[#050708] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center mr-2 mb-2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path d="M14.707 2.293A1 1 0 0014 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8a1 1 0 00-.293-.707l-5-5zM13 3.414L17.586 8H14a1 1 0 01-1-1V3.414zM19 20H6V4h7v4a3 3 0 003 3h3v9z" />
                                    <path d="M8 12h8v2H8v-2zm0 4h8v2H8v-2z" />
                                </svg>
                                My Resume ID
                            </button>
                        </a>
                        <ButtonCopy />
                    </div>
                </div>
            </div>
            <Social />
            <Footer />
        </>
    );
}
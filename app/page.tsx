"use client";

import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Mover from "./components/Mover";
import SpringModal from "./components/Modal.jsx";

export default function Home() {
  const [sent, SetSent] = useState(false);
  const [hire, setHire] = useState(false);

  return (
    <main>
      <div className="bg-gradient-to-tl z-[0] w-screen h-screen fixed inset-0 from-[#3c3d86] to-[#03043c] "></div>
      <Mover />
      <div className="bg-grey/[0.1] backdrop-blur-xl w-full h-full fixed z-[2]"></div>

      <div className="z-[3] overflow-auto flex md:flex-row flex-col">

        <header className="z-[4] md:fixed bg-transparent flex align-middle justify-center md:justify-end border-white pb-[12em]  p-[8em] px-[6em] w-full md:w-[50%] h-full"> 
          <div className="flex flex-col justify-between">
            <div className="flex flex-col align-middle">
              <div className="text-4xl max-[441px]:text-3xl sm:text-5xl text-center md:text-6xl font-sans font-bold md:text-right text-slate-300 mt-10">
                Abdur Rehman
              </div>

              <div className="text-center md:text-right font-bold p-4 md:pl-2 pt-2">
                <em className="bg-gradient-to-br text-2xl max-sm:text-xl font-sans font-bold from-[#b9bbff] to-[#6b6ffd] text-transparent bg-clip-text">
                  Software Engineer
                </em>
              </div>

              <div className="text-center md:text-right max-sm:text-lg text-xl font-sans font-bold text-slate-300 p-1">
                I develop and bulid engaging, intuitive <br />
                and responsive software.
              </div>

              <button onClick={() => setHire(true)} className="transition-all ease-in-out duration-120 hover:scale-105 active:scale-95 font-bold font-sans hover:bg-slate-600/[0.3]  text-slate-300 border border-slate-400 bg-slate-800/30 hover:text-xl hover:mt-[1.24rem] md:hover:mr-[0.35em] text-lg m-auto md:ml-auto w-[60%] p-4 md:mr-[0.4em] mt-5 rounded-lg">
                Hire Me!
              </button>
              <SpringModal isOpen={hire} setIsOpen={setHire} />
            </div>

            <div className="sm:mt-30 mt-20 md:mr-[0.6em]">
              <ul className="flex flex-row gap-6 justify-center md:justify-end">
                <li><button className="hover:opacity-60 hover:scale-105"><FontAwesomeIcon icon={faEnvelope} size="2x" /></button></li>
                <li><button className="hover:opacity-60 hover:scale-105"><FontAwesomeIcon icon={faGithub} size="2x" /></button></li>
                <li><button className="hover:opacity-60 hover:scale-105"><FontAwesomeIcon icon={faTwitter} size="2x" /></button></li>
                <li><button className="hover:opacity-60 hover:scale-105"><FontAwesomeIcon icon={faLinkedin} size="2x" /></button></li>
              </ul>
            </div>
          </div>
        </header>

        <div className="w-[55%] max-md:w-full pointer-events-auto h-full z-[3] ml-auto mt-[11em] relative max-md:pl-[8em] max-sm:pl-[7em] max-sm:px-[5em] px-[7em] max-[441px]:px-[2em]">
          <div className="text-slate-300 max-[441px]:text-sm text-lg font-bold font-sans">
            My software engineering career began as a junior analyst, where I
            honed my analytical and problem-solving skills. Currently, 
            I am participating in the Headstarter AI fellowship,
            an experience that has deepened my expertise in artificial intelligence. 
            I have a strong passion for competitive programming and constantly seek out new 
            technologies to learn and master. My technical skill set includes proficiency in 
            JavaScript, React.js, Node.js with Express, C++, Rust, Python, and Ruby, which I 
            leverage to develop innovative and efficient solutions.
          </div>

          <div className="mt-[4em] p-4 rounded-lg bg-slate-700/[0.2] transition-all ease-in-out duration-200 hover:bg-slate-800/[0.3] backdrop-blur-3xl">
            <h2 className="text-3xl font-bold font-sans text-sky-500">Experience</h2>

            <div className="my-5 flex flex-col gap-1">

              <h3 className="text-2xl font-sans font-bold text-[#5ba4d8]" >Software Engineering Fellow</h3>
              <h4 className="text-xl font-sans font-bold text-[#5ba4d8]">Headstarter AI</h4>
              <p className="text-lg font-sans text-[#5ba4d8]">
                <em>
                  July 2024 - September 2024
                </em>
              </p>
              <p className="text-slate-300 font-bold text-lg font-sans">
                Fellowship at Headstarter AI, 
                I immersed myself in the dynamic field of artificial intelligence, 
                gaining hands-on experience with cutting-edge AI technologies. 
                This program not only enhanced my technical skills but also provided 
                invaluable lessons in teamwork, leadership, and brand management. 
                Collaborating with a diverse group of talented individuals, 
                I learned how to effectively communicate and coordinate within a 
                team to achieve common goals. The fellowship also offered opportunities to 
                take on leadership roles, where I honed my ability to guide and motivate peers. 
                Additionally, I explored the nuances of brand management, understanding how 
                to position and promote AI solutions in a competitive market. 
                This comprehensive experience has equipped me with a well-rounded skill set, 
                preparing me for future challenges in the tech industry.
              </p>


              <h3 className="text-2xl font-sans font-bold text-[#5ba4d8] mt-4">Junior Analyst</h3>
              <h4 className="text-xl font-sans font-bold text-[#5ba4d8]">Kaizen Tech Solutions</h4>
              <p className="text-lg font-sans text-[#5ba4d8]">
                <em>
                  March 2024 - July 2024
                </em>
              </p>
              <p className="text-slate-300 font-bold text-lg font-sans">
                Used python libraries to construct charts and graphs, some of the
                libraries I used were, Matplotlib, Seaborn, Plotly, ggplot and Pandas, to
                offer a range of functionalities that cater to different needs,
                from simple plots to interactive 
                visualizations for complex data-driven applications.
              </p>

            </div>
          </div>

          <div className="my-[4em] p-4 rounded-lg bg-slate-700/[0.2] transition-all ease-in-out duration-200 hover:bg-slate-800/[0.3] backdrop-blur-3xl">
            <h2 className="text-3xl font-bold font-sans text-sky-500 mb-4">Projects</h2>

            <div className="flex flex-col w-full h-full">
              <div className="flex flex-row"> 
                <button className=" flex flex-col p-4 transition-all ease-in-out duration-200 border-slate-900 w-[50%] hover:border hover:p-[0.94rem] rounded-lg">
                  <div className="bg-black w-full h-[160px] rounded-md"></div>
                  <h4 className="text-xl font-sans font-bold text-[#5ba4d8] mt-4">Redis Clone</h4>
                  <p className="text-slate-300 text-lg font-bold font-sans text-left">
                    A Redis clone built in C++, providing a high-performance, 
                    in-memory data structure store for caching and real-time 
                    applications with efficient data retrieval and storage capabilities.
                  </p>
                </button>

                <button className="flex flex-col p-4 transition-all ease-in-out duration-200 border-slate-900 w-[50%] hover:border hover:p-[0.94rem] rounded-lg">
                  <div className="bg-black w-full h-[160px] rounded-md"></div>
                  <h4 className="text-xl font-sans font-bold text-[#5ba4d8] mt-4">AI RAG Customer Support</h4>
                  <p className="text-slate-300 text-lg font-bold font-sans text-left">
                    Used python libraries to construct charts and graphs, some of the
                    libraries I used were, Matplotlib, Seaborn, Plotly, ggplot and Pandas.
                  </p>
                </button>
              </div>

              <div className="flex flex-row"> 
                <button className="flex flex-col p-4 transition-all ease-in-out duration-200 border-slate-900 w-[50%] hover:border hover:p-[0.94rem] rounded-lg">
                  <div className="bg-black w-full h-[160px] rounded-md"></div>
                  <h4 className="text-xl font-sans font-bold text-[#5ba4d8] mt-4">OpenAI Inventory System</h4>
                  <p className="text-slate-300 text-lg font-bold font-sans text-left">
                    Used python libraries to construct charts and graphs, some of the
                    libraries I used were, Matplotlib, Seaborn, Plotly, ggplot and Pandas, to
                    offer a range of functionalities that cater to different needs,
                    from simple plots to interactive.
                  </p>
                </button>
                <button className="flex flex-col p-4 transition-all ease-in-out duration-500 border-slate-900 w-[50%] hover:border hover:p-[0.94rem] rounded-lg">
                  <div className="bg-black w-full h-[160px] rounded-md"></div>
                  <h4 className="text-xl text-left font-sans font-bold text-[#5ba4d8] mt-4">Analytical Budgeting App</h4>
                  <p className="text-slate-300 text-lg font-bold font-sans text-left">
                    Used python libraries to construct charts and graphs, some of the
                    libraries I used were, Matplotlib, Seaborn, Plotly, ggplot and Pandas, to
                    offer a range of functionalities that cater to different needs.
                  </p>
                </button>
              </div>

              <button className="m-8 mx-auto w-[40%] text-lg h-10 hover:border border-slate-900 rounded-lg transition-all ease-in-out bg-slate-700/50 hover:bg-slate-700/70 text-slate-300 font-bold font-sans">View Full Portfolio</button>
            </div>

          </div>

          <div className="my-[4em] p-4 rounded-lg bg-slate-700/[0.2] transition-all ease-in-out duration-200 hover:bg-slate-800/[0.3] backdrop-blur-3xl">
            <h2 className="text-3xl font-bold font-sans text-sky-500 mb-4">Lets Work Together</h2>

            <p className="text-slate-300 text-lg font-bold font-sans text-left">
              Get in touch with me and lets build something great together, 
              I should respone within two working day at most, so feel free to reach out!
            </p>

            <div className="flex flex-row h-[5rem] w-[70%] ">
              <input placeholder="Name" className="my-4 p-3 rounded-l-lg w-full bg-slate-800/50 focus:outline-none"/>
              <input placeholder="Email" className="my-4  rounded-r-lg w-full bg-slate-800/50 focus:outline-none"/>
            </div>

            <div className="flex min-h-[10rem] w-[70%] ">
              <textarea placeholder="Message" className="w-full p-3 min-h-[10rem] rounded-lg bg-slate-800/50 focus:outline-none"></textarea>
            </div>

            <button onClick={()=>SetSent(!sent)} className="my-5 w-[30%] h-[3rem] hover:border-2 hover:bg-slate-700/20 border-slate-900 rounded-lg transition-all ease-in-out bg-slate-800/30 text-slate-300 font-bold font-sans">Send</button>
            {sent && <div className="p-4 rounded-lg text-center text-lg bg-green-500/10 text-green-500 border border-green-500">SENT!</div>}
          </div>


        </div>
      </div>
    
    </main>
  );
}

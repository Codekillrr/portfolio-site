import { AnimatePresence, motion } from "framer-motion";

const SpringModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence >
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 flex justify-center place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br to-violet-600 from-[#4e4fb1] text-slate-200 p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="relative z-10 pr-3 font-sans">
              <h3 className="text-3xl font-bold text-left mb-8">
                Please fill in the details:
              </h3>
              
              <div className="flex justify-start gap-2 p-2 mb-4">
                <input placeholder="First Name" className=" p-2 rounded-lg w-50 bg-slate-800/50 focus:outline-none"/>
                <input placeholder="Last Name" className=" p-2 rounded-lg w-60 bg-slate-800/50 focus:outline-none"/>
              </div>

              <input placeholder="Email" className="ml-2 mb-6 p-2 rounded-lg w-60 bg-slate-800/50 focus:outline-none"/> <br/>

              <input placeholder="Company Name" className="ml-2 mb-6 p-2 rounded-lg w-60 bg-slate-800/50 focus:outline-none"/>

              <input placeholder="Job Title" className="ml-2 mb-6 p-2 rounded-lg w-50 bg-slate-800/50 focus:outline-none"/> <br />

              <textarea placeholder="Job describtion and responsiblities" className="ml-2 mb-6 p-2 rounded-lg w-full min-h-[150px] resize: none bg-slate-800/50 focus:outline-none"/>



              <div className="flex gap-2 h-[3.5rem]">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent duration-200 hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded-lg"
                >
                  Nah, go back
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="transition-all ease-in-out duration-200 bg-white hover:opacity-90 hover:scale-110 text-indigo-600 font-semibold w-full py-2 rounded-lg"
                >
                  Hire!
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpringModal;
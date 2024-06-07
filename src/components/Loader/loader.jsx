// import {useEffect, useRef} from "react";
// import { gsap } from 'gsap';
// import { SplitText } from 'gsap/SplitText';
//
//
// gsap.registerPlugin(SplitText)
// const Loader = () => {
//     const textRef = useRef(null);
//
//     useEffect(() => {
//         const split = new SplitText(textRef.current, { type: 'chars, words' });
//         gsap.from(split.chars, {
//             y : '100%',
//             opacity: 0,
//             duration: 0.1,
//             ease: 'expo.inOut',
//             stagger: 0.25,
//         });
//
//         // Cleanup on component unmount
//         return () => {
//             split.revert();
//         };
//     }, []);
//
//
//
//
//     return (
//         <div className={'w-screen h-screen fixed top-0 left-0 right-0 bottom-0 bg-black z-[200]'}>
//             <div className={'container h-full flex flex-col items-center justify-center'}>
//                 <div className={'w-[150px] h-[80px] relative '}>
//                 </div>
//                 <h2 ref={textRef} className={'text-white text-4xl'}>abduganiev</h2>
//                 <p className={'text-white tracking-[8px] text-xs '}>technology</p>
//             </div>
//         </div>
//     );
// };
//
// export default Loader;
//

import React from "react";
import chairmain from "../components/Assets/chairmain.jpg";
import Header from "./Header";
import Footer from "./Footer";

export default function ChairmainMessgage() {
  return (
    <>
      <Header />
      <div className="bg-black flex flex-col items-center justify-around text-white mt-11 p-5">
        <div className="w-auto mb-5">
          <img src={chairmain} alt="chairman image" />
          <p className="text-center items-center m-2">Mr. Lavesh Goel</p>
          <p className="text-center items-center">Chairmain</p>
        </div>
        <div className="w-full p-10">
          <p>
            My mission in life is not merely to survive, but to thrive and to do
            so with some passion, some compassion, some humour and some style-
            was rightly said by Maya Angelou, which I believe in incorporating
            in my thoughts and actions. Accordsing to me, serving the most
            selfless human beings i.e. the uniformed men of our Country is the
            most successful and satisfying job a human being can conduct.
            Conducting the smallest of acts to bring about a change in their
            lives is the motto of Dheer Marketing India. Dheer Marketing India
            had initiated its operations in 2009 and eventually grew as a
            leading marketing firm for Non-CSD, INCS, Paramilitary
            forces,(B.S.F, C.R.P.F, etc.). We inculcate the culture of client
            satisfaction and relation building for all those associated with us.
            With our consistent hard work and driven nature to perform better we
            have had a tremendous growth in marketing accessories of reputable
            brands to the men of the armed forces of our country. Dheer
            Marketing India, looks forward to providing its services to the
            remotest of areas in the Country, thereby generating a source of
            change and comfort to the men serving the nation. By exceeding the
            expectations of its customers and clients Dheer Marketing India has
            come a long way in providing its service and assistance thereby
            generating a sense of better life care products. We look ahead to
            providing even better services and garnering comfort for
            amalgamating quality and essential of life in one responsible step.
          </p>
        </div>
        <Footer/>
      </div>
    
      
    </>
  );
}

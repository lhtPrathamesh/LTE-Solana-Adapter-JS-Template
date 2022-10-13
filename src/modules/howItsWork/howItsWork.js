import React from "react";

const HowItsWork = () => {
  return (
    <div className="`w-full flex lg:justify-center  bg-white-50 h-auto overflow-auto">
      <div className="w-full mb-14  flex-col px-5 md:px-11 lg:px-24.5 xl:px-45 2xl:px-65 3xl:px-90 flex  ">
        <div className="mt-33px mb-6">
          <h1 className="text-black-100 font-PoppinsMedium text-ft8">
            How It Works:
          </h1>
        </div>
        <div className="text-black-50 font-PoppinsRegular text-ft4 space-y-6 mb-49px">
          <p>
            With the RunCrypto Earn program, you get to learn how to use your
            favorite programs on Solana AND get paid for it.
          </p>

          <p>
            {" "}
            Our goal with the RunCrypto Earn program was to create the first
            ever on-chain education experience that serves two purposes. The
            first is that it educates the users of the Solana blockchain how to
            use the different programs in Solana, especially the more
            complicated ones. The second is that it gives projects a transparent
            way to acquire more users to their projects and platforms.
          </p>
          <p>
            {" "}
            To participate in the RunCrypto Earn program, we have a FREE level
            and more exclusive levels.
          </p>
        </div>
        <div className="space-y-2">
          <div className="flex flex-col   xs:flex-row bg-white-100 px-4 py-3 rounded-2xl">
            <img
              src="/images/step1.svg"
              alt=""
              className="pr-11 xs:ml-0 ml-12 xs:border-r  h-20 md:h-auto border-purple-150"
            />
            <div className="xs:pl-12 flex items-center xs:w-2/3   xs:items-start  flex-col mt-3 justify-center">
              <h1 className="text-black-100  font-PoppinsMedium text-ft8">
                Step 1
              </h1>
              <p className="text-black-50  ml-4 xs:ml-0 xs:w-auto w-3/4 font-PoppinsRegular text-ft4">
                The first step is to pick an Earn program that you want to
                participate in
              </p>
            </div>
          </div>
          <div className="xs:pl-12 flex justify-center items-center xs:items-start xs:justify-start">
            <img src="/images/arrow.svg" alt="" />
          </div>
          <div className="flex flex-col   xs:flex-row bg-white-100 px-4 py-3 rounded-2xl">
            <img
              src="/images/step2.svg"
              alt=""
              className="pr-11 xs:ml-0 ml-12 xs:border-r  h-20 md:h-auto border-purple-150"
            />
            <div className="xs:pl-12 flex items-center xs:w-2/3 xs:items-start  flex-col mt-3 justify-center">
              <h1 className="text-black-100 font-PoppinsMedium text-ft8">
                Step 2
              </h1>
              <p className="ext-black-50 ml-4 xs:ml-0 xs:w-auto w-3/4 font-PoppinsRegular text-ft4">
                Watch the video and read the instructions on how to perform the
                action or use the project for that specific Earn program{" "}
              </p>
            </div>
          </div>
          <div className="xs:pl-12 flex justify-center items-center xs:items-start xs:justify-start">
            <img src="/images/arrow.svg" alt="" />
          </div>
          <div className="flex flex-col   xs:flex-row bg-white-100 px-4 py-3 rounded-2xl">
            <img
              src="/images/step3.svg"
              alt=""
              className="pr-11 xs:ml-0 ml-12 xs:border-r  h-20 md:h-auto border-purple-150"
            />
            <div className="xs:pl-12 flex items-center xs:w-2/3  xs:items-start  flex-col mt-3 justify-center">
              <h1 className="text-black-100 font-PoppinsMedium text-ft8">
                Step 3
              </h1>
              <p className="ext-black-50 ml-4  xs:ml-0 xs:w-auto w-3/4 font-PoppinsRegular text-ft4">
                Connect your wallet and perform an on-chain action like a swap,
                staking or trading
              </p>
            </div>
          </div>
          <div className="xs:pl-12 flex justify-center items-center xs:items-start xs:justify-start">
            <img src="/images/arrow.svg" alt="" />
          </div>
          <div className="flex flex-col   xs:flex-row bg-white-100 px-4 py-3 rounded-2xl">
            <img
              src="/images/step4.svg"
              alt=""
              className="pr-11 xs:ml-0 ml-12 xs:border-r  h-20 md:h-auto border-purple-150"
            />
            <div className="xs:pl-12 flex items-center xs:w-2/3  xs:items-start  flex-col mt-3 justify-center">
              <h1 className="text-black-100 font-PoppinsMedium text-ft8">
                Step 4
              </h1>
              <p className="ext-black-50 ml-4 xs:ml-0 xs:w-auto w-3/4 font-PoppinsRegular text-ft4">
                Verify your action with the verify button
              </p>
            </div>
          </div>
          <div className="xs:pl-12 flex justify-center items-center xs:items-start xs:justify-start">
            <img src="/images/arrow.svg" alt="" />
          </div>
          <div className="flex flex-col   xs:flex-row bg-white-100 px-4 py-3 rounded-2xl">
            <img
              src="/images/step5.svg"
              alt=""
              className="pr-11 xs:ml-0 ml-12 xs:border-r  h-20 md:h-auto border-purple-150"
            />
            <div className="xs:pl-12 flex items-center xs:w-2/3   xs:items-start  flex-col mt-3 justify-center">
              <h1 className="text-black-100 font-PoppinsMedium text-ft8">
                Step 5
              </h1>
              <p className="ext-black-50 ml-4 xs:ml-0 xs:w-auto w-3/4 font-PoppinsRegular text-ft4">
                Once verified, click ‘claim’ to earn your tokens
              </p>
            </div>
          </div>

          <div>
            <p className="text-black-50 font-PoppinsRegular text-ft4 mt-68px">
              You can then choose a different Earn program and repeat steps 1
              through 5.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItsWork;

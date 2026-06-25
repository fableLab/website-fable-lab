import React from 'react'

const ZIGZAG_PATH =
  'M0 1.84998C10.6141 1.84998 10.6141 17.85 21.2281 17.85C31.8422 17.85 31.8422 1.84998 42.4119 1.84998C52.9815 1.84998 53.0259 17.85 63.64 17.85C74.2541 17.85 74.2541 1.84998 84.8682 1.84998C95.4822 1.84998 95.4822 17.85 106.096 17.85C116.71 17.85 116.666 1.84998 127.28 1.84998C137.894 1.84998 137.894 17.85 148.464 17.85C159.033 17.85 159.078 1.84998 169.692 1.84998C180.306 1.84998 180.306 17.85 190.876 17.85C201.445 17.85 201.445 1.84998 212.059 1.84998C222.673 1.84998 222.673 17.85 233.288 17.85C243.902 17.85 243.902 1.84998 254.516 1.84998C265.13 1.84998 265.13 17.85 275.699 17.85C286.269 17.85 286.313 1.84998 296.883 1.84998C307.453 1.84998 307.497 17.85 318.111 17.85C328.725 17.85 328.725 1.84998 339.339 1.84998C349.954 1.84998 349.954 17.85 360.568 17.85C371.182 17.85 371.182 1.84998 381.751 1.84998C392.321 1.84998 392.365 17.85 402.979 17.85C413.593 17.85 413.593 1.84998 424.208 1.84998C434.822 1.84998 434.822 17.85 445.436 17.85C456.05 17.85 456.05 1.84998 466.664 1.84998C477.278 1.84998 477.278 17.85 487.892 17.85C498.506 17.85 498.506 1.84998 509.12 1.84998C519.734 1.84998 519.734 17.85 530.348 17.85C540.962 17.85 540.962 1.84998 551.576 1.84998C562.19 1.84998 562.191 17.85 572.805 17.85C583.419 17.85 583.419 1.84998 594.033 1.84998C604.647 1.84998 604.647 17.85 615.261 17.85C625.875 17.85 625.875 1.84998 636.489 1.84998C647.103 1.84998 647.103 17.85 657.717 17.85C668.331 17.85 668.331 1.84998 678.945 1.84998C689.559 1.84998 689.559 17.85 700.173 17.85C710.788 17.85 710.788 1.84998 721.402 1.84998C732.016 1.84998 732.016 17.85 742.63 17.85C753.244 17.85 753.244 1.84998 763.858 1.84998C774.472 1.84998 774.472 17.85 785.086 17.85C795.7 17.85 795.7 1.84998 806.314 1.84998C816.928 1.84998 816.928 17.85 827.542 17.85C838.156 17.85 838.156 1.84998 848.77 1.84998C859.384 1.84998 859.384 17.85 869.999 17.85C880.613 17.85 880.613 1.84998 891.227 1.84998C901.841 1.84998 901.841 17.85 912.455 17.85C923.069 17.85 923.069 1.84998 933.727 1.84998C944.386 1.84998 944.342 17.85 955 17.85'

const ZigZag = ({ className = 'mb-14 mt-14' }: { className?: string }) => (
  <div className={className}>
    <div className="w-full">
      <svg className="stroke-azure-500" viewBox="0 0 937 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={ZIGZAG_PATH} strokeWidth={2} strokeMiterlimit={10} />
      </svg>
    </div>
  </div>
)

export default function LabsLangPartners({ startNumber }: { startNumber: number }) {
  const partnersNumber = `${startNumber}`
  const supportNumber = `${startNumber + 1}`

  return (
    <>
      <ZigZag />
      <div className="mb-4">
        <div className="flex items-center">
          <div className="flex-1">
            <div className="flex justify-start">
              <div className="w-full md:w-8/12">
                <h2
                  id="partenaires"
                  className="font-bold font-basis flex items-center gap-4"
                  data-summary-name="Partenaires du projet Labs&Lang"
                  data-summary-visible="true"
                  data-summary-number={partnersNumber}
                >
                  <span className="md:hidden print:!inline">{partnersNumber}.</span>
                  Partenaires du projet Labs&Lang
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-14">
        <div className="flex justify-e">
          <div className="w-full md:w-8/12">
            <div className="payload-richtext max-w-none mx-auto prose md:prose-md dark:prose-invert">
              <p>
                Le projet{" "}
                <em>
                  <strong>{'Labs&Lang'}</strong>
                </em>
                {" est organisé en collaboration avec l'association française "}
                <a href="https://www.fable-lab.org/">fable-Lab</a>
                {" et l'association belge "}
                <a href="https://performat.be/">Perspective</a>
                {" via le programme Erasmus+."}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <div>
              <div className="flex">
                <div className="w-full">
                  <a href="https://performat.be/">
                    <div className="flex justify-center">
                      <figure className="w-3/5 md:w-1/2 print:!w-4/5">
                        <img
                          alt="Logo Perspective"
                          className="w-full border-8 border-solid rounded-xl border-transparent max-w-lg"
                          src="/logo/logo_perspective.png"
                        />
                        <figcaption className="text-center" />
                      </figure>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div>
              <div className="flex">
                <div className="w-full">
                  <a href="https://www.fable-lab.org/">
                    <div className="flex justify-center">
                      <figure className="w-3/5">
                        <img
                          alt="Logo fable-Lab"
                          className="w-full border-8 border-solid rounded-xl border-transparent max-w-xl"
                          src="/logo/logo_blue.png"
                        />
                        <figcaption className="text-center" />
                      </figure>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ZigZag />
      <div className="mb-4">
        <div className="flex items-center">
          <div className="flex-1">
            <div className="flex justify-start">
              <div className="w-full md:w-8/12">
                <h2
                  id="soutiens"
                  className="font-bold font-basis flex items-center gap-4"
                  data-summary-name="Les soutiens du projet"
                  data-summary-visible="true"
                  data-summary-number={supportNumber}
                >
                  <span className="md:hidden print:!inline">{supportNumber}.</span>
                  Les soutiens du projet
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-14">
        <div className="flex justify-start">
          <div className="w-full md:w-8/12">
            <div className="payload-richtext max-w-none mx-auto prose md:prose-md dark:prose-invert">
              <p>
                Le projet
                <em>
                  <strong>{' Labs&Lang'}</strong>
                </em>
                {" est cofinancé par l'Union européenne via le programme Erasmus+"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-14">
        <div className="flex flex-col md:flex-row gap-8 md:gap-4">
          <div className="flex-1">
            <div>
              <div className="flex">
                <div className="w-full">
                  <a href="https://agence.erasmusplus.fr/">
                    <div className="flex justify-center">
                      <figure className="w-3/5">
                        <img
                          alt=""
                          className="w-full border-8 border-solid rounded-xl border-transparent"
                          src="https://www.fable-lab.org/api/media/file/Logo_Erasmus%2B.png"
                        />
                        <figcaption className="text-center" />
                      </figure>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div>
              <div className="flex">
                <div className="w-full">
                  <div className="flex justify-center">
                    <figure className="w-4/5">
                      <img
                        alt=""
                        className="w-full border-8 border-solid rounded-xl border-transparent"
                        src="https://www.fable-lab.org/api/media/file/Logo_UE.png"
                      />
                      <figcaption className="text-center" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ZigZag className="mb-14" />
    </>
  )
}

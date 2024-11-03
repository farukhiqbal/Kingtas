import React from "react";
import anesthesia from '../../assets/images/anesthesia-technology.webp'
import { Link } from "react-router-dom";

const Anesthesia_Technology = () => {
  return (
    <div className="mt-[3rem]">
      <div className="  grid    xl:w-[78%]  mx-auto      grid-cols-1    my-[2rem]    lg:grid-cols-2    xl:grid-cols-3    ">
        <div className="col-span-2       px-[2.5rem]">
          <h3 className="font-bold sm:text-center md:text-left lg:left  ">
            <Link
              to=""
              target="_blank"
              className="text-black no-underline text-2xl line-clamp-[5rem]"
            >
              Scope of Anesthesia Technology
            </Link>
          </h3>

          <p className="mt-2 pt-2    text-xl  justify-normal   leading-[3rem]      ">
            This course is designed to train students in the foundational
            principles and practical skills of anesthesia technology. It
            prepares them to assist anesthesiologists and provide essential
            support in surgical and medical settings, focusing on patient
            safety, anesthesia administration, and monitoring.
          </p>
        </div>

        <div className="    right   ">
          <img
            src={anesthesia}
            alt="anesthesia technology image "
            className="h-[300px]  w-[350px]       ml-[3.7rem]  "
          />
        </div>
      </div>

      <div class="w-full  mx-auto   sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 p-4 md:text-[1rem] lg:text-[1.1rem] xl:text-[1.2rem] md:mx-auto">
        <h3 className="bold ">Eligibility Criteria </h3>

        <ol class="list-disc pl-4 text-[#00000078]">
          <li>
            Applicant must meet one of the following academic levels:
            <li>
              FSc (Pre-Medical) with 45% marks minimum (Physics, Chemistry &
              Biology as compulsory subjects)
            </li>
            <li>
              Matric (Science) with 45% marks minimum (Physics, Chemistry &
              Biology as compulsory subjects)
            </li>
          </li>
          <li>Age Limit: 14-30 years</li>
          <li>Nationality: Pakistani</li>
        </ol>
      </div>

      <div class="text-sm font-bold px-4 mx-auto sm:w-full sm:mx-0 md:w-3/4 lg:w-3/4 md:mx-auto my-5">
        <h2 class="text-left text-[1.2rem]  md:text-xl lg:text-xl">
          <strong>
            Documents Required:-(All docs should be attested by a grade 17
            officer)
          </strong>
        </h2>
      </div>

      <div className="sm:w-full xm:overflow-x-scroll md:w-3/4 lg:w-3/4 md:mx-auto">
        <table className="w-full  sm:w-full  mb-[2.5rem] lg:w-3/2 border-collapse border">
          <thead>
            <tr className="border">
              <th className="text-left px-4 py-2 border">No.</th>
              <th className="text-left px-4 py-2 border">Document</th>
              <th className="text-left px-4 py-2 border">Requirement</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border bg-gray-100">
              <td className="text-left px-4 py-2 border">1</td>
              <td className="text-left px-4 py-2 border">Matric Mark Sheet</td>
              <td className="text-left px-4 py-2 border">
                One copy with attestation
              </td>
            </tr>
            <tr className="border">
              <td className="text-left px-4 py-2 border">2</td>
              <td className="text-left px-4 py-2 border">Matric Certificate</td>
              <td className="text-left px-4 py-2 border">
                One copy with attestation
              </td>
            </tr>
            <tr className="border bg-gray-100">
              <td className="text-left px-4 py-2 border">3</td>
              <td className="text-left px-4 py-2 border">FSc Mark Sheet</td>
              <td className="text-left px-4 py-2 border">
                One copy with attestation
              </td>
            </tr>
            <tr className="border">
              <td className="text-left px-4 py-2 border">4</td>
              <td className="text-left px-4 py-2 border">FSc Certificate</td>
              <td className="text-left px-4 py-2 border">
                One copy with attestation
              </td>
            </tr>
            <tr className="border bg-gray-100">
              <td className="text-left px-4 py-2 border">5</td>
              <td className="text-left px-4 py-2 border">C.N.I.C/Form B</td>
              <td className="text-left px-4 py-2 border">
                One copy with attestation
              </td>
            </tr>
            <tr className="border">
              <td className="text-left px-4 py-2 border">6</td>
              <td className="text-left px-4 py-2 border">Domicile</td>
              <td className="text-left px-4 py-2 border">
                One copy with attestation
              </td>
            </tr>
            <tr className="border bg-gray-100">
              <td className="text-left px-4 py-2 border">7</td>
              <td className="text-left px-4 py-2 border">Photographs</td>
              <td className="text-left px-4 py-2 border">
                Passport size three photographs
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Anesthesia_Technology;

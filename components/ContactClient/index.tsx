"use client";
import React from "react";
import { Dropdown } from "react-dropdown-now";
import { FaPaperclip } from "react-icons/fa";
import "react-dropdown-now/style.css";
import * as yup from "yup";
import contactImg from "@/assets/images/contact1.jpg";
import { useForm, Controller } from "react-hook-form";
// -----------
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import FlagComponent from "../flagWrapper";
type formType = {
  file?: any;
};
function bytesToSize(bytes: any, decimals = 2) {
  if (!Number(bytes)) {
    return "0 Bytes";
  }

  const kbToBytes = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = [
    "Bytes",
    "KiB",
    "MiB",
    "GiB",
    "TiB",
    "PiB",
    "EiB",
    "ZiB",
    "YiB",
  ];

  const index = Math.floor(Math.log(bytes) / Math.log(kbToBytes));

  return `${parseFloat((bytes / Math.pow(kbToBytes, index)).toFixed(dm))} ${
    sizes[index]
  }`;
}

const SUPPORTED_FORMATS = [
  // Images
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/bmp",

  // PDF
  "application/pdf",

  // Documents
  "application/msword", // .doc
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
  "application/vnd.ms-excel", // .xls
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
  "application/vnd.ms-powerpoint", // .ppt
  "application/vnd.openxmlformats-officedocument.presentationml.presentation", // .pptx
];
export const validateImageType = (value: any) => {
  if (value) {
    let type = value.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)[0];
    return SUPPORTED_FORMATS.includes(type);
  }
};

const Contact = ({ dictionary }: { dictionary: any }) => {
  const [formData, setFormData] = useState<formType>({});
  const [disabled, setDisable] = useState(false);
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email(dictionary["validation"].email)
      .required(dictionary["validation"].required),
    name: yup.string().required(dictionary["validation"].required),
    subject: yup.string().required(dictionary["validation"].required),
    message: yup.string().required(dictionary["validation"].required),
    budgetInfo: yup.object().shape({
      label: yup.string().required(dictionary["validation"].required),
      value: yup.string().required(dictionary["validation"].required),
    }),
    projectPlan: yup.object().shape({
      label: yup.string().required(dictionary["validation"].required),
      value: yup.string().required(dictionary["validation"].required),
    }),
    launchDate: yup.object().shape({
      label: yup.string().required(dictionary["validation"].required),
      value: yup.string().required(dictionary["validation"].required),
    }),
    file: yup
      .mixed()
      .nullable()
      .test("fileType", dictionary["validation"].invalidFile, (file: any) => {
        if (formData?.file?.length === 0) return true;
        if (
          formData?.file?.type &&
          !SUPPORTED_FORMATS.includes(formData?.file?.type)
        ) {
          return false;
        }
        return true;
      })
      .test("fileSize", dictionary["validation"].uploadSize, (file: any) => {
        if (!file) return true;

        if (file?.length === 0) {
          return true;
        }
        return file?.length > 0 && file?.size <= 20971520;
      }),
  });

  const {
    register,
    getValues,
    handleSubmit,
    control,
    clearErrors,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(validationSchema) });

  /**
   * Submitting message when user clock send button.
   *
   * The user will add his formspree end point here.
   *
   * @param e form submit event
   */
  const handleForm = async (e: any) => {
    setDisable(true);
    let form = new FormData();
    for (const key in e) {
      if (key !== "file") {
        if (typeof e[key] === "object") {
          form.append(key, JSON.stringify(e[key]));
        } else {
          form.append(key, e[key]);
        }
      }
    }

    if (formData?.file) {
      form.append("file", formData?.file);
    }

    await fetch("/api/sheets", {
      method: "POST",
      body: form,
    });
    window.location.reload();
  };
  console.log({ dictionary: dictionary["shared"] });
  return (
    <main className="page-background">
      <div id="content" className="site-content">
        <div className="content-holder center-relative content-1170">
          <h1 className="entry-title page-title center-text">
            {dictionary["shared"].contact_message}
          </h1>

          <img className="page-featured-image" src={contactImg.src} alt="" />

          <div className="one_half">
            <p>{dictionary["shared"].Contact_text1}</p>
            <br />
            <p>{dictionary["shared"].Contact_text2}</p>
            <br />
            <p className="my-info">
              <span>{dictionary["shared"].Address}:</span>
              {dictionary["shared"].address}
              <br /> <span>{dictionary["shared"].Hours}</span> 6:00 am – 2:00 am
              <br />
              <span>{dictionary["shared"].EMAIL}: </span>{" "}
              {dictionary["shared"].aplashEmail}
              <br />
              <span>{dictionary["shared"].Language}</span>
              <div>
                <div className="flag-wrapper">
                  <FlagComponent pageName="contact" />
                </div>
              </div>
            </p>
            <br />
          </div>

          <div className="one_half last">
            {!disabled ? (
              <form
                className="contact-form"
                onSubmit={handleSubmit(handleForm)}
              >
                <p>
                  <Controller
                    name={"projectPlan"} // for the gender field
                    control={control} // obtained from the useForm hook
                    render={({ field }) => {
                      return (
                        <Dropdown
                          placeholder={dictionary["contact"].choose_option}
                          options={[
                            {
                              label: `${dictionary["contact"].projectPlan_yes}`,
                              value: `${dictionary["contact"].projectPlan_yes}`,
                            },
                            {
                              label: `${dictionary["contact"].projectPlan_no}`,
                              value: `${dictionary["contact"].projectPlan_no}`,
                            },
                            {
                              label: `${dictionary["contact"].projectPlan_you}`,
                              value: `${dictionary["contact"].projectPlan_you}`,
                            },
                            {
                              label: `${dictionary["contact"].not_sure}`,
                              value: `${dictionary["contact"].not_sure}`,
                            },
                          ]}
                          {...field}
                          baseClassName="base-select-contact"
                          className="select-contact"
                        />
                      );
                    }}
                  />

                  <div className="text-danger">
                    {" "}
                    {errors?.projectPlan?.label?.message?.toString()}
                  </div>
                </p>
                <p>
                  <Controller
                    name={"launchDate"} // for the gender field
                    control={control} // obtained from the useForm hook
                    render={({ field }) => {
                      return (
                        <Dropdown
                          placeholder={dictionary["contact"].launch_date}
                          options={[
                            {
                              label: `${dictionary["contact"].after} 3 ${dictionary["contact"].months}`,
                              value: `${dictionary["contact"].after} 3 ${dictionary["contact"].months}`,
                            },

                            {
                              label: `${dictionary["contact"].after} 6 ${dictionary["contact"].months}`,
                              value: `${dictionary["contact"].after} 6 ${dictionary["contact"].months}`,
                            },

                            {
                              label: `${dictionary["contact"].after} 9 ${dictionary["contact"].months}`,
                              value: `${dictionary["contact"].after} 9 ${dictionary["contact"].months}`,
                            },

                            {
                              label: `${dictionary["contact"].not_sure}`,
                              value: `${dictionary["contact"].not_sure}`,
                            },
                          ]}
                          {...field}
                          baseClassName="base-select-contact"
                          className="select-contact"
                        />
                      );
                    }}
                  />

                  <div className="text-danger">
                    {errors?.launchDate?.label?.message?.toString()}
                  </div>
                </p>

                <div>
                  <Controller
                    name={"budgetInfo"} // for the gender field
                    control={control} // obtained from the useForm hook
                    render={({ field }) => {
                      return (
                        <Dropdown
                          placeholder={dictionary["contact"].budget}
                          noOptionsDisplay={dictionary["contact"].budget}
                          options={[
                            {
                              label: `${dictionary["contact"].under} 1000`,
                              value: `${dictionary["contact"].under} 1000`,
                            },
                            {
                              label: `1,000 - 5,000 USD`,
                              value: `1,000 - 5,000 USD`,
                            },
                            {
                              label: `5,000 - 10,000 USD`,
                              value: `5,000 - 10,000 USD`,
                            },

                            {
                              label: `${dictionary["contact"].not_sure}`,
                              value: `${dictionary["contact"].not_sure}`,
                            },
                          ]}
                          {...field}
                          baseClassName="base-select-contact"
                          className="select-contact"
                        />
                      );
                    }}
                  />

                  <div className="text-danger">
                    {errors?.budgetInfo?.label?.message?.toString()}
                  </div>
                </div>

                <p>
                  <input
                    disabled={disabled}
                    id="name"
                    type="text"
                    placeholder={dictionary["placeHolders"].name}
                    {...register("name")}
                  />

                  <div className="text-danger">
                    {errors?.name?.message?.toString()}
                  </div>
                </p>

                <p>
                  <input
                    disabled={disabled}
                    {...register("email")}
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder={dictionary["placeHolders"].email}
                  />

                  <div className="text-danger">
                    {errors?.email?.message?.toString()}
                  </div>
                </p>

                <div>
                  <input
                    disabled={disabled}
                    id="subject"
                    type="text"
                    {...register("subject")}
                    placeholder={dictionary["placeHolders"].pTitle}
                  />

                  <div className="text-danger">
                    {errors?.subject?.message?.toString()}
                  </div>
                </div>
                <div>
                  <textarea
                    disabled={disabled}
                    id="message"
                    placeholder={dictionary["placeHolders"].pDes}
                    {...register("message")}
                  ></textarea>

                  <div className="text-danger">
                    {errors?.message?.message?.toString()}
                  </div>
                </div>
                <div>
                  <label htmlFor="upload" className="file-upload-label">
                    <FaPaperclip size={60} />
                    <input
                      disabled={disabled}
                      type="file"
                      id="upload"
                      multiple={false}
                      style={{ display: "none" }}
                      {...register("file")}
                      onChange={(e: any) => {
                        setFormData({ ...formData, file: e.target.files[0] });
                        clearErrors("file");
                      }}
                    />
                  </label>
                  {formData?.file && (
                    <ul className="file-list">
                      <li className="file-list-item">
                        <strong>{formData?.file?.name}</strong> -{" "}
                        {bytesToSize(formData?.file?.size)}.{" "}
                        <button
                          className="file-upload-remove text-danger"
                          onClick={() => {
                            reset({ ...getValues(), file: null });
                            setFormData({});
                          }}
                        >
                          {dictionary["messages"].remove}
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
                <div className="text-danger">
                  {errors?.file?.message?.toString()}
                </div>
                <p className="contact-submit-holder">
                  <input
                    disabled={disabled}
                    type="submit"
                    value={dictionary["messages"].send}
                  />
                </p>
              </form>
            ) : (
              <div className="loader-holder">
                <div className="loader-box">
                  <div className="loader"></div>
                </div>
              </div>
            )}
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </main>
  );
};

export default Contact;

import React, { useState } from "react";
import HrLine from "./HrLine";
import { TiArrowBack } from "react-icons/ti";
import { ImPhone } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { companyDetails } from "../data/constant";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [spinner, setSpinner] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (values) => {
    setSpinner(true);

    var emailBody = "Name: " + values.fullName + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone: " + values.phone + "\n\n";
    emailBody += "Service: " + values.service + "\n\n";
    emailBody += "Message:\n" + values.message;

    var payload = {
      to: companyDetails.email,
      name: "Skylytics",
      subject: "Lead form details",
      body: emailBody,
    };

    await fetch(
      "https://send-mail-redirect-boostmysites.vercel.app/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("Email sent successfully");
          reset();
          navigate("/thank-you");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };

  return (
    <div id="contact" className="wrapper pt-[5rem]">
      <div className="grid md:grid-cols-[55%_auto] gap-7">
        <div data-aos="fade-up">
          <div className="space-y-4 text-start">
            <p className="uppercase text-primary">request a quote</p>
            <h3 className="section-heading">
              Need A Free Quote? Please Feel Free to Contact Us
            </h3>
            <HrLine />
          </div>
          <div className="mt-5 grid sm:grid-cols-2 gap-3 sm:gap-5">
            <div className="">
              <TiArrowBack size={25} className="inline -mt-2 text-primary" />
              <span className="font-bold ml-2">Reply within 24 hours</span>
            </div>
            <div className="">
              <ImPhone size={20} className="inline -mt-2 text-primary" />
              <span className="font-bold ml-2">24 hrs telephone support</span>
            </div>
          </div>
          <p className="mt-5">
            I'd be happy to provide you with a free quote! However, I would need
            more information about what you need a quote for. Please provide
            details about the product or service you're interested in, any
            specific requirements, and any other relevant information, so I can
            assist you in generating an accurate quote.
          </p>
          <div className="mt-7 flex gap-3 sm:justify-center sm:w-fit w-full">
            <div className="bg-primary h-full aspect-square flex justify-center items-center p-3">
              <ImPhone size={25} className="text-white" />
            </div>
            <div className="flex flex-col capitalize">
              <p className="">Call to ask any question</p>
              <Link
                to={`tel:${companyDetails.phone}`}
                className="font-semibold"
              >
                {companyDetails.phone}
              </Link>
            </div>
          </div>
        </div>
        <form
          data-aos="fade-up"
          className="bg-primary p-7 space-y-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <input
              type="text"
              className="w-full p-2 bg-primary-5 outline-none"
              placeholder="Full Name*"
              {...register("fullName", { required: "Full Name is required" })}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName.message}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              className="w-full p-2 bg-primary-5 outline-none"
              placeholder="Email*"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <input
              type="tel"
              className="w-full p-2 bg-primary-5 outline-none"
              placeholder="Phone Number*"
              {...register("phone", {
                required: "Phone number is required",
                minLength: {
                  value: 10,
                  message: "Enter a valid phone number",
                },
              })}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
          <div>
            <select
              className="w-full p-2 bg-primary-5 outline-none"
              {...register("service", { required: "Please select a service" })}
            >
              <option value="">Select a Service*</option>
              <option>Custom Software Development</option>
              <option>Full-Stack Web Development</option>
              <option>Mobile App Development</option>
              <option>AI Solutions & Machine Learning</option>
              <option>Robotic Process Automation (RPA)</option>
              <option>Chatbot Development</option>
              <option>Blockchain Development</option>
              <option>Data Analytics & Business Intelligence</option>
              <option>Cloud Computing Services</option>
            </select>
            {errors.service && (
              <p className="text-red-500 text-sm">{errors.service.message}</p>
            )}
          </div>
          <div>
            <textarea
              rows="5"
              className="w-full p-2 bg-primary-5 outline-none"
              placeholder="Message*"
              {...register("message", { required: "Message cannot be empty" })}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>
          <button
            disabled={spinner}
            type="submit"
            className="secondary-btn w-full"
          >
            Request A Quote
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

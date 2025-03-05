import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { companyDetails } from "../data/constant";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ContactForm2 = () => {
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
    <form
      data-aos="fade-up"
      className="grid grid-cols-1 gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid lg:grid-cols-2 gap-5">
        <div>
          <input
            type="text"
            placeholder="Full Name"
            {...register("fullName", { required: "Full Name is required" })}
            className="p-2 outline-none bg-primary/10 rounded w-full"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}
        </div>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email address",
              },
            })}
            className="p-2 outline-none bg-primary/10 rounded w-full"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div>
        <input
          type="tel"
          placeholder="Phone Number"
          {...register("phone", {
            required: "Phone number is required",
            minLength: {
              value: 10,
              message: "Phone number must be at least 10 digits",
            },
          })}
          className="p-2 outline-none bg-primary/10 rounded w-full"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>
      <div>
        <select
          {...register("service", { required: "Please select a service" })}
          className="p-2 outline-none bg-primary/10 rounded w-full"
        >
          <option value="">Select a Service</option>
          <option value="Custom Software Development">
            Custom Software Development
          </option>
          <option value="Full-Stack Web Development">
            Full-Stack Web Development
          </option>
          <option value="Mobile App Development">Mobile App Development</option>
          <option value="AI Solutions & Machine Learning">
            AI Solutions & Machine Learning
          </option>
          <option value="Robotic Process Automation (RPA)">
            Robotic Process Automation (RPA)
          </option>
          <option value="Chatbot Development">Chatbot Development</option>
          <option value="Blockchain Development">Blockchain Development</option>
          <option value="Data Analytics & Business Intelligence">
            Data Analytics & Business Intelligence
          </option>
          <option value="Cloud Computing Services">
            Cloud Computing Services
          </option>
        </select>
        {errors.service && (
          <p className="text-red-500 text-sm">{errors.service.message}</p>
        )}
      </div>
      <div>
        <textarea
          rows="5"
          placeholder="Message"
          {...register("message", { required: "Message cannot be empty" })}
          className="p-2 outline-none bg-primary/10 rounded w-full"
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>
      <button disabled={spinner} type="submit" className="primary-btn">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm2;

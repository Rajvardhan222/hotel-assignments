import React, { useEffect, useState } from "react";
import InputText from "./Input";
import Button from "./Button";
import { set, useForm } from "react-hook-form";
import { getHotelId, saveGuest } from "../axios/guest/guest.api";
import { useNavigate, useParams } from "react-router-dom";
import { updateGuest } from "../axios/guestAdmin/guestAdmin.api";
function GuestCheckInForm({ name, edit = false, data, hotelid }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: edit ? data.name : "",
      email: edit ? data.email : "",
      phone: edit ? data.phone : "",
      id: edit ? data.id : "",
      address: edit ? data.address : "",
      checkIn: edit ? new Date(data.checkIn).toISOString().split("T")[0] : "",
      checkOut: edit ? new Date(data.checkOut).toISOString().split("T")[0] : "",
      purpose: edit ? data.purpose : "",
    },
  });
  

  let [error, setError] = useState(null);
  let [loading, setLoading] = useState(false);
  let { name: hotelname } = useParams();

  let [hotelId, setHotelId] = useState(null);

  useEffect(() => {
    if (!edit) {
      getHotelId(hotelname)
        .then((response) => {
          console.log(response);
          setHotelId(response.data.data.id);
        })
        .catch((error) => {
          console.log("Error getting hotel id: ", error.message);
          setError(error.message);
        });
    }
  }, []);

  let navigate = useNavigate();

  async function addGuestToDB(formData) {
    setError(null);
    setLoading(true);
    console.log(data);
    let requestPayload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      idProff: formData.id,
      address: formData.address,
      from: formData.checkIn,
      to: formData.checkOut,
      purposeOfVisit: formData.purpose,
      hotel_id: edit ? hotelid : hotelId,
    };
    if (requestPayload.checkIn > requestPayload.checkOut) {
      setError("Check-in date should be before Check-out date");
    }
    console.log(requestPayload);

    if (!edit) {
      try {
        saveGuest(requestPayload).then((response) => {
          if (response.status === 200) {
            console.log(response);
            console.log("Guest added successfully");
            navigate("/thankyou");
          } else {
            console.log("Error adding guest: ", response.data.message);
            setError(response.data.message);
          }
        });
      } catch (error) {
        console.log("Error adding guest: ", error.message);
        setError(error.message);
      }
    } else {
      try {
        updateGuest(requestPayload,data.guestid).then((response) => {
          if (response.status === 200) {
            console.log(response);
            console.log("Guest updated successfully");
            navigate("/guestAdmin/list");
          } else {
            console.log("Error updating guest: ", response.data.message);
            setError(response.data.message);
          }
        });
      } catch (error) {
        console.log("Error updating guest: ", error.message);
        setError(error.message);
      }
    }
    setLoading(false);
  }
  return (
    <>
      <div className="shadow-md bg-gradient-to-br from-quaternary to-tertiary p-4 rounded-md">
        <div className="text-center p-5">
          <h4>{name}</h4>
          {error && (
            <div className="bg-red-500 text-white p-2 text-center">{error}</div>
          )}
        </div>
        <div className="px-7 w-full lg:px-28 md:px-16">
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-3"
            onSubmit={handleSubmit(addGuestToDB)}
          >
            <div className="flex flex-col">
              <InputText
                placeholder="Name"
                className="col-span-1 md:col-span-2"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name should be at least 3 characters",
                  },
                })}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <InputText
                placeholder="Email"
                className="col-span-1"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <InputText
                placeholder="Phone Number"
                className="col-span-1"
                {...register("phone", {
                  required: "Phone Number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid Phone Number",
                  },
                })}
              />
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <InputText
                placeholder="ID Number"
                className="col-span-1 md:col-span-2"
                {...register("id", {
                  required: "ID Number is required",
                })}
                {...(edit && { disabled: true })}
              />
              {errors.id && <p className="text-red-500">{errors.id.message}</p>}
            </div>
            <div className="flex flex-col">
              <InputText
                placeholder="Address"
                className="col-span-1 md:col-span-2"
                {...register("address", {
                  required: "Address is required",
                  minLength: {
                    value: 3,
                    message: "Address should be at least 3 characters",
                  },
                })}
              />
              {errors.address && (
                <p className="text-red-500">{errors.address.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <InputText
                placeholder="Check-in Date"
                type="date"
                className="col-span-1"
                {...register("checkIn", {
                  required: "Check-in Date is required",
                })}
                {...(edit && { disabled: true })}
              />
              {errors.checkIn && (
                <p className="text-red-500">{errors.checkIn.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <InputText
                placeholder="Check-out Date"
                type="date"
                className="col-span-1"
                {...register("checkOut", {
                  required: "Check-out Date is required",
                })}
              />
              {errors.checkOut && (
                <p className="text-red-500">{errors.checkOut.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <InputText
                type={"option"}
                options={["Business", "Tourist", "Others"]}
                className="col-span-1 md:col-span-2"
                {...register("purpose", { required: "Purpose is required" })}
              />
              {errors.purpose && (
                <p className="text-red-500">{errors.purpose.message}</p>
              )}
            </div>
            <div className="m-auto md:col-span-2">
              <Button>{edit ? "Update" : "Save"}</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default GuestCheckInForm;

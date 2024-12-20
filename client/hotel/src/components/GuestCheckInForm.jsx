import React from "react";
import InputText from "./Input";
import Button from "./Button";
import { useForm } from "react-hook-form";
function GuestCheckInForm({ name ,edit=false, data }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(
{
    defaultValues: {
        name: edit ? data.name : "",
        email: edit ? data.email : "",
        phone: edit ? data.phone : "",
        id: edit ? data.id : "",
        address: edit ? data.address : "",
        checkIn: edit ? data.checkIn : "",
        checkOut: edit ? data.checkOut : "",
        purpose: edit ? data.purpose : "",
    }
}
  );


  async function addGuestToDB(data) {
    console.log(data);
  }
  return (

    <>
      <div className="shadow-md bg-gradient-to-br from-quaternary to-tertiary p-4 rounded-md">
        <div className="text-center p-5">
          <h4>{name}</h4>
          {errors && <p className="text-red-500">{errors.message}</p>}
        </div>
        <div className="px-7 w-full lg:px-28 md:px-16">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-3" onSubmit={handleSubmit(addGuestToDB)}>
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
            <InputText
              placeholder="ID Number"
              className="col-span-1 md:col-span-2"
              {...register("id", {
                required: "ID Number is required",
               
              })}
              {...edit && {disabled: true}}
            />
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
            <InputText
              placeholder="Check-in Date"
              type="date"
              className="col-span-1"
              {...register("checkIn", {
                required: "Check-in Date is required",
              })}
              {...edit && {disabled: true}}
            />
            <InputText
              placeholder="Check-out Date"
              type="date"
              className="col-span-1"
              {...register("checkOut", {
                required: "Check-out Date is required",
              })}
            />
            <InputText
              type={"option"}
              options={["Business", "Tourist", "Others"]}
              className="col-span-1 md:col-span-2"
              {...register("purpose", { required: "Purpose is required" })}
            />
            <div className="m-auto md:col-span-2">
              <Button>Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default GuestCheckInForm;

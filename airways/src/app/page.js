"use client";

import { useState } from "react";
import Flight from "../../data/flight.json";
import { useForm } from "react-hook-form";
export default function Home() {
  const [jobs]=useState(Flight.flightOffer)

  const [filter, setFilter] = useState(jobs);
  const [filterTrue, setFilterTrue] = useState();
  const [search, setSearch] = useState();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const updateList=jobs?.filter((x)=>x.itineraries[0].segments[0].departure.iataCode===data.source && x.itineraries[0].segments[1].departure.iataCode=== data.destination)
      setFilter(updateList)
      // setFilterTrue(true)

  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="flex gap-4 my-3">
        <button className="btn btn-outline">One Way</button>
        <button className="btn btn-outline btn-primary">Round Trip</button>
        <button className="btn btn-outline btn-secondary">Multi City</button>
      </div>
      <div className="container mx-auto w-full md:w-1/3 text-center flex flex-col gap-4 p-8 bg-black rounded-lg shadow-lg my-4">
       
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="block md:flex  items-center justify-center">
            <div className="flex items-center mb-4 md:mb-0">
              <select
                className="py-1 px-2 focus:outline-none  rounded-sm  mr-4  text-black"
                name=""
                id=""
                {...register("source")}
              >
                <option value="LHR">LHR</option>
                <option value="DAC">DAC</option>
                <option value="IST">IST</option>
                <option value="FSO">FSO</option>
                <option value="DXB">DXB</option>
                <option value="KWI">KWI</option>
                <option value="AUH">AUH</option>
                <option value="KUL">KUL</option>
                <option value="DOH">DOH</option>
                <option value="BCN">BCN</option>
                <option value="ATH">ATH</option>
                <option value="BAH">BAH</option>
                <option value="FRA">FRA</option>
                <option value="VCE">VCE</option>
              </select>
            </div>
            <div className="flex items-center">
              <select
                name=""
                id=""
                className="py-1 px-2 rounded-sm w-36 mr-4 focus:outline-dotted text-black"
                {...register("destination")}
              >
                <option value="LHR">LHR</option>
                <option value="DAC">DAC</option>
                <option value="IST">IST</option>
                <option value="FSO">FSO</option>
                <option value="DXB">DXB</option>
                <option value="KWI">KWI</option>
                <option value="AUH">AUH</option>
                <option value="KUL">KUL</option>
                <option value="DOH">DOH</option>
                <option value="BCN">BCN</option>
                <option value="ATH">ATH</option>
                <option value="BAH">BAH</option>
                <option value="FRA">FRA</option>
                <option value="VCE">VCE</option>
              </select>
            </div>
            <input
              type="submit"
              className="border py-1 px-2 cursor-pointer text-white "
            />
          </div>
        </form>
      </div>
      <div className="overflow-x-auto bg-slate-300">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>FLIGHT</th>
              <th>AIRCRAFT</th>
              <th>CLASS</th>
              <th>FARE</th>
              <th>ROUTE</th>
              <th>DEPARTURE</th>
              <th>ARRIVAL</th>
              <th>DURATION</th>
              <th>PRICE</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {filter.map((flight, index) => (
              <tr key={index}>
                <td>
                  {`${flight.itineraries[0].segments[0].carrierCode} ${flight.itineraries[0].segments[0].aircraft}`}{" "}
                  <br />{" "}
                  {`${flight.itineraries[0].segments[1].carrierCode} ${flight.itineraries[0].segments[1].aircraft}`}{" "}
                </td>

                <td>
                  {flight.itineraries[0].segments[0].flightNumber} <br />
                  {flight.itineraries[0].segments[1].flightNumber}
                </td>
                <td>
                  {flight.class[0][0]} <br />
                  {flight.class[0][1]}
                </td>
                <td>
                  {flight.fareBasis[0][0]} <br />
                  {flight.fareBasis[0][1]}
                </td>
                <td>
                  {`${flight.itineraries[0].segments[0].departure.iataCode} - ${flight.itineraries[0].segments[1].departure.iataCode}`}{" "}
                  <br />
                  {`${flight.itineraries[0].segments[0].arrival.iataCode} - ${flight.itineraries[0].segments[1].arrival.iataCode}`}
                </td>
                <td>
                  {" "}
                  {flight.itineraries[0].segments[0].departure.at} <br />
                  {flight.itineraries[0].segments[1].departure.at}
                </td>
                <td>
                  {flight.itineraries[0].segments[0].arrival.at} <br />
                  {flight.itineraries[0].segments[1].arrival.at}
                </td>
                <td>{flight.itineraries[0].duration}</td>
                <td>
                  {flight.price} <br />
                  <button class="btn bg-[#6366f1] text-white rounded-none border-none mt-2">
                    Select
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </main>
  );
}

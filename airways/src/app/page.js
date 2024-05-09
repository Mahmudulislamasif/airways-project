import Flight from '../../data/flight.json'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
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
            {Flight.flightOffer.map((flight, index) => (
            <tr key={index}>
              <td>{`${flight.itineraries[0].segments[0].carrierCode} ${flight.itineraries[0].segments[0].aircraft}`} <br /> {`${flight.itineraries[0].segments[1].carrierCode} ${flight.itineraries[0].segments[1].aircraft}`}  </td>
        
              <td>{flight.itineraries[0].segments[0].flightNumber} <br/>{flight.itineraries[0].segments[1].flightNumber}</td>
              <td>{flight.class[0][0]} <br/>{flight.class[0][1]}</td>
              <td>{flight.fareBasis[0][0]} <br/>{flight.fareBasis[0][1]}</td>
              <td>{`${flight.itineraries[0].segments[0].departure.iataCode} - ${flight.itineraries[0].segments[1].departure.iataCode}`} <br/>{`${flight.itineraries[0].segments[0].arrival.iataCode} - ${flight.itineraries[0].segments[1].arrival.iataCode}`}</td>
              <td> {flight.itineraries[0].segments[0].departure.at} <br/>{flight.itineraries[0].segments[1].departure.at}</td>
              <td>{flight.itineraries[0].segments[0].arrival.at} <br/>{flight.itineraries[0].segments[1].arrival.at}</td>
              <td>{flight.itineraries[0].duration}</td>
              <td>{flight.price} <br/><button class="btn bg-[#6366f1] text-white rounded-none border-none mt-2">Select</button></td>
            </tr>
          ))}
           
          </tbody>
          {/* foot */}
          
        </table>
      </div>
    </main>
  );
}

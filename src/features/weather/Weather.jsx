
import useFetch from './Weather.api';
import 'react-toastify/dist/ReactToastify.css';

export default function Card() {
    const [weather, loading, error] = useFetch();

    if (loading || error) {
        return (
            <div className="py-20 text-center">
                <span className="loading loading-ball loading-md"></span>
                <span className="loading loading-ball loading-md"></span>
                <span className="loading loading-ball loading-md"></span>
            </div>
        )
    }

    return (
        <>
            <section className="max-w-3xl bg-base-100 mt-20 mx-auto py-10 rounded-xl shadow-lg text-gray-500">
                <div className="px-10 grid grid-cols-2 gap-5">

                    <div className="space-y-4">
                        <p className="uppercase text-lg">Current Weather</p>
                        <p className="text-base">{weather?.location?.name}, {weather?.location?.localtime}</p>
                        <div className="py-5 flex">
                            <img src={weather?.current?.condition?.icon} />
                            <p className="ml-5 text-6xl">{weather?.current?.temp_c}</p>
                            <span className="text-3xl mr-2">°</span>
                            <span className="grid content-end text-4xl">C</span>
                        </div>
                        <p className="text-lg">{weather?.current?.condition?.text}</p>
                    </div>

                    <div className=" space-y-4 text-lg">
                        <p className="">Fahrenheit : {weather?.current?.temp_f}°</p>
                        <p className="">Pressure : {weather?.current?.pressure_mb} mb</p>
                        <p className="">Humidity : {weather?.current?.humidity}%</p>
                        <p className="">Cloud: {weather?.current?.cloud}%</p>
                        <p className="">Wind: {weather?.current?.wind_mph} km/h</p>
                    </div>

                </div>
            </section>
        </>
    )
}


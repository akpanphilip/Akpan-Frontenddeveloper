// import robotImg from '../assets/robot.png'
import rocketImg from '../assets/rocket.png'


const Banner = () => {


    return (
        <div>
          
            <div className="banner_bg bg-gray-900 text-white py-16 px-4 md:px-16 lg:px-32 xl:px-48">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lead-title">SPACE<span>X</span></h1>
                        <p className="text-lg md:text-xl">SERVICE TO EARTH ORBIT, MOON, MARS AND BEYOND</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nostrum voluptatem, nesciunt animi molestias deleniti quibusdam sapiente omnis ipsa, ducimus possimus, sed.
                        </p>
                        <button className="mt-6 rounded-md discoverBtn">Discover more</button>
                    </div>
                    <div className="md:w-1/2">
                        <img src={rocketImg} alt="Header Image" className=" rocket-banner-img h-auto rounded-md shadow-md" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner
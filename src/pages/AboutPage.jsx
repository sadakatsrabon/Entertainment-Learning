
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
// import name from "../assets/name.svg";

const AboutPage = () => {
  return (
    <div className=" px-8 text-green-500">
      <div className="max-w-2xl mx-auto">
        <div className="flex  items-start">
          <h1 className="text-4xl text-green-900 font-bold mb-4">Welcome to</h1>
          <img className="ml-3 h-10" src={name} alt="" />
        </div>
        <h2 className="text-2xl text-green-900 font-bold mb-4">
          Learn, Explore, and Create with Us
        </h2>
        <p className="text-lg text-green-900 mb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid laborum, sint quam possimus tenetur harum voluptas iusto beatae similique nam. Cupiditate enim doloribus illum, autem ad ullam nostrum quos soluta distinctio eaque! Ratione quia ipsa fugit mollitia, ex labore molestiae placeat cupiditate facere incidunt maxime exercitationem excepturi atque tempora, nihil aliquid voluptas velit eveniet! Exercitationem, pariatur totam. Aliquid maiores voluptas, praesentium ipsum quisquam sint cumque eum. Explicabo ipsa, nulla dolore alias, nostrum quos aliquid debitis corrupti facilis perspiciatis ipsam quo culpa enim rerum, ducimus minima. Adipisci consequuntur unde non. Numquam voluptates corrupti quam accusantium sed debitis impedit inventore odio necessitatibus?
        </p>
        <p className="text-green-900 text-lg mb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti iusto quae aspernatur minus, sunt dolorem, totam accusamus corporis autem sapiente iste maiores? Eaque quisquam dicta, adipisci debitis alias labore excepturi pariatur et eveniet consequatur ullam expedita, maiores vel ipsam nisi. Cumque dolore delectus ea temporibus suscipit animi itaque tempore earum cupiditate, perspiciatis necessitatibus numquam, enim minima eaque magnam odit facere libero nisi. Deleniti at quisquam minus nulla quos eveniet alias sequi ut doloribus unde et omnis provident qui, rem nesciunt veniam molestiae explicabo inventore voluptate natus quae. Debitis quaerat neque modi inventore! Magni vero rem at. Vel veritatis voluptate culpa.
        </p>
        <p className="text-lg text-green-900 mb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis porro sed accusamus? Sed totam dolor incidunt molestiae quam error debitis quos harum asperiores aliquid unde quo aperiam architecto alias nulla, laboriosam eos optio possimus, sequi officiis et? Voluptates culpa reprehenderit sapiente, commodi quidem dolorum vitae earum iure itaque aperiam adipisci quaerat perferendis temporibus rerum dicta, ut repudiandae officia! Corporis eius fuga, iusto assumenda quas sed sit odit natus tempore omnis consequuntur quam dolorum ullam dolore soluta reprehenderit error sequi atque! Dicta ut delectus perspiciatis neque dignissimos aut. Inventore fugiat asperiores debitis, quos quidem qui quod consequatur, sint odio blanditiis atque.
        </p>
        <div className="flex mb-6 text-green-500">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaInstagram size={24} />
          </a>
         
        </div>
        <div className="flex justify-center">
          <button className="text-green-900 hover:bg-orange-600 text-green-500 font-bold py-2 px-4 rounded mr-4 ">
            Our Popular instructors
          </button>
          <button className="text-green-900 hover:bg-orange-600 text-green-500 font-bold py-2 px-4 rounded ">
            Our Classes
          </button>
        </div>
        <div className="bg-black rounded my-12 h-1 w-full"></div>
      </div>
    </div>
  );
};

export default AboutPage;

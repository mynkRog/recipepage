import om from "./assets/om.jpeg";

const App = () => {
  return (
    <div className=" flex items-center justify-center w-full h-[110rem] bg-[#F3E5D8] ">
      <div className="w-[50rem] h-[99rem] flex flex-col justify-around p-10 rounded-3xl bg-white">
        <div className="flex items-center justify-center">
          <img className="w-[44rem] rounded-2xl" src={om} alt="" />
        </div>
        <div>
          <h1 className="font-['Young_Serif'] text-[3rem] w-[36rem]">
            Simple Omelette Recipe
          </h1>
          <p className="text-[#858482] font-['Outfit'] font-semibold w-[43rem]">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </div>
        <div className="bg-[#FFF7FC] h-[11rem] rounded-xl p-5 mt-5 font-['Outfit']">
          <h1 className="text-2xl ml-3 mb-3 font-bold text-[#7B284F]">
            Preparation time
          </h1>
          <ul className="list-disc marker:text-[#7B284F] ml-10 text-[#5F574E] flex flex-col gap-2">
            <li className="pl-5">
              <p className="">
                <span className="text-[#665D61] font-bold">Total:</span>{" "}
                Approximately 10 minutes
              </p>
            </li>
            <li className="pl-5">
              <p>
                <span className="text-[#665D61] font-bold"> Preparation:</span>{" "}
                5 minutes
              </p>
            </li>
            <li className="pl-5">
              <p>
                <span className="text-[#665D61] font-bold">Cooking:</span> 5
                minutes
              </p>
            </li>
          </ul>
        </div>
        <div className="font-['young_serif'] border-b-2 p-4">
          <h2 className="text-[#824631] font-medium text-3xl">Ingredients</h2>
          <ul className="list-disc marker:text-[#824631] font-['Outfit'] mt-4 ml-6 text-[#5F574E] flex flex-col gap-2">
            <li className="pl-5">
              <p>2-3 large eggs</p>
            </li>
            <li className="pl-5">
              <p>Salt, to taste</p>
            </li>
            <li className="pl-5">
              <p>Pepper, to taste</p>
            </li>
            <li className="pl-5">
              <p>1 tablespoon of butter or oil</p>
            </li>
            <li className="pl-5">
              <p>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </p>
            </li>
          </ul>
        </div>
        <div className="font-['young_serif'] border-b-2 p-4">
          <h2 className="text-[#824631] font-medium text-3xl">Instructions</h2>
          <ol className="list-decimal marker:text-[#824631] marker:font-bold font-['Outfit'] mt-4 ml-6 text-[#5F574E] flex flex-col gap-2">
            <li className="pl-5">
              <p>
                <span className="text-[#625D57] font-extrabold">
                  Beat the eggs:{" "}
                </span>
                In a bowl, beat the eggs with a pinch of salt and pepper until
                they are well mixed. You can add a tablespoon of water or milk
                for a fluffier texture.
              </p>
            </li>
            <li className="pl-5">
              <p>
                <span className="text-[#625D57] font-extrabold">
                  Heat the pan:{" "}
                </span>
                Place a non-stick frying pan over medium heat and add butter or
                oil.
              </p>
            </li>
            <li className="pl-5">
              <p>
                <span className="text-[#625D57] font-extrabold">
                  Cook the omelette:{" "}
                </span>
                Once the butter is melted and bubbling, pour in the eggs. Tilt
                the pan to ensure the eggs evenly coat the surface.
              </p>
            </li>
            <li className="pl-5">
              <p>
                <span className="text-[#625D57] font-extrabold">
                  Add fillings (optional):{" "}
                </span>
                When the eggs begin to set at the edges but are still slightly
                runny in the middle, sprinkle your chosen fillings over one half
                of the omelette.
              </p>
            </li>
            <li className="pl-5">
              <p>
                <span className="text-[#625D57] font-extrabold">
                  Fold and serve:{" "}
                </span>
                As the omelette continues to cook, carefully lift one edge and
                fold it over the fillings. Let it cook for another minute, then
                slide it onto a plate.
              </p>
            </li>
            <li className="pl-5">
              <p>
                <span className="text-[#625D57] font-extrabold">Enjoy: </span>
                Serve hot, with additional salt and pepper if needed.
              </p>
            </li>
          </ol>
        </div>
        <div className="font-[outfit] p-4">
          <h2 className="font-['young_serif'] text-[#824631] font-medium text-3xl">
            Nutrition
          </h2>
          <p className="text-[#5F574E] mt-4">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table className="text-[#5F574E] mt-4 w-[45rem]">
            <tbody className="">
              <tr className="gap-64 flex border-b-2">
                <td className="ml-8 font-medium">Calories</td>
                <td className="text-[#824631] font-bold mb-3">277kcal</td>
              </tr>
              <tr className="gap-[17rem] flex border-b-2 mt-3">
                <td className="ml-8 font-medium">Carbs</td>
                <td className="text-[#824631] font-bold mb-3">0g</td>
              </tr>
              <tr className="gap-[16.5rem] flex border-b-2 mt-3">
                <td className="ml-8 font-medium">Protein</td>
                <td className="text-[#824631] font-bold mb-3">20g</td>
              </tr>
              <tr className="gap-[18rem] flex mt-3">
                <td className="ml-8 font-medium">Fat</td>
                <td className="text-[#824631] font-bold">22g</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;

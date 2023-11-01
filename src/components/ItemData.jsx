export default function ItemData({data}) {

  function toggleInfo(e) {
    if (e.target.id === "moreInfoBtn") {
      document.getElementById("moreInfoBtn").className = "hidden";
      document.getElementById("lessInfoBtn").className = "btn btn-ghost max-w-fit justify-self-center mt-2 col-span-4";
      document.getElementById("examineTitle").className = "text-right mr-4";
      document.getElementById("examineText").className = "col-span-3";
      document.getElementById("membersTitle").className = "text-right mr-4";
      document.getElementById("membersText").className = "col-span-3";
    } else {
      document.getElementById("moreInfoBtn").className = "btn btn-ghost max-w-fit justify-self-center mt-2 col-span-4";
      document.getElementById("lessInfoBtn").className = "hidden";
      document.getElementById("examineTitle").className = "hidden";
      document.getElementById("examineText").className = "hidden";
      document.getElementById("membersTitle").className = "hidden";
      document.getElementById("membersText").className = "hidden";
    }
  }

  return (
    <div className="bg-base-200 rounded-box px-8 py-4">
      <div className="flex gap-4">
        <img className="w-12" src={data["icon"]} />
        <div className="px-4 sm:px-0">
          <h3 className="font-semibold leading-7 text-2xl">{data["name"]}</h3>
          <p className="mt-1 max-w-2xl text-sm leading-6">Item ID: {data["itemID"]}</p>
        </div>
      </div>
      <div className="grid grid-cols-[1.5fr_2fr] mt-6 pt-6 border-t border-gray-100">
        <div className="grid grid-cols-4 gap-2 auto-rows-min">
          <p className="text-right mr-4">Buy Price:</p>
          <p>{data["buyPrice"].toLocaleString()}</p>
          <p className="text-right mr-4">Buy Limit:</p>
          <p>{data["limit"].toLocaleString()}</p>
          <p className="text-right mr-4">Sell Price:</p>
          <p>{data["sellPrice"].toLocaleString()}</p>
          <p className="text-right mr-4">Potential Profit:</p>
          <p className={data["margin"] > 0 ? "text-lime-500" : "text-red-500"}>{(data["margin"] * data["limit"]).toLocaleString()}</p>
          <p className="text-right mr-4">Margin:</p>
          <p className={data["margin"] > 0 ? "text-lime-500" : "text-red-500"}>{data["margin"].toLocaleString()}</p>
          <p className="text-right mr-4 min-w-max">High Alch:</p>
          <p>{data["highAlch"].toLocaleString()} (<span className={data["highAlch"] - data["sellPrice"] > 0 ? "text-lime-500" : "text-red-500"}>{(data["highAlch"] - data["sellPrice"]).toLocaleString()}</span>)</p>
          <p className="text-right mr-4">ROI:</p>
          <p className={data["ROI"] > 0 ? "text-lime-500" : "text-red-500"}>{data["ROI"]}%</p>
          <p className="text-right mr-4">Low Alch:</p>
          <p>{data["lowAlch"].toLocaleString()} (<span className={data["lowAlch"] - data["sellPrice"] > 0 ? "text-lime-500" : "text-red-500"}>{(data["lowAlch"] - data["sellPrice"]).toLocaleString()}</span>)</p>
          <p id="examineTitle" className="hidden">Examine:</p>
          <p id="examineText" className="hidden">{data["examine"]}</p>
          <p id="membersTitle" className="hidden">Members:</p>
          <p id="membersText" className="hidden">{data["members"]}</p>
          <button id="moreInfoBtn" className="btn btn-ghost max-w-fit justify-self-center mt-2 col-span-4" onClick={toggleInfo}>More Info</button>
          <button id="lessInfoBtn" className="hidden" onClick={toggleInfo}>Less Info</button>
        </div>
        <div className="text-black bg-gray-100 text-lg font-bold text-center mx-8 mb-8 h-80">Some chart in the future</div>
      </div>
    </div>
  )
}

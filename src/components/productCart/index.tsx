interface IProps{

}

function ProductCart ({}:IProps) {
  return (
      <div className="border rounded-md p-2">
          <h3>Intelligent Soft Pants</h3>
          <img src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg" alt="product name" className="w-full" />
          <p>The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive</p>
          <div className="flex space-x-2 mt-2">
              <span className="w-5 h-5 bg-fuchsia-700 rounded-full"></span>
              <span className="w-5 h-5 bg-red-700 rounded-full"></span>
              <span className="w-5 h-5 bg-yellow-700 rounded-full"></span>
              <span className="w-5 h-5 bg-gray-700 rounded-full"></span>
              <span className="w-5 h-5 bg-blue-700 rounded-full"></span>
          </div>
          <div className="flex justify-between items-center">
              <span>455</span>
              <div> <img src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg" alt="product name" className="w-10 h-10 rounded-full" /></div>
          </div>
          <div className="flex justify-between space-x-2 my-2">
              <button className="bg-blue-500 text-white p-2 w-full rounded-md">Edit</button>
              <button  className="bg-red-500 text-white p-2 w-full rounded-md">Remove</button>
          </div>
    </div>
  )
}

export default  ProductCart
import FoodComponents from './assets/components/FoodComponents'
import { useEffect, useState } from 'react'
import MenuData from './data/MenuData'
import './App.css'
function App() {
  const [foodData,setFoodData] = useState(MenuData)
  const [dataInpage,setDataInPage]= useState([])
  const [page,setPage]=useState(0)
  //ข้อมูลทั้งหมด 10 รายการ
  //จำนวนข้อมูลแต่ละหน้า
  // จำนวนเลขหน้า = ข้อมููลทั้งหมด / จำนวนรายการแต่ละหน้า
  const pagination = ()=>{
    const foodPerPage = 3 // ให้แสดงรายการอาหาร 3 รายการต่อหนึ่งหน้า
    const pages = Math.ceil(MenuData.length / foodPerPage);
    console.log("จำนวนเลขหน้า = ",pages)

    const newFood = Array.from({length:pages},(data,index)=>{
      const start = index*foodPerPage // [0],[3]
      return MenuData.slice(start,start+foodPerPage)
    })
    return newFood
  }
  const handlePage = (index)=>{
    setPage(index)
  }
  useEffect(()=>{
    const paginate = pagination()
    setDataInPage(paginate)
    setFoodData(paginate[page])
  },[page])

    return (
      <div className="App">
        <h1>FoodCard | Pagination</h1>
        <div className='container'>
          {foodData.map((data, index) => {
            return <FoodComponents key={index} {...data} />;
          })}
        </div>
        <div className ='pagination-container'>
          {dataInpage.map((data,index)=>{
            return(
              <button key={index} 
              onClick={()=>handlePage(index)}
              className={`page-btn ${index === page ? "active-btn" : null}`}
              >{index+1}</button>
            )
          })}
        </div>
      </div>
    );
}

export default App

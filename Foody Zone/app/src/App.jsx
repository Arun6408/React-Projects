import { useEffect, useState } from 'react';
import styled from 'styled-components'
import SearchResult from './components/SearchResults/SearchResult';

export const BASE_URL='http://localhost:9000'

const App = () => {

  const [data, setData] = useState(null);
  const [filteredData,setFilteredData] = useState(null);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);
  const [selectedFilter,setSelectedFilter] = useState("all");

  useEffect(()=>{
    setLoading(true);
    const fetchData = async () => {
    try{
        const response = await fetch(BASE_URL);
    
        const jsonData = await response.json();
        setData(jsonData);
        setFilteredData(jsonData);
        setLoading(false);
      }catch(err){
        setError(err);
        return <div>error:{err}</div>
      }
    }
    fetchData();
  },[]);
  if(error) return <div>error:{error}</div>
  if(loading) return <div>Loading...</div>
  const searchFood = (e) => {
    const newData = data?.filter(item => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setFilteredData(newData);
  }

  const filterBtns =[
    {
      name:"All",
      type:"all"
    },
    {
      name:"BreakFast",
      type:"breakfast"
    },
    {
      name:"Lunch",
      type:"lunch"
    },
    {
      name:"Dinner",
      type:"dinner"
    }
  ]
  const foodType =(type)=>{
    if(type==="all"){setFilteredData(data);return;}
    const newData = data?.filter(item => {
      return item.type === type
    })
    setFilteredData(newData);
  }
  const filterBtnsClick = (type) => {
    foodType(type);
    setSelectedFilter(type)
  }
  return (
    <Container>
      <TopContainer>
        <div className="top">
          <div className="logo">
            <img src="/logo.svg" alt="logo" />
          </div>
          <div className="search">
            <input onChange={searchFood} placeholder="Search Food..." />
          </div>
        </div>
        <div className="filter">
          {filterBtns.map((item)=>(
            <Button 
              isSelected={item.type === selectedFilter}
              key={item.name}
              onClick={()=>{filterBtnsClick(item.type)}}
             >
              {item.name}
             </Button>
          ))}
        </div>
      </TopContainer>
      <BottomContainer>
        <SearchResult data={filteredData} />  
      </BottomContainer>
    </Container>
  )
}

export default App

const Container = styled.div`
  margin: 0 auto;
  background-color: #323334;
`
const TopContainer = styled.div`
  padding: 0 50px;
  min-height: 200px;
  background-color: #323334;
  display: flex;
  flex-direction: column;
  .top{
    min-height: 120px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    input{
      all: unset;
      width: 285px;
      height: 40px;
      background-color: #323334;
      border: 1px solid red;
      border-radius: 5px;
      padding-left: 20px;

    }
    ::placeholder{
      font-size:15px;
      color: white;
      font-weight: 400;
    }
  }
  .filter{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  `

export const Button = styled.button`
  background-color:${(props)=>props.isSelected ? "white" : "red"};
  color:${(props)=>props.isSelected ? "black" : "white"};
  border-radius: 5px;
  border: 1px solid red;
  padding: 10px 18px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.5s all ease-in-out;
  &:hover{
  background-color:${(props)=>props.isSelected ? "red" : "white "};
  color:${(props)=>props.isSelected ? "white" : "black"};
  }


`
const BottomContainer = styled.div`
  display: flex;  
  min-height: calc(100vh - 200px);
  background-image:url('/bg.png');
  background-size:cover ;
  display: flex;
`
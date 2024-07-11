import styled from "styled-components";
import { BASE_URL, Button } from "../../App";

const SearchResult = ({ data: foods }) => {
  return (
    <FoodContainer>
      {foods?.map((item) => (
        <FoodCard key={item.name}>
            <div className="food_image">
                <img src={BASE_URL+ item.image} alt="" />
            </div>
            <div className="food_info">
                <div className="name_text">
                    <h3>{item.name}</h3>
                    <p>{item.text}</p>
                </div>
                <div className="btn">
                    <Button>${item.price.toFixed(2)}</Button>
                </div>
            </div>
        </FoodCard>
      ))}
    </FoodContainer>
  );
};

export default SearchResult;

const FoodContainer = styled.div`
  all: unset;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const FoodCard = styled.div`
  width: 400px;
  height: 167px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #eee;
  font-size: 16px;
  display: flex;
  .food_image{
    img{
        width: 120px;
    }
  }
  .food_info{
    padding-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3{
        font-size: 18px;
    }
    p{
        font-size: 14px;
    }
    .btn{
        display: flex;
        justify-content:right;
        width: 100%;
        padding:5px  0;

        button{
            font-size: 14px;
        }
    }
  }
`;
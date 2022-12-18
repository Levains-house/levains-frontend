import { useState, useEffect, useCallback} from "react";
import axios from 'axios';

const SearchList = (props) => {
    const [places, setPlaces] = useState(null);
    const fetchUsers = useCallback(async () => {
        try {
          // 요청이 시작 할 때에는 error 와 places 를 초기화하고
          setPlaces(null);
          const response = await axios.get(
            'https://dapi.kakao.com/v2/local/search/keyword.json?sort=accuracy&page=1&size=10&category_group_code=AD5&query=제주+'+props.Keyword+'&category_group_code=AD5', {
            headers: {
                'Authorization': process.env.REACT_APP_KAKAOMAP_API
            },}
          );
          setPlaces(response.data); // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
          console.log(e);
        }
    }, 
    [props.Keyword]
    );

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);
    
    // if (loading) return <div>로딩중..</div>; 
    // if (error) return <div>에러가 /발생했습니다</div>;
    
    // if (!places) return null;
    // props.setPlace(places);

    props.setPlace(places)
}

export default SearchList;
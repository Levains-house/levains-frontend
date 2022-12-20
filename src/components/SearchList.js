import { useEffect, useCallback} from "react";
import axios from 'axios';

const SearchList = (props) => {
    const fetchUsers = useCallback(async () => {
        try {
          props.setPlace(null);
          const response = await axios.get(
            'https://dapi.kakao.com/v2/local/search/keyword.json?sort=accuracy&page=1&size=10&category_group_code=AD5&query=제주+'+props.Keyword+'&category_group_code=AD5', 
            {
              headers: {
                'Authorization': process.env.REACT_APP_KAKAOMAP_API
              },
            }
          );
          props.setPlace(response.data);
        } catch (e) {
          console.log(e);
        }
    }, 
    [props.Keyword]
    );

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);
}

export default SearchList;